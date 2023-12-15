---
title: "Ultimate Gatsby SEO Guide: How to create an SEO component?"
authors: ["Bartosz Łaniewski"]
keywords: ["Gatsby", "SEO"]
language: en
dateCreated: 2023-12-15 18:10:00 +0100
dateUpdated: 2023-12-15 18:10:00 +0100
datePublished: 2023-12-15 18:10:00 +0100
---

Search Engine Optimization (_SEO_) is a crucial aspect of building a successful website. One way to enhance your Gatsby site’s SEO capabilities is by creating a custom SEO component for easy metadata tag management. In this blog post, we’ll explore the Head’s API and a step-by-step guide on creating a Gatsby SEO component.

## What is the Gatsby Head API?

[Gatsby Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) simplifies the process of managing the [document head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head), where metadata such as title tags, meta descriptions, and other elements crucial for SEO are defined.

To use the Head API, you simply have to export a named function called `Head` from your pages (and templates used in `createPage`), as follows:

```tsx
export function Head(props: HeadProps<DataType, PageContextType>) {
  return (
    <>
      <title>…</title>
      <meta name="keywords" content="…" />
      <meta name="description" content="…" />
    </>
  );
}
```

You can read more about the Gatsby Head API in the official documentation [here](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/).

## Step 1: Create a basic SEO component

Let’s start by creating a new `components/SEO.tsx` component that will set basic metadata information in the document head:

```tsx
interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: React.PropsWithChildren<SEOProps>) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {children}
    </>
  );
};
```

Our basic component accepts 3 properties:
- `title`: the title of the page;
- `description`: the description of the page;
- `children`: any additional elements that should be included in the document head;

We can now use the component inside pages and templates, as follows:

```tsx
export function Head() {
  return (
    <SEO title="Page title" description="Page description">
      <html lang="en" />
    </SEO>
  );
}
```

## Step 2: Add canonical links

A canonical tag defines the main version for duplicate and similar pages. It tells search engines which version of a page they should index and rank (for example, to use https://example.com instead of https://www.example.com). To add canonical links, you can use the official Gatsby plugin called [`gatsby-plugin-canonical-urls`](https://www.gatsbyjs.com/plugins/gatsby-plugin-canonical-urls/). It works well for most cases.

For a more customizable approach, we can leverage the Head API and the `location` property to create custom canonical links. Let’s start by extending our SEO component with a `url` property:

```tsx {4,10,18}
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  url: string;
  title: string;
  description: string;
}

export function SEO({
  url,
  title,
  description,
  children,
}: React.PropsWithChildren<SEOProps>) {
  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      {children}
    </>
  );
}
```

Then, we can populate the `url` property in our pages and templates, as follows:

```tsx
interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

export function Head({ data, location }: HeadProps<DataType>) {
  const siteUrl = data.site.siteMetadata.siteUrl;
  const slug = location.pathname;

  return (
    <SEO
      url={`${siteUrl}${slug}`}
      title="Page title"
      description="Page description"
    />
  );
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

## Step 3: Add social sharing cards

Open Graph (OG) tags instruct social networks like Facebook, Pinterest, LinkedIn, and other platforms what information to display whenever a URL to your page is shared. The four required Open Graph tags for every page are:
- `og:title`,
- `og:type`,
- `og:image`,
- `og:url`.

Twitter provides its variants of those tags. Basic Twitter cards include:
- `twitter:card`,
- `twitter:site`,
- `twitter:title`,
- `twitter:description`,
- `twitter:image`.

According to [Twitter Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started), if some of these tags are missing, Twitter will pull data from relevant Open Graph tags.

<Alert type="warning">
  Make sure the URL specified in `og:url` matches the URL of the canonical page unless you have a specific intent.
</Alert>

```tsx {7,14,17-25,27,35-42}
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  url: string;
  title: string;
  description: string;
  image?: string;
}

export function SEO({
  url,
  title,
  description,
  image,
  children,
}: React.PropsWithChildren<SEOProps>) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const metaImage = image || `${site.siteMetadata.siteUrl}/thumbnail.png`;

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      <meta name="og:url" content={url} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={metaImage} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@yourTwitterHandle" />

      {children}
    </>
  );
}
```

Unfortunately, you cannot test Open Graph and Twitter cards locally, you need to deploy your changes so they are publicly accessible. Once deployed, you can post a link to your website in the [Facebook Debugger](https://developers.facebook.com/tools/debug) and Tweet Composer (in the Twitter client itself) to check that your cards render as expected.

## Conclusion

Creating a custom SEO component with Gatsby and the Head API is a straightforward process that significantly enhances your website’s search engine visibility. Managing metadata efficiently will empower you to create well-optimized pages that stand out in search engine rankings, ultimately driving more traffic to your website.
