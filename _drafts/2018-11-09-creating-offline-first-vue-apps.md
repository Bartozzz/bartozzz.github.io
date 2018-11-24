---
layout: article
title: Creating offline-first Vue.js applications
date: 2018-09-11 00:00:00 +0100
lang: en
categories: vue pwa offline
authors: ["Bartosz Łaniewski"]
keywords: ["Vue.js", "PWA", "Offline-first"]
---

With JavaScript increasingly gaining popularity, Progressive Web Apps (_PWAs_) might replace native mobile & desktops apps in the future. In this post, we will learn how to develop & test offline-first, Vue-based Progressive Web Applications and why it is worth-it. This article was originally written for [Milo Solutions](https://www.milosolutions.com/en/) – a polish company focused on delivering custom software solutions for any platform.

{:toc}

## Introduction to Progressive Web Apps (PWAs)

Progressive Web Apps can be installed on most devices much like native apps. They are meant to be **relaible** (work on each platform, even offline), **fast** and provide a **native-like** user experience. These apps combine the best of web and native solutions:

- They are **rapid to develop**, **cross-compatible** and **responsive** by nature. JavaScript provides a lot of frameworks (such as [Vue](https://vuejs.org/), [React](https://reactjs.org/)) and dedicated front-end component libraries to boost productivity. You write your code once and deploy you application on every platform;
- **Fast load, fast response**. Progressive web apps are comparable to native solutions in terms of efficiency. With _service workers_, cache and several optimizations made in engines running JavaScript, Progressive Web Applications' loading and response times are very low;

### Browser support

Progressive Web Apps are compatible with every mobile device which support one of the following browsers:

- **Google Chrome** (since v40+);
- **Firefox** (since v44+);
- **Safari** (since v11.1+);
- **Edge** (since v17+);

Additionally, Google Chrome recently added support for Progressive Web Apps on desktop platofrms, such as:

- **Chrome OS** (since Chrome 67+);
- **Linux** (since Chrome 70+);
- **Windows** (since Chrome 70+);
- **macOS** (since Chrome 72+);

## Getting started

In this article, we will be using [Vue-CLI](https://cli.vuejs.org/) to create a brand-new Vue project. You can follow the instructions on [their website](https://cli.vuejs.org/guide/creating-a-project.html#vue-create). I encourage you to manually select the following features:

1. `Babel` (used in this tutorial);
2. `TypeScript` (used in this tutorial);
3. `Progressive Web App (PWA) support` (required in this tutorial);

### Setting up a service worker

[Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (not to be confused with [_worklets_](https://developer.mozilla.org/en-US/docs/Web/API/Worklet)) represents background tasks that can be executed on a different thread and communicate with the main one – your web application, via the `postMessage` interface. This comes very handy when you need to access the DOM: since workers are on a different thread, they don't have access to any of your web app internals.

Service workes offer more functionality than the standard browser API, i.e. you can send push notifications, create periodic background tasks and intercept requests. In order to use workers, your website must be served over HTTPS. Even if service workers are not compatible with some web browsers, you can safely add them in your application – it will not break the experience for any user (_progressive enhancement_).

[`@vue/cli-plugin-pwa`](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa) should take care of creating a service worker. The generated service worker will cache all the builded resources. If you want to create a service worker manually, you can modify this behaviour in the `vue.config.js` file by adding the following lines:

```js
module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "public/service-worker.js"
    }
  }
};
```

It is important that the path in `swSrc` option matches the path specified in `registerServiceWorker.ts` file, otherwise you service worker will not be registered. You can then use [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) to define custom rules for request interceptors. Here's an example:

```js
workbox.setConfig({ debug: true });
workbox.precaching.precacheAndRoute([]);

// Cache images:
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);

// Cache Google fonts:
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "googleapis",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
);
```

### Prompting the user to install

Installing a Progressive Web Application works the same way on both mobile and desktop devices. The website must meet a few requirements before it can be prompted to install:

1. Meets a user engagement heuristic;
2. Includes a web app manifest file;
3. Has an icon to represent the app on the device;
4. Has a registered service worker to make the app work offline;
5. The web app is served over HTTPS and not already installed;

If those criterias are met, web browser will emit a `beforeinstallprompt` event which you can use to notify the user that your app can be installed. The most common way is by adding a button on the website. It is considered best practice to don't show a full page banner or distracting notifications.

```javascript
let installButton = document.querySelector("#install-btn");
let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt:
  event.preventDefault();

  // Stash the event so it can be triggered later:
  deferredPrompt = event;

  // Update UI notify the user they can add to home screen:
  installButton.classList.remove("is-hidden");
});

installButton.addEventListener("click", () => {
  installButton.classList.add("is-hidden");

  // Show the prompt:
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choice => {
    deferredPrompt = null;

    switch (choice.outcome) {
      case "accepted":
        return /*…*/;

      default:
        return /*…*/;
    }
  });
});
```

### Prompting the user to update

In `registerServiceWorker.ts` file, you should have a `updated` handler. This function will be executed each time a new version of your website is available – in order to get the updated version, the user should simply reload the page. It is considered very bad practice to force a page reload, therefore it is advised to create a small banner which will pop-up and inform the user about the update. We can start by creating a banner markup in our `index.html` file, as follows:

```html
<div id="update-banner" class="banner" style="display: none">
  <p>There's a new version of Foo App.</p>
  <button id="update-button">Reload</button>
</div>
```

Next, we need to show this banner when a new update comes in, and add necessary event handlers for the "Reload" button. This can be achieved directly in `updated` function:

```ts
updated() {
  console.log("New content is available; please refresh.");

  const updateBanner = <HTMLElement>document.getElementById("update-banner");
  const updateButton = <HTMLElement>document.getElementById("update-button");

  updateBanner.style.display = "block";
  updateButton.addEventListener("click", () => {
    location.reload();
  });
}
```

Note that you could create a Vue component instead of a pure HTML-based banner, but then you should store `updateAvailable` state in your App' store (e.g. Vuex) and it would require a lot more work.

### Handling offline-first forms

There are 2 ways of handling offline forms: the first one is by intercepting the request when user i offline and sending it again when there's a internet connection. There are a few problems to take care of:

1. **Concurrency**: what if the data on remote database has changed when user was offline? Overwritting it might be an unwanted behaviour.
2. **False positives**: if the user is connected to internet, it doesn't necessary mean that he can send requests yet.
3. **Error handling**: when the request failed, how should we inform the user that the request he tried to made 3 days ago failed?
4. **Application architecture**: this kind of offline-first form handling often requires a more complex architecture.

The easier approach is to save the form state in local storage and inform the user that he will be able to submit the form once he'll be online again. This solution can be implemented in a few line for each already existing form.

Let's start with creating a local store in `store/local.ts`. We will use [`LocalForage`](https://github.com/localForage/localForage) library which wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API. It will allow us to store data in the most suitable local storage available on user's device:

```ts
import LocalForage from "localforage";

// This must be called before any other calls to localForage are made,
// but can be called after localForage is loaded.
LocalForage.config({
  name: "foo-app",
  storeName: "foo-app-store",
  version: 1.0
});

export default LocalForage;
export const formStore = LocalForage.createInstance({ name: "form" });
```

Then, we can modify any form to use the local `formStore` when needed, as follows:

```html
<template>
  <form @submit="onSubmit">
    <input type="text" v-model="form.author" placeholder="Your name…" />
    <input type="text" v-model="form.message" placeholder="Message…" />

    <button type="submit">Send</button>
  </form>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { formStore } from "@/store/local";

  type MaybeString = string | null | void;

  interface FormData {
    author: MaybeString;
    message: MaybeString;
  }

  @Component({})
  export default class SomeForm extends Vue {
    form: FormData = {
      author: null,
      message: null
    };

    storeData(data: FormData) {
      formStore.setItem<MaybeString>("some-form-author", data.author);
      formStore.setItem<MaybeString>("some-form-message", data.message);
    }

    sendData(data: FormData) {
      // Reset form data once form sent:
      this.form.author = null;
      this.form.message = null;

      // Reset local storage:
      formStore.setItem<MaybeString>("some-form-author", null);
      formStore.setItem<MaybeString>("some-form-message", null);

      // Make a request here…
    }

    onSubmit(event: Event) {
      event.preventDefault();
      event.stopPropagation();

      // Normalize & validate form data:
      const form: FormData = {
        author: this.form.author,
        message: this.form.message
      };

      if (navigator.onLine) {
        this.sendData(form);
      } else {
        this.storeData(form);
      }
    }

    created() {
      formStore.getItem<MaybeString>("some-form-author").then(value => {
        this.form.author = value;
      });

      formStore.getItem<MaybeString>("some-form-message").then(value => {
        this.form.message = value;
      });
    }
  }
</script>
```

### Testing offline-first applications

You can test your Progressive Web Applications directly in the browser, without the need to manually disable network connections.

**Testing the application in offline mode:**

1. Go to **Network** panel.

**Testing the "add to home screen" experience:**

1. Go to the **Application** panel.
2. Go to the **Manifest** tab.
3. Click **Add to home screen**.

## Conclusion

In this article, we learned how to create a great base for offline-first, PWAs using Vue.js, web manifest and other standards. There's a lot more to consider to make a great native-like feeling and keep your user engaged. Here are some points to consider:

- Keyboard shortcuts;
- Notification & icon badges;
