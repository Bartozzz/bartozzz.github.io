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

#### Creating a SSL certificate for localhost

The script below automates certificate creation. You can run it with the following command:

```
$ npm run cert:gen
```

```bash
#!/usr/bin/env bash
# Based on: https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec

BASE_DIR=$(cd "$(dirname $BASH_SOURCE[0])" && cd "../" && pwd)
COMPOSE_DIR=$(cd "$(dirname $BASH_SOURCE[0])" && pwd)

echo "Certificates will be saved at '$BASE_DIR/'\n"

# This file will be used as the key to generate the Root SSL certificate:
openssl genrsa -des3 -out $BASE_DIR/_localCA.key 2048

# We can use the key we've generated to create a new Root SSL certificate:
openssl req -x509 -new -nodes -sha256 -days 1024 \
  -key $BASE_DIR/_localCA.key \
  -out $BASE_DIR/_localCA.pem

# Create a certificate key for localhost using the configuration settings stored
# in server.csr.cnf. This key is stored in _localhost.key.
openssl req -new -sha256 -nodes \
  -newkey rsa:2048 \
  -out $BASE_DIR/_localhost.csr \
  -keyout $BASE_DIR/_localhost.key \
  -config $COMPOSE_DIR/config/offchan.csr.cnf

openssl x509 -req -days 500 -sha256 \
  -in $BASE_DIR/_localhost.csr \
  -CA $BASE_DIR/_localCA.pem \
  -CAkey $BASE_DIR/_localCA.key -CAcreateserial \
  -out $BASE_DIR/_localhost.crt \
  -extfile $COMPOSE_DIR/config/offchan.v3.ext

echo "\nAdd generated certificates to your local machine's keychain.\n"
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
