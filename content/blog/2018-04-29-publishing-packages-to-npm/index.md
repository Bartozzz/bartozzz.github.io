---
title: How to publish a Tree Shaking friendly npm package?
authors: ["Bartosz Łaniewski"]
keywords: ["JavaScript", "npm"]
language: en
dateCreated: 2018-04-29 00:00:00 +0100
dateUpdated: 2024-04-07 00:00:00 +0100
datePublished: 2018-04-29 00:00:00 +0100
---

With the rise of ES2015, modules have officially become an integral part of JavaScript. By their nature, ES2015 modules are static and can be optimized at the compile time. Various tools and techniques have been created to minimize the total size of generated bundles. The one described in this article is called tree shaking.

## Introduction to npm packages

**npm** is the most popular package manager for JavaScript. It is shipped by default with Node.js – the JavaScript runtime environment. Each month, there are over [20 billion downloads](https://www.npmjs.com/) from the npm registry, which counts more than half a million different packages.

### How does bundling work?

A package is a directory described by a `package.json`. Each package is composed of one or more modules that can be loaded by Node.js’ `require()`. A package usually exposes a single module via the `main` field specified in `package.json`. If there’s no such field, npm will look for `index.js` in the root directory.


Most bundlers (such as [Webpack](https://webpack.js.org/) or [Browserify](https://browserify.org/)) will output a unique JavaScript file when building the package. For example, let’s consider the following code:

```javascript
// Entry point: index.js
export * as moduleA from "./src/moduleA";
export * as moduleB from "./src/moduleB";
export * as moduleC from "./src/moduleC";
```

Webpack will start by compiling the source file (called _entry point_). It will then move from `import` to `import` and include every required file in the build pipe. It will generate a single bundle containing all the imported modules as follows:

```javascript
(function (modules) {
  // Webpack stuff
})({
  "./index.js": function (module, exports, __webpack_require__) {
    "use strict";
    // Compiled entry-point
  },
  "./src/moduleA.js": function (module, exports, __webpack_require__) {
    "use strict";
    // Compiled moduleA
  },
  "./src/moduleB.js": function (module, exports, __webpack_require__) {
    "use strict";
    // Compiled moduleB
  },
  "./src/moduleC.js": function (module, exports, __webpack_require__) {
    "use strict";
    // Compiled moduleC
  },
});
```

Once published to npm, each module can be loaded using Node.js’ `require()` (or [ES2015 `import`](https://tc39.es/ecma262/#sec-imports)) as follows:

```javascript
import { moduleA, moduleB, moduleC } from "package";

moduleA.method();
moduleB.method();
moduleC.method();
```

Such bundlers can work because [ES2015 packages are static by nature][1]: you can predict which modules are being imported and exported just by analyzing the code without the need to execute it. However, this has some drawbacks:

- **conditional imports and exports** are unsupported – you have to declare your imports at the top level;
- both imports and exports **cannot have any dynamic parts** – you cannot use string concatenation in `require()`.

### What is tree shaking?

Tree shaking is a script that performs code analysis for a given bundle and checks which modules are never used at the **compile (build) time**. Let’s take the previous example:

```javascript
import { moduleA, moduleB } from "package";
```

`package` exports `moduleA`, `moduleB`, and `moduleC`, but only the first two are imported. Without tree shaking, the final bundle would contain unreachable code (`moduleC`). Unused exports can be removed during bundling, potentially resulting in significant space savings.

> Utilizing the tree shaking and dead code elimination can significantly reduce the code size we have in our application. The less code we send over the wire the more performant the application will be. – [Alex Bachuk](https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd).

<Newsletter />

## Creating tree shaking-friendly packages

Our goal will be to expose multiple module bundles from a single package so one can `import` only necessary parts instead of the entire library:

```javascript
import * as moduleA from "package/moduleA";
import * as moduleB from "package/moduleB";
import { funcA, funcB } from "package/moduleC";
```

- If we import only `moduleA`, the two other modules will not be included in the final bundle because they aren’t required anywhere.
- If we import only a specific function from a module (ex. `funcA`), the rest of the module’s content will be ignored.

We don’t have to access a named export like in previous examples. That means we don’t have to do a slow, dynamic property lookup. In our case, we know the content and can optimize the access.

### Directory structure overview

```
├── scripts/
│   └── copy.js
├── package/
│   └── package.json
├── source/
│   ├── moduleA/
│   ├── moduleB/
│   ├── moduleC/
│   └── index.js
└── package.json
```

- `scripts/` will contain all JavaScript binaries that will be used to build your package.
- `package/` directory is where your package will reside once it is compiled. It is the directory that will be pushed to the npm registry.
- `source/` directory is where your package source resides. It will not be pushed to the npm registry but should be in the repository.

As you can see, there are two `package.json` files. The one at the root will be used to declare your dependencies, metadata, and scripts. The second one will be pushed to the npm registry. It will get generated automatically and populated with more fields, such as `main`.

### Compiling and building the package

In this article, we will use [Babel](https://babeljs.io/) for the compilation process. Babel is a JavaScript transpiler that converts ECMAScript and other JavaScript subsets into plain JavaScript that can be used in any environment. First, you need to install Babel as a development dependency in your project:

```bash
$ npm install --save-dev babel-cli
```

For in-depth installation details, I encourage you to check [Babel’ setup section in their documentation](https://babeljs.io/setup/). Once Babel is installed, we can define a few scripts in `/package.json`:

```json
{
  "private": true,
  "dependencies": {
    "rimraf": "^5.0.5",
    "fs-extra": "^11.2.0"
  },
  "scripts": {
    "clean": "npx rimraf ./package/*",
    "build": "npx babel ./source --out-dir ./package",
    "copy": "npx babel-node ./scripts/copy.js"
  }
}
```

- `npm run clean` will remove built modules from the `/package` directory.
- `npm run build` will build modules and pipe the bundles to the `/package` directory.
- `npm run copy` will execute the `/scripts/copy.js` script described in the next section.

<Alert type="info">
  It is important to set `private` to `true` in `/package.json` to prevent you from accidentally pushing your entire repository to the npm registry instead of only the build.
</Alert>

### Copying required files into the package

The script below will copy meta files such as `README.md` and `LICENSE` to your final package. Additionally, it will create a brand new `package.json`.

```javascript
// File: /scripts/copy.js
import { basename, resolve } from "path";
import { copy, writeFile } from "fs-extra";

async function copyFile(file) {
  const fileName = basename(file);
  const filePath = resolve(__dirname, "../package/", fileName);

  await copy(file, filePath);

  console.log(`Copied ${file} to ${filePath}`);
}

async function createPackageFile() {
  const oldPackagePath = resolve(__dirname, "../package.json");
  const oldPackageData = require(oldPackagePath);

  delete oldPackageData.private;
  delete oldPackageData.scripts;
  delete oldPackageData.devDependencies;

  const newPackagePath = resolve(__dirname, "../package/package.json");
  const newPackageData = Object.assign(oldPackageData, { main: "./index.js" });
  await writeFile(newPackagePath, JSON.stringify(newPackageData), "utf8");

  console.log(`Created package.json in ${newPackagePath}`);
}

async function run() {
  await copyFile("README.md");
  await copyFile("LICENSE");
  await createPackageFile();
}

run();
```

## Limitations and solutions

Tree shaking is a relatively new technology and still has some limitations. While not every single one can be resolved directly in tree shaking, there are various ways around these problems.

### Side effects in module bundles

Some modules have side effects: they can perform additional tasks, such as modifying global variables instead of just exporting their content. According to the ECMAScript specifications, all child modules must be evaluated because they could contain side effects. Let’s take the following examples:

```javascript
// moduleA
console.log("Side effect");

export {/* … */};
export default /* … */;
```

```javascript
// moduleB
window.a = /* … */;
window.b = /* … */;
window.c = /* … */;
```

Because of this potential behavior, tree shaking cannot remove all unreachable code. However, some bundlers, such as Webpack, drop the responsibility on the developers by providing a `sideEffect` option. By setting this flag to `false`, you indicate that your package is a _pure module_ and doesn’t have any side effects. Therefore, it can be aggressively optimized.

### Wrong specs implementation

> Current tooling differs on the correct way to handle default imports/exports. Avoiding them all together can help avoid tooling bugs and conflicts. – [TSLint rules][6]

### Class-based tree shaking

Class-based tree shaking is currently not supported because of the dynamic nature of JavaScript’s property accessors – they cannot be statically determined, especially when using bracket notation. Let’s consider the following example:

```javascript
const bar = new Foo();

bar.methodA();
bar["methodB"]();
bar[`method${n}`]();
bar["methodD".split("").reverse().join("")]();
```

As you can see, `methodA` and `methodB` can be statically determined as being used at compile time, but this is not true for the last two cases. There are different proposals to improve tree shaking in classes.

#### Bind operator proposal

> The :: operator creates a bound function such that the left hand side of the operator is bound as the this variable to the target function on the right hand side. By providing syntactic sugar for these use cases we will enable a new class of "virtual method" library, which will have usability advantages over the standard adapter patterns in use today. – [tc39/proposal-bind-operator][2]

```javascript
import Foo, { methodA, methodB } from "foo";

const bar = new Foo();
bar::methodA();
bar::methodB();
```

#### Pipeline operator proposal

> This proposal introduces a new operator \|\> similar to _F#, OCaml, …, Hack and LiveScript_, as well as UNIX pipes. It’s a backwards-compatible way of streamlining chained function calls in a readable, functional manner, and provides a practical alternative to extending built-in prototypes. – [tc39/proposal-pipeline-operator][3]

```javascript
import Foo, { methodA, methodB } from "foo";

const bar = new Foo();
bar |> methodA();
bar |> methodB();
```

## Resources

1. [Exploring JS – Static module structure][1]
2. [ECMAScript – This-Binding Syntax][2]
3. [ECMAScript – The Pipeline Operator][3]
4. [Rollup – Tree shaking documentation][4]
5. [Webpack – Tree shaking documentation][7]
6. [Rollup vs Webpack2 – David Rodenas][5]

[1]: https://exploringjs.com/es6/ch_modules.html#static-module-structure "Exploring JS – Static module structure"
[2]: https://github.com/tc39/proposal-bind-operator "ECMAScript This-Binding Syntax"
[3]: https://github.com/tc39/proposal-pipeline-operator "ESNext Proposal: The Pipeline Operator"
[4]: https://rollupjs.org/guide/en#tree-shaking "Rollup – Tree shaking documentation"
[5]: https://web.archive.org/web/20190922121239/http://david-rodenas.com:80/posts/rollup-vs-webpack-and-tree-shaking "Rollup vs. Webpack – Tree shaking"
[6]: https://palantir.github.io/tslint/rules/no-default-export/ "TSLint rules – no default export"
[7]: https://webpack.js.org/guides/tree-shaking/ "Webpack – Tree shaking documentation"
