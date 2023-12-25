---
title: Creating offline-first Progressive Web Applications in Vue
authors: ["Bartosz Łaniewski"]
keywords: ["Vue", "PWA"]
language: en
dateCreated: 2019-01-05 00:00:00 +0100
dateUpdated: 2023-12-26 00:00:00 +0100
datePublished: 2019-01-05 00:00:00 +0100
---

With JavaScript increasingly gaining popularity, Progressive Web Apps (_PWAs_) might replace native mobile & desktop apps in the future. In this post, we will learn how to develop and test offline-first, Vue-based Progressive Web Applications and why it is worth it.

## Introduction to Progressive Web Apps (PWAs)

Progressive Web Apps can be installed on most devices like native apps. They are meant to be **reliable** (work on each platform, even offline), **fast**, and provide a **native-like** user experience. These apps combine the best of web and native solutions:

- They are **rapid to develop**, **cross-platform** and **responsive** by nature. JavaScript provides a lot of frameworks (such as [Vue](https://vuejs.org/), [React](https://react.dev/)) and dedicated front-end component libraries to boost productivity (Bootstrap, Material UI). You write your code once and deploy your application on every platform;
- **Fast load**, **fast response**. Progressive web apps are comparable to native solutions in terms of efficiency. With _service workers_, cache, and several optimizations made in engines running JavaScript, Progressive Web Applications’ loading and response times are very low.

It is important to notice that if you are planning on making your application a PWA, you don’t have to rewrite all the logic. For example, your application should work offline, but it doesn’t mean that you must set up a background queue or store your data in a persistent storage – an offline message (e.g. “_You’re offline, check your network status._”) is enough.

### Browser support

Progressive Web Apps are compatible with every mobile device that supports one of the following browsers:

- **Google Chrome** (since v40+);
- **Firefox** (since v44+);
- **Safari** (since v11.1+);
- **Edge** (since v17+);

Additionally, Google Chrome recently added support for Progressive Web Apps on desktop platforms, such as:

- **Chrome OS** (since Chrome 67+);
- **Linux** (since Chrome 70+);
- **Windows** (since Chrome 70+);
- **macOS** (since Chrome 72+);

## Getting started

In this article, we will be using [Vue-CLI](https://cli.vuejs.org/) to create a brand-new Vue project. You can follow the instructions on [their website](https://cli.vuejs.org/guide/creating-a-project.html#vue-create). I encourage you to manually select the following features:

1. **Babel** (used in this tutorial);
2. **TypeScript** (used in this tutorial);
3. **Progressive Web App** (PWA) support (required in this tutorial);

### Setting up a service worker

[Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (not to be confused with [_Worklets_](https://developer.mozilla.org/en-US/docs/Web/API/Worklet) or raw [_Workers_](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)) represents a proxy between the browser and the network – they allow you to intercept requests made by your application and handle each one separately enabling offline access, browser-level caching and more.

Like Workers, service workers are executed on a different thread and communicate with the main one – your web application, via an API: since Workers are on a different thread, they don’t have direct access to any of your web app internals. Workers generally offer more functionality than the standard browser API and Service Workers, i.e. to send push notifications, create periodic background tasks, hook into OS internals ([Share Target API](https://developers.google.com/web/updates/2016/09/navigator-share), …).

To use Workers, your website must be served over HTTPS. Even if service Workers are not compatible with some web browsers, you can safely add them to your application – it will not break the experience for any user (_progressive enhancement_).

[`@vue/cli-plugin-pwa`](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa) should take care of creating a Service Worker. The generated Service Worker will cache all built resources. If you want to create a service worker manually, you can modify this behavior in the `vue.config.js` file by adding the following lines:

```typescript
module.exports = {
 pwa: {
   workboxPluginMode: "InjectManifest",
   workboxOptions: {
     swSrc: "public/service-worker.js"
   }
 }
};
```

The path in `swSrc` option must match the path specified in the `registerServiceWorker.ts` file, otherwise, your Service Worker will not be registered. You can then use [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) to define custom rules for request interceptors. Here’s an example:

```javascript
// public/service-worker.js
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
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
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
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);
```

### Prompting the user to install

Installing a Progressive Web Application works the same way on both mobile and desktop devices. The website must meet a few requirements before it can be prompted to install:

1. Meet a user engagement heuristic;
2. Include a web app manifest file;
3. Have an icon to represent the app on the device;
4. Have a registered service worker to make the app work offline;
5. The web app must be served over HTTPS and not already installed;

If those criteria are met, the web browser will emit a `beforeinstallprompt` event which you can use to notify the user that your app can be installed. The most common way is by adding a button on the website. It is considered best practice to not show a full-page banner or distracting notifications. Let’s add some markup for our `InstallBanner` component:

```html
<template>
 <div class="banner" v-if="deferredPrompt">
   <p>Do you want to install Foo App?</p>
   <button @onClick="promptInstall">Opt for!</button>
 </div>
</template>
```

Instead of dealing with adding and removing event listeners for the `beforeinstallprompt` event manually, we can use the [`vue-pwa-install`](https://github.com/Bartozzz/vue-pwa-install) plugin which I wrote for this article. It will emit a `canInstall` in the root event bus – what you need to do is listen for this particular event in one of your components. First, let’s install the `vue-pwa-install` plugin with the following command:

```bash
$ npm install --save vue-pwa-install
```

Then, register this installed plugin in your app entry point:

```typescript
import Vue from "vue";
import VueInstall from "vue-pwa-install";

Vue.use(VueInstall);
```

Once registered, we can listen for the `canInstall` event in any component and handle the event to show the install prompt. Let’s add the following code in our `InstallBanner` component:

```html
<script lang="ts">
 import { Component, Vue } from "vue-property-decorator";
 import { BeforeInstallPromptEvent } from "vue-pwa-install";

 @Component({})
 export default class InstallBanner extends Vue {
   deferredPrompt: BeforeInstallPromptEvent | void;

   promptInstall() {
     // Show the prompt:
     this.deferredPrompt.prompt();

     // Wait for the user to respond to the prompt:
     this.deferredPrompt.userChoice.then(choiceResult => {
       if (choiceResult.outcome === "accepted") {
         // User accepted the install prompt
       }

       this.deferredPrompt = null;
     });
   }

   created() {
     this.$on("canInstall", (event: BeforeInstallPromptEvent) => {
       // Prevent Chrome >=67 from automatically showing the prompt:
       event.preventDefault();

       // Stash the event so it can be triggered later:
       this.deferredPrompt = event;
     });
   }
 }
</script>
```

And that’s all. The banner should be displayed on the website once the 5 requirements listed above are met, and when the user clicks on _Opt for_ button, he will be asked by the browser if he wants to install the app on his local machine.

<Newsletter />

### Prompting the user to update

In the `registerServiceWorker.ts` file, you should have an updated handler. This function will be executed each time a new version of your website is available – to get the updated version, the user should simply reload the page. It is considered very bad practice to force a page reload, therefore it is advised to create a small banner that will pop up and inform the user about the update. We can start by creating a banner markup in our `index.html` file, as follows:

```html
<div id="update-banner" class="banner" style="display: none">
  <p>There’s a new version of Foo App.</p>
  <button id="update-button">Reload</button>
</div>
```

Next, we need to show this banner when a new update comes in and add necessary event handlers for the "Reload" button. This can be achieved directly in the `updated` function:

```typescript
updated() {
 // New content is available
 const updateBanner = <HTMLElement>document.getElementById("update-banner");
 const updateButton = <HTMLElement>document.getElementById("update-button");

 updateBanner.style.display = "block";
 updateButton.addEventListener("click", () => {
   location.reload();
 });
}
```

Note that you could create a Vue component instead of a pure HTML-based banner, but then you should store the `updateAvailable` state in your App’ store (e.g. Vuex) and it will require some more work.

If possible, configure your production environment to serve `service-worker.js` with HTTP caching disabled. Otherwise, if you visit your web app, and then revisit before `service-worker.js` has expired from the cache, you’ll continue to get the update banner showing.

### Handling offline-first forms

There are 2 ways of handling offline forms: the first one is by intercepting the request when the user is offline and sending it again when there’s an internet connection. There are a few problems that you must take care of:

1. **Concurrency:** what if the data on the remote database has changed when the user was offline? Overwriting it might be an unwanted behavior.
2. **False positives:** if the user is connected to the internet, it doesn’t necessarily mean that he can send requests yet (i.e. paid hotspots).
3. **Error handling:** when the request fails, how should we inform the user that the request he tried to make 3 days ago failed?
4. **Application architecture:** this kind of offline-first form handling often requires a more complex architecture.

The easier approach is to save the form state in local storage and inform the user that he will be able to submit the form once he is online again. This solution can be implemented in a few lines for each already existing form.

Let’s start with creating a local store in `store/local.ts`. We will use [`LocalForage`](https://github.com/localForage/localForage) library which wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API. It will allow us to store data in the most suitable local storage available on the user’s device:

```typescript
import LocalForage from "localforage";

// This must be called before any other calls to localForage are made:
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

 type Nullable<T> = T | null;
 type Optional<T> = T | undefined;

 interface FormData {
   author?: Nullable<string>;
   message?: Nullable<string>;
 }

 @Component({})
 export default class SomeForm extends Vue {
   form: FormData = {
     author: null,
     message: null
   };

   resetForm() {
     this.form.author = null;
     this.form.message = null;

     // Reset local storage:
     formStore.setItem("some-form-author", null);
     formStore.setItem("some-form-message", null);
   }

   storeData(data: FormData) {
     formStore.setItem<Optional<Nullable<string>>>("some-form-author", data.author);
     formStore.setItem<Optional<Nullable<string>>>("some-form-message", data.message);
   }

   sendData(data: FormData) {
     this.resetForm();

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
     formStore.getItem<Nullable<string>>("some-form-author").then(value => {
       this.form.author = value;
     });

     formStore.getItem<Nullable<string>>("some-form-message").then(value => {
       this.form.message = value;
     });
   }
 }
</script>
```

### Showing offline information

If your application is not fully offline first (e.g. you don’t save the requests in a queue like in the previous section), it is important to notify the users about their connection status. You can use the `navigator.onLine` property and `ononline`, and `onoffline` events or let the [`vue-offline`](https://github.com/filrak/vue-offline) plugin take care of all of this.

```bash
$ npm install --save vue-offline
```

It will add `isOnline`, and `isOffline` data properties and `online`, and `offline` events via a global mixin. We need to register their plugin in `main.ts`, as follows:

```ts
import Vue from "vue";
import VueOffline from "vue-offline";

Vue.use(VueOffline, { storage: false });
```

Then we can safely listen for the online and offline events in our `App.vue`:

```html
<template>
 <div id="app">
   <section class="offline" v-if="!isOnline">You are offline.</section>

   <router-view></router-view>
 </div>
</template>

<script lang="ts">
 import { Component, Vue } from "vue-property-decorator";

 @Component({})
 export default class App extends Vue {
   isOnline = navigator.onLine;

   created() {
     this.$on("online", () => {
       console.log("User is now online");
       this.isOnline = true;
     });

     this.$on("offline", () => {
       console.log("User is now offline");
       this.isOnline = false;
     });
   }
 }
</script>
```

### Making Vuex state persistent

If you want some parts of your data persistent, available in offline mode, you’ll need a persistent store, which replicates and retrieves the Vuex store to/from local storage. In this article, I’ll focus on a Vuex plugin named [`vuex-persist`](https://github.com/championswimmer/vuex-persist). You can download it with the following command:

```bash
$ npm install --save vuex-persist
```

Since we are already using LocalForage, we’ll use it to store the persistent data. Let’s create a wrapper over the `vuex-persist` plugin:

```typescript
// src/store/plugins/persistent.ts
import LocalForage from "localforage";
import VuexPersistence from "vuex-persist";

export default function createPersistedState(options = {}) {
  return store => {
    const VuexForage = new VuexPersistence({
      ...options,

      storage: LocalForage,
      asyncStorage: true,

      // Used to trigger the `storageReady` event as soon as the state is loaded
      // from LocalForage:
      restoreState: (key, storage) =>
        new Promise(resolve => {
          storage.getItem(key).then(data => {
            resolve(data);

            store._vm.$root.$emit("storageReady");
          });
        })
    });

    return VuexForage.plugin(store);
  };
}
```

We must register this plugin in our Vuex Store:

```typescript
// src/store/index.ts
import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import createPersistedState from "./plugins/persistent";

import foo from "./modules/foo";
import bar from "./modules/bar";

Vue.use(Vuex);

// Disable logs & strict mode in production:
const debug = process.env.NODE_ENV !== "production";

// Plugins for both `development` & `production` modes:
const plugins = [
  createPersistedState({
    strictMode: debug,
    // Specify here which modules should be persistent:
    modules: ["foo", "bar"]
  })
];

// Plugins for `development` mode:
const devPlugins = [
  // Integrates with Vue Devtools:
  createLogger()
];

// Plugins for `production` mode:
const prodPlugins = [];

export default new Vuex.Store({
  strict: debug,
  plugins: debug
    ? [...plugins, ...devPlugins]
    : [...plugins, ...prodPlugins],

  modules: {
    foo,
    bar
  }
});
```

And voila! Data from foo and bar modules will be persistent, automatically stored, and retrieved in/from the local storage. The last thing we need to do is wait till the store is rehydrated before rendering the main app component, but since we are emitting a `storageReady` event in our `vuex-persist` wrapper, this should be pretty easy:

```html
<template>
  <transition-group name="fade" class="app">
    <Loader key="app-loader" v-if="!isStateReady" />
    <Content key="app-content" v-if="isStateReady" />
  </transition-group>
</template>

<script>
import Loader from "./components/Loader.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Loader,
    Content
  },

  data: () => ({
    isStateReady: false
  }),

  created() {
    // This event is fired by the "persistent" Vuex plugin when the state is
    // loaded from local storage (i.e. IndexedDB):
    this.$store._vm.$root.$on("storageReady", () => {
      this.isStateReady = true;
    });
  }
};
</script>
```

## Testing offline-first applications

Google Chrome’s DevTools offers a lot of functions to test the PWA features of your web application. However, some of them require HTTPS certificates, even on localhost. Let’s see how to properly set up a testing environment to test our Vue application.

### Creating a development environment with HTTPS

To test service workers and other features locally, we will need to generate our own, self-signed certificate and add it to our OS’s trust store. This process is described on [letsencrypt page](https://letsencrypt.org/docs/certificates-for-localhost/) – it requires only the following command to generate certificates:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj "/CN=localhost" -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

Once `localhost.crt` is installed and trusted on our machine, we can modify `vue.config.js` to use the generated certificates, as follows:

```typescript
const fs = require("fs");

const config = {};

if (process.env.NODE_ENV === "production") {
  config.devServer = {
    https: {
      key: fs.readFileSync("localhost.key"),
      cert: fs.readFileSync("localhost.crt")
    }
  };
}

module.exports = config;
```

We can add some utility scripts in our `package.json` to facilitate our work:

```json
{
  "scripts": {
    "serve:prod": "vue-cli-service build --mode=production --watch & node ./serve.js",
    "serve:dev": "vue-cli-service serve --mode=development",
    "serve": "vue-cli-service serve"
  }
}
```

Now, we can run:

```bash
$ npm run serve:prod
```

…and test our PWA here.

### Testing the application in offline mode

You can test your Progressive Web Applications directly in the browser, without the need to manually disable network connections.

1. Go to **Network** panel;
2. Click **Offline** in the bar.

### Testing the "add to home screen" experience

1. Go to the **Application** panel;
2. Go to the **Manifest** tab;
3. Click **Add to home screen**.

### Making a general Progressive Web App audit

1. Go to the **Audits** panel (Lighthouse);
2. Select **Progressive Web App**;
3. Click **Run audits**.

## Conclusion

In this article, we learned how to create a great base for offline-first, PWAs using Vue, web manifest, and other standards. There’s a lot more to consider to make a great native-like feeling and keep your user engaged. Here are some points to consider:
- Keyboard shortcuts;
- Notification & icon badges;
