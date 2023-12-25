---
title: Accessible CSS that respects the users’ choices
authors: ["Bartosz Łaniewski"]
keywords: ["CSS", "Accessibility"]
language: en
dateCreated: 2021-12-13 00:00:00 +0100
dateUpdated: 2023-12-26 00:00:00 +0100
datePublished: 2021-12-13 00:00:00 +0100
---

Most of the designs are rarely built with user preferences in mind, it is the appearance that matters after all! Few people realize the way you respect and adapt the design to users’ preferences can have an impact on how accessible your product is. In this article, I’ll list out few things to keep in mind when developing inclusive designs.

## Prevent animations if a user prefers reduced motion

> Some users experience distraction or nausea from animated content. For example, if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders. ~ [W3 WCAG](https://www.w3.org/WAI/WCAG21/Techniques/css/C39)

[The `prefers-reduced-motion` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) can be used to detect if the user prefers to limit the amount of non-essential motions. The user can indicate this preference in their operating system. The following CSS code can be applied to disable that motion for users who request it:

```css
@media (prefers-reduced-motion: reduced) {
  .element {
    /* CSS to disable motion goes here */
    animation: none;
  }
}
```

I prefer to go the other way around and enable animations for users who have made no preference known to the system.

```css
@media (prefers-reduced-motion: no-preference) {
  .element {
    /* CSS to enable motion goes here */
    transition: all 0.2s ease;
  }
}
```

Keep in mind that reduced motion preference does not only apply to animations – it can apply to transitions but also to GIFs or videos with auto-play. [Val Head created a great article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/#section3) in which he points out how to identify potentially triggering animations.

## Size content based on the user’s preferred font size

Users can adjust the preferred font size in the browser setting. The browser font size can be read by using percentage units – setting `font-size: 100%` will make your text 100% of the base font size set in the browser by the user:

```css
html {
  /* Depending on the user settings, this can be 9px, 12px, 16px, 20px, 24px */
  font-size: 100%;
}
```

Setting the root font size to a percentage value will respect user choices and allow you to scale the other parts of your application accordingly by using [relative length units such as `em` or `rem`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units). A trick used to facilitate rem calculations is to set the root font size to 62.5%, which defaults to `10px` on default settings:

```css
html {
  /* 1rem = 10px */
  font-size: 62.5%;
}

.container {
  /* When very small font-size is set : 70rem = ~395px */
  /* When small font-size is set      : 70rem = ~525px */
  /* When normal font-size is set     : 70rem = ~700px */
  /* When large font-size is set      : 70rem = ~875px */
  /* When very large font-size is set : 70rem = ~1050px */
  max-width: 70rem;
}
```

…with that, you should be able to size everything using relative length units without a headache. Keep in mind that you don’t have to limit yourself to font sizes. You can use `rem` unit on breakpoints, widths, heights, and any other CSS property.

<Newsletter />

## Use a color scheme based on the user’s preferred theme

[The `prefers-color-scheme` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) can be used to make your website adapt to the user’s preferred color scheme. The user might indicate this preference by changing the color scheme in their operating system.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #fff;
    --background: #000;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --text-primary: #000;
    --background: #fff;
  }
}
```

Light and dark modes have different use cases but both contribute to the [health & well-being](https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side) of the audience. A light mode will be preferred in a well-lit room or direct sunlight, whereas dark mode is preferred during the night or when saving the battery life.

## Adapt to the user’s preferred contrast level

[The `prefers-contrast` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) can be used to make your website adapt to the user’s preferred contrast level. The user might indicate this preference by changing the contrast level in their operating system.

```css
/* When users have no contrast preferences */
.element {
  outline: 2px dashed black;
}

/* When users prefer a higher level of contrast */
@media (prefers-contrast: more) {
  .element {
    outline: 2px solid black;
  }
}

/* When users prefer a lower level of contrast */
@media (prefers-contrast: less) {
  .element {
    outline: 2px dashed gray;
  }
}
```

## Use a range of colors supported by the user’s device

[The `color-gamut` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut) can be used to detect the approximate range of colors that are supported by the user monitor. You can use it to adapt your color palette adaptively to the user’s display.

```css
/* Assume the output device can support approximately the sRGB gamut or more */
:root {
  --primary: …;
}

/* The device supports the p3 gamut: larger than and includes the sRGB gamut */
@media (color-gamut: p3) {
  :root {
    --primary: …;
  }
}

/* The device supports rec2020 gamut: larger than and includes the p3 gamut */
@media (color-gamut: rec2020) {
  :root {
    --primary: …;
  }
}
```

If you want to make full use of larger gamuts, you need to use new CSS colors formats ([`lab`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab), [`lch`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch), [`display-p3`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color)) or [fall back to images, as they support color profiles](https://twitter.com/panic/status/1106633444157607936). Keep in mind that ultra-bright colors available on the `p3` and `rec2020` gamuts can be uncomfortable and damage the screen if used on static content.

{
  /**
   * *[gamut]: the range of colors that can be displayed
   * *[gamuts]: the range of colors that can be displayed
   */
}
