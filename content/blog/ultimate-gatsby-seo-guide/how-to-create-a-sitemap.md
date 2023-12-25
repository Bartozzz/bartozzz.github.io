---
title: "Ultimate Gatsby SEO Guide: How to create a sitemap?"
authors: ["Bartosz Łaniewski"]
keywords: ["Gatsby", "SEO"]
language: en
dateCreated: 2023-12-12 00:00:00 +0100
dateUpdated: 2023-12-26 00:00:00 +0100
datePublished: 2023-12-12 00:00:00 +0100
---

Creating a sitemap is an essential step towards enhancing the visibility and SEO performance of your Gatsby website. A sitemap assists search engines in efficiently crawling and indexing your content. In this guide, I’ll walk you through the process of creating a sitemap for your Gatsby project, boosting its search engine optimization.

## The Importance of a Sitemap

A sitemap serves as a guide for search engines, helping them discover and rank your content more effectively. It also ensures that any updates or new pages are recognized. This is crucial for Search Engine Optimization (_SEO_) and ensuring that your website appears in Search Engine Results Pages (_SERPs_).

## Step 1: Install the Gatsby Plugin

Gatsby simplifies the process of creating a sitemap by providing an official, dedicated plugin – [`gatsby-plugin-sitemap`](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/). To get started, open your Gatsby project and install the plugin using the following command:

```bash
$ npm install gatsby-plugin-sitemap
```

Next, integrate the plugin into your `gatsby-config.js` file:

```javascript
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.example.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
    },
  ],
}
```

This step automatically generates a `sitemap-index.xml` file in the root of your Gatsby project and, for every 45000 URLs a new `sitemap-n.xml` file containing all the basic information for search engines:

```xml
<!-- sitemap-index.xml -->
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
```

```xml
<!-- sitemap-0.xml -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/blog/some-post-slug/</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://example.com/blog/</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://example.com/</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## Step 2: Customize Your Sitemap

While the default configuration works well, you may want to customize your sitemap to provide more information. Gatsby allows you to tailor the sitemap by [providing options](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) in the `gatsby-config.js` file, as follows:

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMdx {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  dateUpdated
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allSitePages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          const blogPostsPages = allMdxNodes.reduce(
            (acc, node) => ({
              ...acc,
              [node.fields.slug]: node.frontmatter,
            }),
            {},
          );

          return allSitePages.map((page) => ({
            ...page,
            ...blogPostsPages[page.path],
          }));
        },
        serialize: ({ path, dateUpdated }) => {
          if (dateUpdated) {
            return {
              url: path,
              lastmod: dateUpdated,
              priority: 0.7,
              changefreq: "daily",
            };
          } else {
            return {
              url: path,
              priority: 0.5,
              changefreq: "daily",
            };
          }
        },
      },
    },
  ],
}
```

With the configuration above, the new sitemap should contain the new field `<lastmod>` when the last update date is available for a given page:

```xml
<!-- sitemap-0.xml -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/blog/some-post-slug/</loc>
    <lastmod>2023-01-01T00:00:00.000Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://example.com/blog/</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://example.com/</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

<Alert type="info">
  **Crawlers interpret the sitemap differently.** For instance, [Google ignores `<priority>` and `<changefreq>` values](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=en&visit_id=638379916569097492-3578546875&rd=1#additional-notes-about-xml-sitemaps), but recommends adding a `<lastmod>` value to indicate the last update date for a given page.
</Alert>

## Step 3: Update your robots.txt file

The `robots.txt` file is a text file placed in a website’s root directory to instruct web crawlers about which parts of the site should not be crawled or indexed. The `Sitemap` directive in the `robots.txt` file is used to indicate the location of the XML sitemap.

To generate a `robots.txt` file, you can use the [`gatsby-plugin-robots-txt`](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/) plugin. For our use case, we won’t overengineer the configuration. Let’s manually create a `robots.txt` file in the `static` folder and simply add a reference to the sitemap file to allow all crawlers to index our website:

```txt
Sitemap: https://example.com/sitemap-index.xml
User-agent: *
Disallow:
```

<Newsletter />

## Step 4: Test and Deploy

Before deploying your Gatsby website with the new sitemap, it’s crucial to test it locally. The sitemap is only generated for production mode. To test your sitemap, you should run the following command:

```bash
$ gatsby build && gatsby serve.
```

…and head to `localhost:9000/sitemap-index.xml` to see the generated sitemap. Once you’ve confirmed that everything is working as expected, deploy your Gatsby website to your hosting provider.

## Step 5: Submit to search engines

The next step is to submit it to major search engines. Google Search Console, Bing Webmaster Tools, and other search engine platforms provide tools for submitting and monitoring your sitemap.

### How to submit a sitemap to Google Search Console

1. Sign in to [Google Search Console](https://search.google.com/search-console) and select your website;
2. In the navigation menu, in the **Indexing** section, click on **Sitemaps**;
3. Enter a full sitemap URL in the **Add a new sitemap** field and click **Submit**.

### How to submit a sitemap to Bing Webmaster Tools

1. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters/about) and select your website.
2. In the navigation menu, click on **Sitemaps**, then click on **Submit sitemap**;
4. Enter a full sitemap URL in the **Submit sitemap** field and click **Submit**.

## Conclusion

Creating a sitemap for your Gatsby website is a strategic move towards improving SEO and making your content more accessible to search engines.

The `gatsby-plugin-sitemap` simplifies this process, allowing you to focus on creating compelling content while ensuring that search engines can easily discover and index your pages.

By following these steps and customizing your sitemap, you can increase visibility, and ultimately optimize your website’s performance.
