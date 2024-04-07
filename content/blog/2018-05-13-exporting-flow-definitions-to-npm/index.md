---
title: How to export Flow definitions in npm packages?
authors: ["Bartosz Łaniewski"]
keywords: ["JavaScript", "Flow", "npm"]
language: en
dateCreated: 2018-05-13 00:00:00 +0100
dateUpdated: 2024-04-07 11:00:00 +0100
datePublished: 2018-05-13 00:00:00 +0100
---

More than [240 000 repositories on GitHub](https://github.com/facebook/flow/network/dependents) use Flow, but only a few export Flow definitions. In this article, I’ll show you how to export Flow definitions for a module. Before starting, I encourage you to read my previous article about [publishing Tree Shaking-friendly packages to npm](/blog/2018-04-29-publishing-packages-to-npm/).

## What is Flow?

You’ve probably already seen [Gary’s talk from CodeMash 2012](https://www.destroyallsoftware.com/talks/wat) about JavaScript. With Flow in your hands, there should be no more „_wat’s_”.

> Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale. – [Introduction to type checking with Flow](https://flow.org/en/docs/getting-started/)

Flow was first presented at the [Scale Conference](https://atscaleconference.com/) in 2014 by Facebook. Its main goal was to add additional syntax to JavaScript language to prevent type errors and give developers a more concise idea about bugs that can occur in their code. It also offers a way for IDEs to provide a better environment for spotting errors in real-time.

## How to export Flow definitions?

There are currently two ways to export Flow definitions. The easiest one is to include the source files within your package. All you have to do is change their extension to `.js.flow` and include them with the bundle.

### Exporting Flow files

Let’s start by installing the required npm dependencies using the following command:

```bash
$ npm install --save-dev glob fs-extra
```

Once installed, we can write a script that will copy all source files to the `/dest` directory and change their extension to `.js.flow`:

```javascript
// ./scripts/copy-flow-definitions.js
import { basename, resolve } from "path";
import { copy } from "fs-extra";
import glob from "glob";

async function copyFile(file) {
  const srcDir  = resolve(__dirname, "../src");
  const destDir = resolve(__dirname, "../dest");
  const fileDef = `${file}.flow`.replace(srcDir, destDir);

  await copy(file, fileDef);

  console.log(`Copied ${file} to ${fileDef}`);
}

glob(resolve(__dirname, "../src/**/*.js"), (err, files) => {
  files.forEach(file => copyFile(file));
});
```

Then, you can execute this script at the end of your build pipeline as follows:

```json
{
  "scripts": {
    "build": "npx babel ./src -d ./dest",
    "postbuild": "node ./scripts/copy-flow-definitions.js"
  }
}
```

<Newsletter />

### Adding definitions to flow-typed

If you plan to version your definitions, you should contribute to the `flow-typed` repository instead. Flow supports library definitions, which allow you to describe the interface of a module or library separately from the implementation of that module/library.

You can add your definitions by [contributing library definitions](https://flow-typed.github.io/flow-typed/#/?id=how-do-i-contribute-library-definitions) to the `flow-typed` repository. It will allow people who use your library to fetch definitions by using the following command:

```bash
$ flow-typed install library@x.x.x
```

## Conclusion

It is important to export Flow definitions so Flow can give errors if someone accidentally misuses your library. Additionally, it integrates well with most IDEs, giving developers a better experience by providing real-time documentation, auto-complete, and pointing mistakes.
