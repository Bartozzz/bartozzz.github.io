---
title: "Case study: Filler (a Expo/React Native game)"
authors: ["Bartosz Łaniewski"]
keywords: ["Case Study", "Gamedev", "React Native"]
language: en
dateCreated: 2022-06-27 00:00:00 +0100
dateUpdated: 2022-06-27 00:00:00 +0100
datePublished: 2022-06-27 00:00:00 +0100
---

[Filler](https://filler.laniewski.me/) is the first mobile game I ever created with React Native. It started as an experiment to learn more about algorithms, animations and the platform itself.

## Introduction

I initially created Filler when I was ~15 years old. The idea came up as I was thinking of simple projects I could work on to learn more about web development and data structures. It was later on that I learned there was already a similar (and quite popular back in the '90s) game, called _"Lights Out"_.

> Lights Out is an electronic game released by Tiger Electronics in 1995. The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible. – [Wikipedia](https://en.wikipedia.org/wiki/Lights_Out_(game))

There are, however, a few differences between the original and my game. In Filler:
1. grids can be of any size, not only <Formula>5 \times 5</Formula>;
2. the goal is to switch all the lights on, not off;

The technology stack is pretty standard for the React ecosystem:

- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)

## Development

### Internationalization

I used [`expo-localization`](https://docs.expo.dev/versions/latest/sdk/localization/) and [`i18n-js`](https://github.com/fnando/i18n-js) to localize my application. The internationalization setup is pretty straightforward:

```ts
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./strings/en.json";
import fr from "./strings/fr.json";
import pl from "./strings/pl.json";

i18n.fallbacks = true;
i18n.translations = { en, pl, fr };
i18n.defaultLocale = "en";
i18n.locale = Localization.locale;

export { i18n };
```

…then, I could simply import `i18n` and use it in the application as follows:

```tsx
<Button>{i18n.t("menu.campaignButton")}</Button>
```

To make my tests independant of the translations, I mocked the `i18n-js` library and made the `i18n.t` function return the translation key instead of the translation itself:

```ts
jest.mock("i18n-js", () => {
  return {
    ...jest.requireActual("i18n-js"),
    t: jest.fn((key) => key),
  };
});
```

…having that, I could safely update the copy without breaking the integration tests:

```tsx
it("should reset the board on 'Reset' button click", () => {
  const view = render(<Game />);

  fireEvent.press(view.getByText("header.resetBtn"));
  // …
});
```

I was not afraid to break anything in the user interface because my application contains visual regression tests. It allows me to ensure that my application appears to the end-user as it was originally intended to and I can catch visual regressions with ease.

### Animations

I used [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated) to create all animations in the game. The main reason behind this choice was that the animations run on the native thread – it's a great animation library performance-wise. It comes with an imperative and a declarative API.

#### Imperative API

I used the imperative functions and hooks for the `GridCell` component. I wanted to interpolate between two colors based on the `checked` prop. It was possible thanks to the `interpolateColor` helper:

```tsx {2, 5-11, 15}
function GridCell({ checked }: { checked: boolean }) {
  const colorProgress = useSharedValue(checked ? 1 : 0);

  // Interpolate between `empty` and `checked` color based on progress:
  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      colorProgress.value,
      [0, 1],
      [theme.emptyCellColor, theme.checkedCellColor]
    ),
  }), [theme, colorProgress]);

  // Change progress to 0-1 on `checked` change:
  React.useEffect(() => {
    colorProgress.value = withTiming(checked ? 1 : 0);
  }, [checked, colorProgress]);

  return <Cell style={animatedStyles} />
}
```

#### Declarative API

There's also a higher-level API that I used to progressively reveal content on the success screen. I didn't need anything fancy here, just some entering animations with delays and the declarative API does a great job for such things:

```tsx {6, 10, 14}
function ScoreStars({ score }: { score: number }) {
  const delay = 250;

  return (
    <Stars>
      <Animated.View entering={Swing.delay(delay * 0)}>
        {score < 1 ? <GrayStar /> : <GoldStar />}
      </Animated.View>

      <Animated.View entering={Swing.delay(delay * 1)}>
        {score < 2 ? <GrayStar /> : <GoldStar />}
      </Animated.View>

      <Animated.View entering={Swing.delay(delay * 2)}>
        {score < 3 ? <GrayStar /> : <GoldStar />}
      </Animated.View>
    </Stars>
  );
};
```

…where `Swing` is a custom [keyframe](https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/keyframeAnimations/) I created:

```tsx
const Swing = () =>
  new Keyframe({
    0: { transform: [{ rotate: "0deg" }] },
    20: { transform: [{ rotate: "15deg" }] },
    40: { transform: [{ rotate: "-10deg" }] },
    60: { transform: [{ rotate: "5deg" }] },
    80: { transform: [{ rotate: "-5deg" }] },
    100: { transform: [{ rotate: "0deg" }] },
  });
```

### Monetization

After the gameplay was implemented, I started working on integrating ads into the application using Google's AdMob platform. The monetization model is pretty standard in the mobile industry. I decided to show:
- an Interstitial Ad when the user completes a level (cap at 1 impression / 5 minutes / user);
- a Rewarded Ad to unlock the solution w/ solver.

I used [`react-native-google-mobile-ads`](https://github.com/invertase/react-native-google-mobile-ads) (and had a chance to contribute a little bit to the library as well!) to implement the advertising.

#### Interstitial Ad

I created a hook to easily check whether the advertisement has been watched or not.

```tsx
function useInterstitialAd() {
  const { isLoaded, isClosed, error, load, show } = nativeUseInterstitialAd(
    "<AD_UNIT_ID>",
    {
      requestNonPersonalizedAdsOnly: true,
    }
  );

  const isError = error !== undefined;
  const isAdWatched = isClosed || isError;

  // Start loading the interstitial straight away:
  React.useEffect(() => {
    load();
  }, [load]);

  // Show the interstitial once loaded:
  React.useEffect(() => {
    if (isLoaded) {
      show();
    }
  }, [isLoaded, show]);

  return { isAdWatched };
}
```

…then, I could very simply disable the "Next level" button until the ad has been watched:

```tsx
const { isAdWatched } = useInterstitialAd();

<Button disabled={!isAdWatched} onPress={handleExit}>
  Next level
</Button>
```

#### Rewarded Ad

Rewarded ads need a trigger and an explicit user interaction to show. I decided to go with a React Render Props pattern for a nice DX:

```tsx
<RewardedAd onSuccess={showSolution}>
  {({ trigger, isAdLoading }) => (
    <ActionButton onPress={trigger} processing={isAdLoading}>
      Show solution
    </ActionButton>
  )}
</RewardedAd>
```

`RewardedAd` hides a lot of boilerplate, but basically, it listens for events and handles the various errors that can occur.

## Challenges

### Permissions

<Alert type="warning">

By default, Expo adds a lot of unnecessary permission which can discourage the user from installing your application.
</Alert>

Once released on Google Play, I noticed that the app had unnecessary permission listed. It required pretty much every permission available but needed none to work. To remove unused permissions, I had to modify `android/app/src/main/AndroidManifest.xml` as follows (note the `tools:node="remove"` on `uses-permission`):

```xml
<manifest xmlns:tools="http://schemas.android.com/tools" xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.VIBRATE" />
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission tools:node="remove" android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
  <uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission tools:node="remove" android:name="android.permission.RECORD_AUDIO" />
  <uses-permission tools:node="remove" android:name="android.permission.SYSTEM_ALERT_WINDOW" />
  <uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>
```

### Performance

I use my old [Asus ZenFone 3 Max 5.2](https://www.gsmchoice.com/en/catalogue/asus/zenfone3maxzc520tl/) as a benchmark – if a game works nicely on this device, I can sleep soundly because it means it will run on pretty much anything. My aim I always to get a stable 60 FPS for a nice user experience.

It was quite hard to achieve at first for several reasons:
1. **Initially, I used [`react-native-animatable`](https://github.com/oblador/react-native-animatable) for animations:** it had noticeably worse performance than `react-native-reanimated`;
2. **There were some redundant re-renders:** once I memorized some expensive components and calculation results, it improved the performance;
3. **I was using JSC instead of [Hermes](https://engineering.fb.com/2019/07/12/android/hermes/):** once I migrated to Hermes, the performance improved greatly. Also, <abbr title="Time to Interaction">TTI</abbr>, application size and memory utilization decreased a lot;

It turned out that React Native with Hermes can perform well enough to provide a nice UX, even on my old phone.

### Sounds

There's an issue with playing the same [`Audio`](https://docs.expo.dev/versions/latest/sdk/audio/) multiple times: the sound works well the first time, but the other times it seems that the sound isn't playing from the start but with a shift of some milliseconds.

The solution I use is to preload multiple copies of [`Audio`](https://docs.expo.dev/versions/latest/sdk/audio/) and play the next sample when needed. My implementation looks as follows:

```ts
import { Audio } from "expo-av";
import { AVPlaybackSource } from "expo-av/build/AV";

class Sound {
  static COPIES = 3;
  static INDEX = 0;
  static assets: Record<string, Audio.Sound> = {};

  static loadAsync(library: Record<string, AVPlaybackSource>) {
    const promisesForCopies = Object.entries(library).flatMap(
      ([name, path]: [string, AVPlaybackSource]) => {
        // Make n = Sound.COPIES copies:
        return Array.from(Array(Sound.COPIES)).map((_, i) => {
          const soundNameWithIndex = `${name}-${i}`;

          Sound.assets[soundNameWithIndex] = new Audio.Sound();
          return Sound.assets[soundNameWithIndex].loadAsync(path);
        });
      }
    );

    return Promise.all(promisesForCopies);
  }

  static async play(name: string, volume = 1) {
    try {
      Sound.INDEX = (Sound.INDEX + 1) % Sound.COPIES;

      const soundNameWithIndex = `${name}-${Sound.INDEX}`;
      const soundSample = Sound.assets[soundNameWithIndex];

      if (soundSample) {
        await soundSample.setVolumeAsync(volume);
        await soundSample.playFromPositionAsync(0);
      } else {
        throw new Error(`Sound ${name} does not exist`);
      }
    } catch (error) {
      // Silent error…
    }
  }
}
```

### Solver

I wanted to create a solver to monetize the game. It turned out to be quite a popular problem with a lot of resources online, so I won't go into much details. It just required a bit of linear algebra.

A board can be modeled mathematically as a vector over <Formula>{`\\mathbb{F}_2`}</Formula>, a [field](https://en.wikipedia.org/wiki/GF(2)) containing only the elements 0 and 1 (for light on and off respectively). We can write each possible board position and each possible move as a vector over <Formula>{`\\mathbb{F}_2`}</Formula>. That means that:
- pressing a cell an even number of times has no effect;
- the order in which we press the cells does not matter;

To solve the board, we need to find a combination of these move vectors which adds up to give the current board, since that will cancel with the board, turning all of the lights on. There is a systematic way of solving this kind of vector problem called [Gaussian Elimination](https://en.wikipedia.org/wiki/Gaussian_elimination).

```ts
function solve(width: number, height: number, state: boolean[]): number[] {
  const moveVector = buildMoveVector(width, height);
  const moveMatrix = buildMoveMatrix(moveVector, state);
  const solution = getLastRow(rref(moveMatrix));

  return solution;
}
```

A nice video explaining this in detail can be found [here](https://www.youtube.com/watch?v=oCHCD_-nhg4).

## Conclusion

It was a fun experience to rebuild the same game several years later after gathering all of my commercial experience and still being able to learn new things along the journey. So far, I've got 200+ downloads and generated $0.20 in ad revenue, but hey, the learnings are priceless!
