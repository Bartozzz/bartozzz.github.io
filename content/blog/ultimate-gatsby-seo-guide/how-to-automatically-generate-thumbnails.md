---
title: "Ultimate Gatsby SEO Guide: How to generate thumbnails?"
authors: ["Bartosz Łaniewski"]
keywords: ["Gatsby", "SEO"]
language: en
dateCreated: 2023-12-16 13:10:00 +0100
dateUpdated: 2023-12-26 00:00:00 +0100
datePublished: 2023-12-16 16:45:00 +0100
---

As a software engineer, I love to automate things. I also love to write blog posts. So I decided to automate the process of generating thumbnails for my Gatsby blog to improve my brand consistency and recognition across social media platforms. In this article, I will show you how to do it.

## Why are thumbnails important?

1. **First Impression Matter**

Blog post thumbnails act as the visual ambassadors of your content, offering a sneak peek into the article. A compelling thumbnail serves as the initial point of contact between your content and potential readers, making it a low-hanging fruit determining whether users will click through or scroll past.

2. **Social Media Optimization**

Blog post thumbnails are important in optimizing content for platforms like Facebook, Twitter, and Instagram. Social media users often scroll through feeds rapidly, and a striking thumbnail can make your content stand out. It acts as a visual anchor, inviting users to pause and delve deeper into your blog.

3. **Increased Click-Through Rates**

A well-crafted thumbnail can significantly boost click-through rates. When users are presented with a visually appealing and relevant image, they are more likely to be enticed into exploring the full article. This not only enhances the visibility of your content but also contributes to the overall success of your blog by increasing engagement metrics.

## Step 1: Prepare HTML image template

Our thumbnails will be created based on a parametrized HTML template. We will then use a library to convert the HTML to an image. The template should contribute to brand consistency and recognition. Here’s a basic template you can use as a starting point:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --imgWidth: {{imgWidth}};
        --imgHeight: {{imgHeight}};
      }

      html, body {
        margin: 0;
      }

      body {
        width: var(--imgWidth);
        height: var(--imgHeight);
      }
    </style>
  </head>
  <body>
    <p class="title">{{title}}</p>
    <p class="domain">{{link}}</p>
  </body>
</html>
```

<Alert type="info">
  `{{title}}`, `{{link}}`, `{{imgWidth}}`, and `{{imgHeight}}` are variables that will be replaced during the image generation phase.
</Alert>

## Step 2: Create a function to generate thumbnails

There are plenty of libraries that can be used to convert HTML to an image. I decided to use [`node-html-to-image`](https://www.npmjs.com/package/node-html-to-image) as it provides a simple, easy-to-use API. It also allows us to generate multiple images in one call, which benefits performance.

To get started, install the library using the following command:

```bash
$ npm install node-html-to-image
```

Next, let’s create a function that will accept a list of blog posts and generate thumbnails for each of them:

```js
import nodeHtmlToImage from "node-html-to-image";

const html = `<YOUR_HTML_TEMPLATE>`;

function mapSlugToImageName(slug) {
  return slug
    .replace(/\/$/, "") // Remove trailing slash
    .replace("/", "-"); // Replace slashes with dashes
}

function buildOutputPath(slug) {
  return `./static/thumbnails/${mapSlugToImageName(slug)}.png`;
}

function buildLinkPath(slug) {
  return `https://example.com${slug}`;
}

export async function createBlogPostThumbnails(posts) {
  return nodeHtmlToImage({
    html,
    content: posts.map((post) => ({
      output: buildOutputPath(post.slug),
      // Parameters to be passed to the template:
      link: buildLinkPath(post.slug),
      title: post.title,
      imgWidth: 1600,
      imgHeight: 900,
    })),
  });
}
```

<Newsletter />

## Step 3: Create thumbnails when building pages

The function will be called in the `gatsby-node.js` file, in the `createPages` hook. First, we need to fetch a list of all blog posts. Then, we can call the `createBlogPostThumbnails` function with the data. The function will return a promise that will resolve once all thumbnails are generated.

```js
export const createPages = async ({ graphql }) => {
  const allPostsResult = await graphql(`
    query AllPostsQuery {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  await createBlogPostThumbnails(
    allPostsResult.allMdx.nodes.map((post) => ({
      title: post.frontmatter.title,
      slug: post.fields.slug,
    })),
  );
};
```

## Step 4: Use images in your SEO component

If you followed my last article [about creating an SEO component for Gatsby](/blog/ultimate-gatsby-seo-guide/how-to-create-an-seo-component/), you can now use the generated thumbnails for social sharing cards. We simply have to generate a link to the image and pass it to the `image` property of the `SEO` component. Here’s a rough idea of how it could look like:

```tsx
export function Head({ data, location }: HeadProps<DataType, PageContextType>) {
  const slug = location.pathname;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const thumbnailUrl = `${siteUrl}/thumbnails/${mapSlugToImageName(slug)}.png`;

  return <SEO {/* other props */} image={thumbnailUrl} />;
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
```

## Conclusion

In a world where information competes for attention, blog post thumbnails are a powerful tool in every content creator’s arsenal. By automating thumbnail generation, you can save time and effort and focus on what’s important – creating great content.
