---
title: Lazy loading and code splitting in React
authors: ["Bartosz Łaniewski"]
keywords: ["React"]
language: en
dateCreated: 2019-04-20 00:00:00 +0100
dateUpdated: 2019-04-20 00:00:00 +0100
datePublished: 2019-04-20 00:00:00 +0100
---

Lazy loading is a well-known technique for improving performance and reducing the associated resources costs. It's so effective that it's even [being added to the web standard](https://github.com/whatwg/html/pull/3752) via the `loading="lazy"` attribute. In this article we will learn how to perform lazy ressources loading and code splitting in React.

> **Note:** at the time of writing this article, a lot of APIs are still in development and are not ready to be used in production.

## Glossary

> **Code splitting** […] allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time. ~ [Webpack](https://webpack.js.org/guides/code-splitting/)

> **Lazy loading** is a design pattern […] used to defer initialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used. […] The performance gains are especially significant if the initialization of the object is costly, such as in case of accessing network services. ~ [Wikipedia](https://en.wikipedia.org/wiki/Lazy_loading)

## Problem

A lot of <abbr title="Single-Page Application: a web application that load once and dynamically update as the response for user interactions.">SPAs</abbr> nowadays are "monolithic" – there's a giant JavaScript bundle which contains all of the application's files. This bundle is required via a `<script>` tag, gets downloaded on the initial visit and hopefully cached. This results in:

- a **longer initial load**: we download all of the app's code, even if it's not needed to perform the initial render or not used at all;
- **faster application rendering and in-app navigation**: all of the components are already downloaded and don't need to be lazy fetched.

This is the typical drowback of code-splitting: the initial page load is faster but each dynamic import degrades the visible in-app performance.

Developers tend to provide a visual feedback for each asynchronous action. It often results in an immense amount of loaders and it's still badly perceived by users. Once the lazy components render, they can perform other asynchronous actions (like network requests) which adds another layer of loaders.

As a developer, you need to find the perfect balance between initial and dynamic loading and focus on creating great fallback experiences.

## Solutions

Concurrent React can partially render a tree without committing the result.

### Code splitting

React 16.6 introduced [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) which allows us to perform code splitting and a [`Suspense`](https://reactjs.org/docs/code-splitting.html#suspense) component which renders placeholders for lazy-loaded resources.

```jsx
import React, { Suspense, lazy } from "react";

const Foo = lazy(() => import("./Foo"));
const Bar = lazy(() => import("./Bar"));

const LazyFooBar = () => (
  <ErrorBoundary>
    <Suspense maxDuration={1500} fallback={"Loading…"}>
      <Foo />

      <Suspense maxDuration={1000} fallback={"Loading…"}>
        <Bar />
      </Suspense>
    </Suspense>
  </ErrorBoundary>
);
```

The dynamic `import()` tells the bundler to exclude requestes filed from the main bundle. `React.lazy` returns a special component type that will suspend the render until it resolves or rejectes The exact behaviour is described in the following [RFC](https://github.com/reactjs/rfcs/blob/master/text/0064-lazy.md):

> `React.lazy` accepts a Promise factory, and returns a new component type. When React renders that type for the first time, it triggers the Promise factory […]. If the Promise is fulfilled, React reads the `.default` value from it […], and uses it as a component type for rendering. If the Promise is rejected, the rejection is handled in the same way as React normally handles errors (by letting the nearest error boundary handle it). After the code has loaded, React caches the Promise result. Next renders of the components with this type become synchronous and have no extra cost.

`Suspense` allows you to define a fallback placeholder which is displayed when the render is in the suspended state. It also allows you to configure the delay after which the fallback should be shown (via the `maxDuration` property). It will prevent the fallback component from showing up on fast networks.

`Suspense` is quite similar to `ErrorBoundary`. In fact, you can think of `Suspense` as being the `try { … }` block whereas `ErrorBoundary` is the `catch (error) { … }` block.

### Lazy loading and preloading

React team is working on an experimental library named [`react-cache`](https://github.com/facebook/react/tree/master/packages/react-cache). It provides APIs for implementing various caches for React applications. As it is dependant on some not-yet-released React APIs, this library should not be used in production.

#### API calls

One of `react-cache` use-cases is to suspense rendering on pending requests.

```javascript
const FooListResource = unstable_createResource((query) => fetchFooList(query));
```

In our render, we just read the data using the `FooListResource.read`. This method returns the response from `unstable_createResource` Promise factory and tells the nearest parent `React.Suspense` to stop the rendering and display the fallback till the resource isn't ready. The implementation is simple:

```jsx
const FooList = () => {
  const response = FooListResource.read({
    search: "Lorem ipsum dolor.",
  });

  return (
    <ul>
      {response.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
```

#### Embedded documents

You can use `react-cache` to lezy load embedded documents, such as images, videos, scripts, stylesheets and more. The implementation is quite similar to caching API calls. We start with creating a Image resource:

```javascript
const ImageResource = unstable_createResource(
  (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      // img.onerror = reject;
    })
);
```

Now, we need to create an alternative `img` component which will make use of the `ImageResource`. For this, we simply need to call `ImageResource.read(src)` – it will tell the nearest parent `React.Suspense` to stop the rendering and display the fallback till the image isn't fully loaded. The implementation is straightforward:

```jsx
const Img = ({ src, ...props }) => {
  ImageResource.read(src);

  return <img src={src} {...props} />;
};
```

Now, we can create a wrapper which will take care of providing the low-resolution fallback image for us – we just need to wrap the newely created `Img` component with a `React.Suspense` and provide a fallback image, as follows:

```jsx
function LazyImg = ({ lowResSrc, highResSrc, ...props }) => (
  <React.Suspense fallback={<img {...props} src={lowResSrc} />}>
    <Img {...props} src={highResSrc} />
  </React.Suspense>
)
```

There's a GitHub project named `the-platform` which turns Web API's into React Hooks and Suspense-friendly React components. It provides a sets of lazy components out-of-the-box, such as:

- [`<Img>`](https://github.com/palmerhq/the-platform#img)
- [`<Script>`](https://github.com/palmerhq/the-platform#script)
- [`<Video>`](https://github.com/palmerhq/the-platform#video)
- [`<Audio>`](https://github.com/palmerhq/the-platform#audio)
- [`<Preload>`](https://github.com/palmerhq/the-platform#preload)
- [`<Stylesheet>`](https://github.com/palmerhq/the-platform#stylesheet)

## Resources

1. https://reactjs.org/docs/code-splitting.html
2. https://medium.com/@rossbulat/react-lazy-suspense-and-concorrent-react-breakdown-with-examples-2758de98cb1c
3. https://github.com/palmerhq/the-platform
4. https://youtube.com/watch?v=SCQgE4mTnjU
5. https://www.youtube.com/watch?v=ByBPyMBTzM0
