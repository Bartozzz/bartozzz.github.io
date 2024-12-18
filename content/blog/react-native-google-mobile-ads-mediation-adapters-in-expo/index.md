---
title: "How to add Ads Mediation Adapters for AdMob using Expo Plugins?"
authors: ["Bartosz Łaniewski"]
keywords: ["React Native"]
language: en
dateCreated: 2024-12-18 15:00:00 +0100
dateUpdated: 2024-12-18 15:00:00 +0100
datePublished: 2024-12-18 15:00:00 +0100
---

Ad Mediation is a feature that optimizes ad revenue by enabling multiple Ad Networks to display ads in your app. The [`react-native-google-mobile-ads`](https://github.com/invertase/react-native-google-mobile-ads) package supports Mediation, but integrating additional networks requires extra configuration. This guide will show you how to add Mediation Adapters to an Expo app, using [Unity Ads](https://unity.com/products/unity-ads) as an example.

## Configure react-native-google-mobile-ads

Start by installing the [`react-native-google-mobile-ads`](https://github.com/invertase/react-native-google-mobile-ads) package:

```
$ npx expo install react-native-google-mobile-ads
```

Next, update your `app.json` (or `app.config.js` / `app.config.ts`) configuration file, as shown below:

```json
{
  "expo": {
    "plugins": [
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "iosAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx"
        }
      ]
    ]
  }
}
```

Then, initialize Google Mobile Ads SDK. This needs to be done only once, at the application launch:

```js
import mobileAds from "react-native-google-mobile-ads";

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log({ adapterStatuses });
  });
```

This step ensures all Mediation Adapters are initialized. Be sure to wait for the initialization before preloading ads from Mediation partners.

<Alert type="info">
  For a more in-depth guide on setting-up React Native Google Mobile Ads, please, refer to the [official documentation](https://docs.page/invertase/react-native-google-mobile-ads).
</Alert>

## Configure Mediation in Google AdMob

Follow the official AdMob guides to set up Mediation:

- [Guide to AdMob Mediation](https://support.google.com/admob/answer/13420272)
- [Mobile Ads SDK (Android)](https://developers.google.com/admob/android/choose-networks)
- [Mobile Ads SDK (iOS)](https://developers.google.com/admob/ios/choose-networks)

## Create a Mediation Adapter Expo Plugin

Adding a Mediation Adapter requires incorporating custom native packages. To do this, we will create a custom Expo Plugin and modify the Podfile and Gradle dependencies.

### Install required packages

Install the [`expo-build-properties`](https://docs.expo.dev/versions/latest/sdk/build-properties/) and [`expo-android-app-gradle-dependencies`](https://github.com/lukawolf/expo-android-app-gradle-dependencies) packages with the following command:

```
$ npx expo install expo-build-properties expo-android-app-gradle-dependencies
```

Then, add it to your `app.json` configuration file, as shown below:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ],
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "iosAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx"
        }
      ]
    ]
  }
}
```

### Create a custom Expo plugin

To encapsulate all the requirements for Unity Ads mediation, we will ceate a `plugins/withUnityAds.js` file with the following content:

```js
const { withBuildProperties } = require("expo-build-properties");
const withAppGradleDependencies = require("expo-android-app-gradle-dependencies");

const withUnityAds = (config) => {
  // Adds extra Pod, as specified in:
  // https://developers.google.com/admob/ios/mediation/unity#step_3_import_the_unity_ads_sdk_and_adapter
  config = withBuildProperties(config, {
    ios: {
      extraPods: [
        { name: "GoogleMobileAdsMediationUnity" },
      ],
    },
  });

  // Adds extra Gradle dependencies, as specified in:
  // https://developers.google.com/admob/android/mediation/unity#android_studio_integration_recommended
  config = withAppGradleDependencies(config, {
    dependencies: [
      "com.unity3d.ads:unity-ads:4.12.4",
      "com.google.ads.mediation:unity:4.12.5.0",
    ],
  });

  return config;
};

module.exports = withUnityAds;
```

Then, add your plugin to the plugins list in the `app.json` configuration file:

```json
{
  "expo": {
    "plugins": [
      "./plugins/withUnityAds",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ],
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "iosAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx"
        }
      ]
    ]
  }
}
```

<Alert type="warning">
  The `withUnityAds` plugin must be listed before the `expo-build-properties`.
</Alert>

With this done, you should see dependencies correctly added.

#### Expected results in `android/app/build.gradle`

```diff
dependencies {
    ...

+    // START expo-android-app-gradle-dependencies
+    implementation("com.unity3d.ads:unity-ads:4.12.4")
+    implementation("com.google.ads.mediation:unity:4.12.5.0")
+    // END expo-android-app-gradle-dependencies
}
```

#### Expected results in `ios/Podfile.lock`

```diff
+  - GoogleMobileAdsMediationUnity (4.12.5.0):
+    - Google-Mobile-Ads-SDK (~> 11.0)
+    - UnityAds (= 4.12.5)
```

<Newsletter />

## Update the SKAdNetwork list

The Google Mobile Ads SDK supports conversion tracking using Apple’s SKAdNetwork, which lets Google and participating third-party buyers attribute an app install even when the IDFA is unavailable. Update the list of identifiers in `app.json` to include Unity Ads identifiers:

```json
{
  "expo": {
    "plugins": [
      // ...
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "iosAppId": "ca-app-pub-xxxxxxxx~xxxxxxxx",
          "skAdNetworkItems": [
            "cstr6suwn9.skadnetwork",
            "4fzdc2evr5.skadnetwork",
            // ...
            "3rd42ekr43.skadnetwork",
            "3qcr597p9d.skadnetwork"
          ]
        }
      ]
    ]
  }
}
```

Refer to these resources for the latest identifiers:
- [Google SKAdNetwork Identifiers](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/3p-skadnetworks)
- [Unity Ads SKAdNetwork Identifiers](https://skan.mz.unity3d.com/v3/partner/skadnetworks.plist.json)

Remember to periodically update the list to ensure the ad network identifiers are up-to-date.

## Test your Mediation setup

To verify if your Mediation Partner is serving ads, enable [the Ad Inspector](https://developers.google.com/admob/android/ad-inspector) by adding the following code:

```ts
import mobileAds from "react-native-google-mobile-ads";

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    mobileAds().openDebugMenu();
  });
```

You can use the **“Single ad source test”** feature in the Ad Inspector to select your Mediation Partner from the list. Then, request a new ad and verify if the Mediation Partner correctly fills it. Make sure that your test device is registered in the Mediation Partner’s dashboard.
