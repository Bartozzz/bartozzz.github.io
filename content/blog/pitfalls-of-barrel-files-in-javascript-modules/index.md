---
title: "Why you should avoid Barrel Files in JavaScript Modules?"
authors: ["Bartosz Łaniewski"]
keywords: ["JavaScript", "Architecture"]
language: en
dateCreated: 2024-03-28 00:00:00 +0100
dateUpdated: 2024-04-05 14:30:00 +0100
datePublished: 2024-04-05 14:00:00 +0100
---

Barrel files consolidate the exports of multiple modules into a single file. We use them to import a module using a single import statement without worrying about the underlying folder structure.

Have a look at the following example of a `Modal` component:

```
/components
└── /Modal
    ├── Modal.js
    ├── ModalHeader.js
    ├── ModalContent.js
    └── ModalFooter.js
```

A barrel would be an `index.js` file at `./components/Modal` with the following definition:

```js
export { Modal } from "./Modal";
export { ModalHeader } from "./ModalHeader";
export { ModalContent } from "./ModalContent";
export { ModalFooter } from "./ModalFooter";
```

It allows us to write a single import statement, such as:

```js
import { Modal, ModalHeader, ModalContent, ModalFooter } from "./Modal";
```

…instead of:

```js
import { Modal } from "./Modal/Modal";
import { ModalHeader } from "./Modal/ModalHeader";
import { ModalContent } from "./Modal/ModalContent";
import { ModalFooter } from "./Modal/ModalFooter";
```

At first glance, barrel files look promising! Barrel files can improve code organization and make imports cleaner, especially in larger projects with many modules. But there’s a hidden cost.

## The bundle size cost

If you target a no-build architecture or don’t have [tree-shaking](/blog/2018-04-29-publishing-packages-to-npm/) enabled in your bundler, all the files imported in the barrel file will get bundled into the application, even when unused! It results in tons of dead code, which can impact loading times.

Let’s have a look at the following application, which renders a simple `Button` component from the [Material Design component library](https://mui.com/material-ui/):

```jsx
import { Button } from "@mui/material";

export function App() {
  return <Button>Text</Button>;
}
```

```
> node scripts/build.js

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  151.47 kB build/static/js/main.js
```

Now let’s import the `Button` component directly, skipping the barrel file:

```diff
-import { Button } from "@mui/material";
+import Button from "@mui/material/Button";

export function App() {
  return <Button>Text</Button>;
}
```

```
> node scripts/build.js

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  75.69 kB (-75.77 kB)  build/static/js/main.js
```

<Alert type="success">
  When not using a barrel file, the build size <u>decreased from ~151 kB to ~75 kB</u>.
</Alert>

<Alert type="info">
  Fortunately, most bundlers have tree shaking enabled by default because it reduces bundle size without changing the code behavior.
</Alert>

## The build-time cost

Barrel files are one of the key reasons why tooling is slow in bigger projects. All of your modules are likely to load barrel files (the imports are nice, after all), and so are your modules hidden behind the barrel files. It can result in a graph of import statements, where each module depends on another one, and so on.

The more files, the longer it takes for the bundler to resolve and manage them. Here are the execution times of the build script for both variants:

- **With barrel file:**

```jsx
import { Button } from "@mui/material";

export function App() {
  return <Button>Text</Button>;
}
```

```
Execution time: 0h:00m:10s sec
```

- **Without barrel file:**

```diff
-import { Button } from "@mui/material";
+import Button from "@mui/material/Button";

export function App() {
  return <Button>Text</Button>;
}
```

```
Execution time: 0h:00m:7s sec
```

<Alert type="success">
  The build time is <u>30% faster</u> when not using a barrel file.<sup title="In a real-world scenario, the build time will probably not decrease by that much.">*</sup>
</Alert>

## The test-time cost

In both articles (I highly recommend reading those):

- ["Why is My Jest Test Suite So Slow?"](https://dev.to/twynsicle/why-is-my-jest-test-suite-so-slow-1od) by Steven Lemon, and
- ["Speeding up the JavaScript ecosystem - The barrel file debacle"](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/) by Marvin Hagemeister

...the conclusion is the same: barrel files slow down tests.

> The problem is that Jest has no idea where the component we’re importing is located. The barrel file has intentionally obfuscated that fact. So when Jest hits a barrel file, it must load every export referenced inside it. This behavior quickly gets out of hand for large libraries like `@mui/material`. We’re looking for a single button and end up loading hundreds of additional files.

Let's run the same test suite on two modules:

- **Importing from barrel file:**

```jsx
import { Button } from "@mui/material";

export function App() {
  return <Button>Text</Button>;
}
```

```
> node scripts/test.js

 PASS  src/App.test.js
  ✓ renders button (25 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Time:        1.717 s, estimated 2 s
```

- **Importing directly from the module:**

```diff
-import { Button } from "@mui/material";
+import Button from "@mui/material/Button";

export function App() {
  return <Button>Text</Button>;
}
```

```
> node scripts/test.js

 PASS  src/App.test.js
  ✓ renders button (29 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Time:        1.097 s
```

<Alert type="success">
  The test duration <u>decreased from ~1.7 to ~1.1 seconds</u> when not importing from a barrel file.
</Alert>

Notice the test suite itself took 25-29ms. The 60ms overhead comes from building the module graph. The cost of loading modules can change depending on the machine and the tooling.

In my lab setup, 10 independent tests running in 4 child processes would result in a $$\frac{0.6 \times 10}{4} = 1.5$$ seconds overhead.

## The lint-time cost

Barrel files affect the linting performance. Let’s say you use the `import/no-cycle` rule from `eslint-plugin-import`, which ensures there is no resolvable path back to a module via its dependencies by building a dependency graph. When it comes across a barrel file, the linting time will take longer because it has to resolve all the exports from the barrel file.

<Alert type="info">
  Unlike testing, linting is done on a file basis, so the dependency graph is built for each file separately.
</Alert>

## Developer experience

1. Most (if not all) IDEs have autocomplete and IntelliSense - you can type the function name, and it will get the import right automatically.

2. Having barrel files makes code navigation harder - <kbd>CMD + click</kbd> navigates to the barrel file instead of the actual definition of the module.

## Conclusion

As software engineers, we are implementing new features daily, and each one has to be covered by _tests_. To do so, we use _linters_ to help us write better code faster. Then, we _build_ our app for a testing environment before releasing it to production (_another build_), and so on...

Builds, tests, and tooling will only get slower as the application grows. Avoiding barrel files can improve performance without compromising the architecture or the developer experience.
