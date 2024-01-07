---
title: "Ultimate Gatsby SEO Guide: How to structure data for rich snippets?"
authors: ["Bartosz Łaniewski"]
keywords: ["Gatsby", "SEO"]
language: en
dateCreated: 2023-12-26 10:00:00 +0100
dateUpdated: 2024-01-07 20:45:00 +0100
datePublished: 2024-01-07 20:45:00 +0100
---

Adding structured data can help search engines understand more about your web pages and show better, richer results. Rich snippets enhance the appearance of search results by providing additional information beyond the standard meta description. In this article, we’ll dive into structuring content for rich snippets and explore best practices for optimizing your website’s presence in search engine results.

## What are rich snippets?

Rich snippets are the extra pieces of information that appear in search results, providing users with a snapshot of what to expect on a webpage. These snippets can include various elements such as reviews, ratings, pricing, event details, and more. By presenting this additional information, rich snippets not only make search results more informative but also make your content stand out, potentially attracting more clicks.

## How to structure data for rich snippets?

To enable search engines to understand and display rich snippets, you need to utilize specific markup languages. The two primary markup languages for this purpose are **Microdata** and <abbr title="JavaScript Object Notation for Linked Data">**JSON-LD**</abbr>.

### Step 1: Identify Content Types

Start by identifying the specific content types that could benefit from rich snippets. Common types include [reviews](https://schema.org/AggregateRating), [recipes](https://schema.org/Recipe), [events](https://schema.org/Event), [FAQs](https://schema.org/FAQPage), and more.

### Step 2: Decide which format to use

Google recommends using [JSON-LD](https://json-ld.org/) due to its simplicity and ease of implementation. I prefer to use Microdata, because I can put it directly into the reusable components (and layouts) I use to build a webpage. Remember that you can mix both syntaxes (Microdata and JSON-LD):

> - I can have on the same page both syntaxes (microdata and json-ld); for instance I might use microdata to render WebPage and use json-ld for Organization;
> - I can also merge attributes related to the same entity when all the data is available in json-ld but…
> - I cannot combine information related to the same entity by item ID when this information is written in microdata and json-ld.
>
> – [„Mixing JSON-LD and Microdata: All You Need to Know” by Andrea Volpini](https://wordlift.io/blog/en/mixing-json-ld-and-microdata/)

### Step 3: Use Structured Data Markup

Once you’ve identified content types and chosen the preferred format, you need to implement structured data. This involves embedding code within your HTML that provides explicit information about the content on the page.

<Newsletter />

When implementing structured data, you should follow [Schema.org Guidelines](https://schema.org/). Schema.org is a collaborative project between major search engines, including Google, Bing, and Yahoo. It provides a standardized vocabulary for structured data markup.

#### JSON-LD example

If you followed my last article [about creating an SEO component for Gatsby](/blog/ultimate-gatsby-seo-guide/how-to-create-an-seo-component/), you can paste JSON-LD snippets directly there. Here's an example of an article with JSON-LD structured data:

```tsx
export function Head() {
  return (
    <SEO>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Title of the article",
          "datePublished": "2023-12-20T12:00:00+01:00",
          "dateModified": "2023-12-26T14:20:00+01:00",
          "image": ["https://example.com/thumbnail.png"],
          "author": [
            {
              "@type": "Person",
              "name": "Jan Kowalski",
              "url": "https://example.com/profile/j.kowalski"
            }
          ]
        })}
      </script>
    </SEO>
  );
}
```

<Alert type="info">
  There are some free tools you can use to generate structured data markup for your website, for example, [Merkle’s Schema Markup Generator](https://technicalseo.com/tools/schema-markup-generator/) which generates JSON-LD for most common types.
</Alert>

#### Microdata example

Here’s an example of an article using Microdata:

```tsx
function BlogPostTemplate({ post }) {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      lang={post.language}
    >
      <meta itemProp="image" content={post.thumbnailUrl} />
      <meta itemProp="dateModified" content={post.dateUpdatedISO} />

      <header>
        <h1 itemProp="headline">{post.title}</h1>

        <span
          itemScope
          itemProp="author"
          itemType="https://schema.org/Person"
        >
          By <span itemProp="name">{post.author}</span>
        </span>

        <time itemProp="datePublished" dateTime={post.datePublishedISO}>
          Published on {post.datePublished}
        </time>
      </header>

      <div itemProp="articleBody">
        {post.body}
      </div>
    </article>
  );
}
```

- `itemScope` defines the scope of associated metadata ([docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope));
- `itemType` specifies the vocabulary that will be used to define item properties ([docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype));
- `itemProp` is used to add properties to an item ([docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop));

<Alert type="info">
  If you want to create markup by hand, I recommend checking out the [Google Developers Structured Data Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) for examples.
</Alert>

## How to test Structured Data?

- [Rich Result Test](https://search.google.com/test/rich-results) is the official Google tool for testing your structured data to see which Google-rich results can be generated by the structured data on your page.

- [Schema Markup Validator](https://validator.schema.org/) validates all [Schema.org](https://schema.org/)-based structured data that is embedded in web pages, without Google feature-specific warnings.

- [Structured data linter](http://linter.structured-data.org/) previews an example of what a search engine might display. Remember, it is at the discretion of each search engine provider to decide whether your page will be displayed as an enhanced search result or not in their search results pages.

## Conclusion

Structuring content for rich snippets is a powerful SEO strategy that can significantly enhance your online visibility. By implementing structured data markup using best practices, you can increase the chances of your content being featured in search results, attracting more clicks and driving organic traffic to your website.
