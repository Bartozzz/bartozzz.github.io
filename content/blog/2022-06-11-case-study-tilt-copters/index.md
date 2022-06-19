---
title: "Case study: Tilt Copters (a Expo/React Native game)"
authors: ["Bartosz Łaniewski"]
keywords: ["Case Study", "Gamedev", "React Native"]
language: en
dateCreated: 2022-06-11 00:00:00 +0100
dateUpdated: 2022-06-11 00:00:00 +0100
datePublished: 2022-06-11 00:00:00 +0100
embeddedImagesLocal:
  - ./assets/architecture.png
  - ./assets/architecture-dark.png
---

[Tilt Copters] is a relatively simple game created with [pixi.js] and Expo. This is a project I've started to learn more about porting web libraries to React Native but also about game architecture and monetization.

## Introduction

Tilt Copters is a casual endless game. The user picks the character he wishes to pilot and can explore various maps. The character can be moved by tilting the device. The user has to avoid obstacles and the higher he gets, the faster and more challenging the game becomes.

Technology stack:

- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Pixi.js](https://pixijs.com/) with [my port](https://github.com/Bartozzz/expo-pixi) of the library
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)

## Development

I am well aware that React Native might not be ready for game development just yet. I picked it out of curiosity – I wanted to see where the limits of this technology are.

Nevertheless, React Native has its benefits. The main advantage over native solutions is that it's easy to make cross-platform applications for mobile, desktop and web while still having the option to interop native code when necessary. It has an established ecosystem, community and is backed by a lot of big companies (industry momentum).

### Architecture

Let's start by analyzing the elements and features that we have in the game. We have:
- a character and a map defined by a background, pipes and coins;
- a controller system that hooks to the device accelerometer;
- a collision system that handles pipes & coins collisions;

<Image
  image={props.localImages[0]}
  imageDark={props.localImages[1]}
  alt="High level architecture"
/>

#### Game Manager

The Game Manager is a [mediator](https://refactoring.guru/design-patterns/mediator) and serves as an aggregator for the Game Objects.

```ts
export class GameManager {
  public constructor({ context }: EngineConfiguration) {
    this.application = new PIXI.Application({ context });

    // Updates:
    this.ticker.add(() => {
      if (this.store.state === "isPlaying") {
        // Updates:
        this.background.update(this.speed);
        this.character.update(this.speed);
        this.pipes.forEach((pipe) => pipe.update(this.speed));
        this.coins.forEach((coin) => coin.update(this.speed));

        // Collision check:
        this.obstaclesManager.check();

        // Speed increase:
        this.speed += configuration.game.acceleration;
      }
    });

    // Controls:
    this.controlManager.subscribe(ControlManager.MOVE, (data: number) => {
      this.character.move(data);
    });

    // Collisions:
    this.obstaclesManager.subscribe(ObstaclesManager.PIPE_COLLISION, () => {
      this.lose();
    });
    this.obstaclesManager.subscribe(ObstaclesManager.PIPE_PASSED, (pipe) => {
      pipe.score();
      this.store.incrementScore();
    });
    this.obstaclesManager.subscribe(ObstaclesManager.COIN_COLLISION, (coin) => {
      coin.score();
      this.store.incrementCoins();
    });
  }

  public initialize(gameConfig: GameConfiguration) {
    // …
  }
  public reset() {
    // …
  }
  public destroy() {
    // …
  }

  public prepare() {
    this.store.setState("isIdle");
    this.application.start();
  }
  public play() {
    this.store.setState("isPlaying");
    this.application.start();
  }
  public lose() {
    this.store.setState("isGameOver");
    this.application.stop();
  }
}

```

#### Game Objects

The Game Objects describe elements in the game world (character, background, pipe, coin). All these elements are implementing the `GameObject` interface:

```ts
export interface GameObject {
  update(delta: number): void;
  destroy(): void;
  getBoundingBoxes(): BoundingBox[];
}
```

### Navigation

I used [`@react-navigation/stack`](https://reactnavigation.org/docs/stack-navigator/) to handle all in-game navigation. I created [custom interpolators](https://reactnavigation.org/docs/stack-navigator/#animations) to give the user an illusion that the entire game is one big canvas just sliding down or up based on the view that we want to show.

Below is the code that I used to customize the transition when navigating from menu to the shop and vice-versa:

```ts
export function forShopInterpolator({
  index,
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  const isFirst = index === 0;

  const progress = add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  const translateY = multiply(
    progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [
        screen.height,
        isFirst ? 0 : 0,
        isFirst ? -screen.height : 0,
      ],
    }),
    inverted
  );

  return {
    cardStyle: {
      overflow: "hidden",
      transform: [{ translateY }],
    },
  };
}
```

### Responsiveness

Unlike most game engines, `pixi.js` does not handle multiple resolutions out of the box. You'll have to manually stretch the game viewport to match the device screen size.

My approach is to use a single base resolution and then fit it to everything else. The one I picked is 375x812pt (iPhone X). Think of this setting as the "design size", i.e. the size of the area that you work with when creating textures.

```ts
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

export const targetWidth = 375;
export const targetHeight = 812;
export const scale = (window.width * window.scale) / targetWidth;

export const canvas = {
  width: targetWidth,
  height: targetHeight,
  scale: scale,
};
```

Then, I just had to set the [`PIXI.Application`](https://pixijs.download/v4.8.9/docs/PIXI.Application.html#Application) `width`, `height` and `resolution` as follows:

```ts{7-9}
export class GameManager {
  private application!: PIXI.Application;

  public constructor({ context }: EngineConfiguration) {
    this.application = new PIXI.Application({
      context,
      width: configuration.canvas.width,
      height: configuration.canvas.height,
      resolution: configuration.canvas.scale,
    });
  }
}
```

`resolution` will stretch the canvas to fit the whole screen while maintaining aspect ratios no matter the resolution. The scene is rendered, then scaled to fit the screen.

### State management

I used [zustand](https://github.com/pmndrs/zustand) for game state management. It is a bearbones state-management solution using simplified flux principles. It's really easy to use and framework agnostic (no context providers are necessary), so I can use it in React (UI) and game managers (logic). My game store looks as follows:

```ts
import create from "zustand";
import createVanilla from "zustand/vanilla";
import { combine } from "zustand/middleware";

interface State {
  state: "isIdle" | "isPlaying" | "isGameOver";
  score: number;
  coins: number;
}

const initialState: State = {
  state: "isIdle",
  score: 0,
  coins: 0,
};

export const gameStore = createVanilla(
  combine(initialState, (set) => ({
    reset: () => set(initialState),
    setState: (payload: State["state"]) =>
      set((state) => ({ state: payload })),
    incrementScore: (payload = 1) =>
      set((state) => ({ score: Math.max(0, state.score + payload) })),
    incrementCoins: (payload = 1) =>
      set((state) => ({ coins: Math.max(0, state.coins + payload) })),
  }))
);

export const useGameStore = create(gameStore);
```

#### Usage in managers

```ts{2-4, 8, 14, 18}
export class GameManager {
  private get store() {
    return gameStore.getState();
  }

  public constructor({ context }: EngineConfiguration) {
    this.ticker.add(() => {
      if (this.store.state === "isPlaying") {
        // Do the updates…
      }
    });

    this.obstaclesManager.subscribe(ObstaclesManager.PIPE_PASSED, () => {
      this.store.incrementScore();
    });

    this.obstaclesManager.subscribe(ObstaclesManager.COIN_COLLISION, () => {
      this.store.incrementCoins();
    });
  }
}
```

#### Usage in React

```tsx{2}
export function GameScore() {
  const score = useGameStore((state) => state.score);

  return <Text size="lg">{score}</Text>;
}
```

<Alert type="info">

  I used [Redux Toolkit](https://redux-toolkit.js.org/) for the user state (i.e. purchased items) and [`redux-persist`](https://github.com/rt2zz/redux-persist) for persistence. There are no particular reasons why I used Redux over zustand or any other solution.
</Alert>

## Challenges

### Expo and libraries

There's an official library called [`expo-pixi`](https://github.com/expo/expo-pixi) originally developed by Evan Bacon. This is the first search result when looking for pixi.js for Expo/React Native. I tried using this library but quickly abandoned it because of plenty of issues it has. Instead, I created my port with better compatibility. It can be found on [`Bartozzz/expo-pixi`](https://github.com/Bartozzz/expo-pixi).

#### Issue #1: incompatible with Expo 43 ([#221](https://github.com/expo/expo-pixi/issues/221))

`expo-pixi` uses [`expo-asset-utils`](https://github.com/expo/expo-asset-utils) which is incompatible with Expo SDK 43 and above. This is because Expo SDK 43 [deprecated the `react-native-unimodules` package](https://blog.expo.dev/whats-new-in-expo-modules-infrastructure-7a7cdda81ebc):

> The `react-native-unimodules` package is deprecated as of SDK 43, and the module system and autolinking implementation now live in the expo package instead.

The solution was to migrate from [`expo-asset-utils`](https://github.com/expo/expo-asset-utils) to [`expo-asset`](https://docs.expo.dev/versions/latest/sdk/asset/):

```diff
-import { resolveAsync } from 'expo-asset-utils';
+import { Asset } from "expo-asset";

const textureFromExpoAsync = async resource => {
- const asset = await resolveAsync(resource);
+ const asset = await Asset.fromModule(resource).downloadAsync();

  return PIXI.Texture.from(asset);
}
```

#### Issue #2: invalid dependencies ([#156](https://github.com/expo/expo-pixi/issues/156))

1. `expo-pixi` does not have a locked-in version of `pixi-filters`. It downloads the latest version which is incompatible with pixi-js V4;
2. `expo-pixi` requires `expo-gl` V4, which is incompatible with Expo SDK 40 and above;

To fix those issues, I updated the dependencies as follows:

```diff
{
  "dependencies": {
-   "pixi-filters": "*",
+   "pixi-filters": "2.7.1",
-   "pixi.js": "^4.7.0"
+   "pixi.js": "latest-4.x"
  },
  "peerDependencies": {
-   "expo-gl": "~4.0.0"
+   "expo-gl": "*"
  }
}
```

#### Issue #3: side-effects and library overwriting model

`expo-pixi` overwrites `pixi.js` methods in a quite ugly way. It mutates the PIXI instance:

```ts
PIXI = {
  ...PIXI,
  Application: ExpoPIXIApplication,
  Texture: {
    ...PIXI.Texture,
    from: (...props) => { /* … */ },
    fromExpoAsync: textureFromExpoAsync,
  },
  Sprite: {
    ...PIXI.Sprite,
    fromExpoAsync: spriteFromExpoAsync,
    from: (...props) => { /* … */ },
  }
}
```

There are several issues with this approach:
1. This is causing side-effects, as PIXI is declared in the global scope;
2. There was a mix of web-only and native-only code in a single file;

To solve the first issue, my approach was to simply extend PIXI classes and re-export new PIXI objects:

```ts
import * as filters from "pixi-filters";
import * as PIXIInstance from "pixi.js";

class PIXIApplication extends PIXIInstance.Application {
  // …
}

class PIXISprite extends PIXIInstance.Sprite {
  static from(asset) {
    // …
  }
}

class PIXITexture extends PIXIInstance.Texture {
  static from(asset) {
    // …
  }
}

export const PIXI = {
  ...PIXIInstance,
  filters: {
    ...PIXIInstance.filters,
    ...filters,
  },
  Application: PIXIApplication,
  Texture: PIXITexture,
  Sprite: PIXISprite,
};
```

With this approach, I could safely remove the `sideEffects` flag from `package.json`:

```diff
{
  "name": "expo-pixi",
- "sideEffects": true,
}
```

To solve the second issue, I simply moved the web code to `pixi.ts`, and the native code to `pixi.native.ts`. This is described in details in [React Native documentation: Platform-specific extensions](https://reactnative.dev/docs/platform-specific-code#platform-specific-extensions):

> You can also use the `.native.js` extension when a module needs to be shared between NodeJS/Web and React Native but it has no Android/iOS differences. This is especially useful for projects that have common code shared among React Native and ReactJS.

#### Issue #4: assets were not properly bundled on production build ([#66](https://github.com/expo/expo-pixi/issues/66), [#92](https://github.com/expo/expo-pixi/issues/92), [#103](https://github.com/expo/expo-pixi/issues/103))

<Alert type="warning">

  This was particularly hard to debug because it only happens on release (production) Android builds. This issue does not happen on development and Web/iOS platforms.
</Alert>

There are issues with `expo-gl` where `.jpg` and `.png` textures would not load in Android release variants. This is an issue (actually, several issues) with Expo and thus it was quite hard to fix it in the package itself. The fixes consist of several workarounds described below:

##### Invalid file scheme

When built as APK, the image asset resolves to something like:

```
file:/data/user/0/…/.expo-internal/some-hash.png
```

The problem is that [`expo-gl#loadImage`](https://github.com/expo/expo/blob/master/packages/expo-gl-cpp/cpp/EXGLImageUtils.cpp#L126) expects `file://` scheme and not `file:` (note the missing slashes). To solve this issue, we have to manually add the slashes to `asset.localUri`s, as follows:

```ts
// It might happen that an asset uri starts with `file:` and not `file://`.
// `expo-gl` expect a texture asset to have the slashes. Enforce the slashes.
function fixFileUri(uri: string) {
  // https://github.com/expo/expo/blob/master/packages/expo-gl-cpp/cpp/EXGLImageUtils.cpp#L126
  return uri.startsWith("file:") && !uri.startsWith("file://")
    ? "file://" + uri.substring(5)
    : uri;
}

async function textureFromAssetAsync(resource: string | number) {
  const asset = await Asset.fromModule(resource).downloadAsync();
  asset.localUri = fixFileUri(asset.localUri!);

  return PIXITexture.from(asset as any);
}
```

##### Invalid path for images

When you [bundle assets for your Android APK](https://developer.android.com/guide/topics/resources/providing-resources), the assets go to the `res` folder, but the subfolder they end up is dependent on the resource type. Bitmap files (`.png`, `.jpg`, `.gif`, etc.) or XML files that are compiled into drawable resource subtypes go to `res/drawables` directory.

The issue is that in production, images are moved to the `res/drawables` directory (as you would expect) but `expo-file-system` [`FileSystem#downloadAsync`](https://github.com/expo/expo/blob/main/packages/expo-file-system/android/src/main/java/expo/modules/filesystem/FileSystemModule.kt#L911=) only checks the `raw` directory! Because of that, I was unable to load textures for `expo-pixi` on Android.

I don't know any viable workaround for this issue. What worked for me was changing the images extensions to `.xjpg` and `.xpng`. I also had to update the `textureFromAssetAsync` to change `asset.type` to the correct extension and recalculate `asset.width` and `asset.height` as follows:

```ts{22,24-26}
// https://github.com/expo/expo/blob/main/packages/expo-asset/src/ImageAssets.ts
function getImageInfo(url: string): Promise<{
  width: number;
  height: number;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = reject;
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.src = url;
  });
}

async function textureFromAssetAsync(resource: string | number) {
  const asset = await Asset.fromModule(resource).downloadAsync();
  asset.localUri = fixFileUri(asset.localUri!);
  asset.type = asset.type.replace('x', ''); // xpng => png, xjpg => jpg

  const { width, height } = await getImageInfo(asset.localUri);
  asset.width = width;
  asset.height = height;

  return PIXITexture.from(asset as any);
}
```

I also needed to update `metro.config.js` to allow `.xjpg` and `.xpng` extensions:

```ts
const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);

// Added .xjpg and .xpng extension for sprites:
defaultConfig.resolver.assetExts.push("xjpg");
defaultConfig.resolver.assetExts.push("xpng");

module.exports = defaultConfig;
```

### Game performance

My aim I always to get at least a stable 60 FPS on all of the devices I have. Here are the results:

| Device                                                                                    | Framerate |
|-------------------------------------------------------------------------------------------|-----------|
| [iPhone X](https://www.gsmchoice.com/en/catalogue/apple/iphonex/)                         | 60        |
| [iPhone 13 Pro](https://www.gsmchoice.com/en/catalogue/apple/iphone13pro/)                | 60        |
| [Samsung S8](https://www.gsmchoice.com/en/catalogue/samsung/galaxys8/)                    | 50-60     |
| [Asus ZenFone 3 Max 5.2](https://www.gsmchoice.com/en/catalogue/asus/zenfone3maxzc520tl/) | 40-60     |

Android phones have some troubles with garbage collection and there's a ~10 FPS performance drop when going back and forth from the menu to the game screen.

### React Native performance

React Native is performant overall and its capabilities are more than enough for standard user interfaces. However, when combined with game rendering and intensive processing in the game loop, you might want to limit React renders.

I wanted to show the user the distance he flight during the gameplay. The natural place I wanted to put the score was the navigation bar from React Navigation but it resulted in a 10 FPS performance drop. Two options were presented:

1. I could render the score in a custom component, or,
2. I could render the score on the canvas;

The second solution was not possible to implement because `expo-pixi` has [no support for rendering text on the canvas](https://github.com/expo/expo-pixi/issues/20). Moving the score to a custom component had no big impact on the performance, but required some code to support notch on Apple devices. Later on, I decided to display the number of pipes passed instead and I was able to use the React Navigation back.

### Android differences

<Alert type="warning">

  Always test your application on all platforms before release. React Native offers cross-platform compatibility but some native differences have to be overcome manually.
</Alert>

Some of the deviations were already described in [Expo and libraries](#expo-and-libraries) but there are more! The main differences between Android and other platforms are:

- **Difference in default UI/UX:** by default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS and use OS default animation on Android. There are also visual differences that need to be patched to provide similar game UI/UX across platforms;
- **No full fonts support:** `font-weight` and `font-style` [are not supported](https://stackoverflow.com/a/38820631). You have to load all the font variants as separate fonts with a different `font-family` name;
- **No full shadows support:** Android does not have native support for CSS-like shadows. You have to use the [`elevation`](https://reactnative.dev/docs/view-style-props#elevation-android) property or 3rd party libraries like [`react-native-shadow`](https://www.npmjs.com/package/react-native-shadow-2);
- **Poor styling support in general**: for example, when making a text outline using `text-shadow`, we have to keep a small blur radius because Android won't render it at all when it's set to 0 (`text-shadow: 0 2px 0.00001px black`);
- **Inconsistent API:** on Android devices, the accelerometer data is reversed and we have to normalize it before usage:
    ```ts
    import { Accelerometer } from "expo-sensors";
    import { Platform } from "react-native";
    import { PubSub } from "../helpers/PubSub";

    export class ControlManager extends PubSub {
      static MOVE = "MOVE";

      public register() {
        Accelerometer.addListener((accelerometerData) => {
          const data =
            // For some reason on Android the signs are flipped:
            Platform.OS === "android"
              ? -accelerometerData.x
              : accelerometerData.x;

          this.publish(ControlManager.MOVE, data);
        });
      }

      public destroy() {
        Accelerometer.removeAllListeners();
      }
    }
    ```

## Conclusion

Making a simple game was a great way to learn the Expo internals and limitations, but `expo-pixi` it's not the best tool for the job:
- there is a lack of support when it comes to `expo-pixi`;
- there are plenty of bugs, especially on Android devices;
- the performance is not great overall;

Because of that, I started working on my game library for React Native that uses [`react-native-skia`](https://github.com/Shopify/react-native-skia), a high-performance React Native Graphics library under the hood.

[Tilt Copters]: https://tiltcopters.laniewski.me
[pixi.js]: https://pixijs.com/
