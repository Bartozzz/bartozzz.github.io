import "./blog-post.scss";

import { MDXProvider } from "@mdx-js/react";

import { PageProps, graphql } from "gatsby";

import { mapSlugToImageName } from "../../gatsby/helpers/mapSlugToImageName.mjs";
import { BlogPost } from "../../gatsby/types/queries";

import { Alert } from "../components/Alert";
import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { TableOfContents } from "../components/TableOfContents";

type Props = PageProps<
  {
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
  },
  {
    data: BlogPost;
    slug: string;
  }
>;

export default function BlogPostTemplate({
  data,
  pageContext,
  children,
}: Props) {
  const post = pageContext.data;
  const slug = post.fields.slug;
  const { frontmatter, tableOfContents } = post;
  const {
    title,
    language,
    authors,
    datePublished,
    datePublishedMeta,
    dateUpdatedMeta,
  } = frontmatter;

  const siteUrl = data.site.siteMetadata.siteUrl;
  const thumbnailUrl = `${siteUrl}/thumbnails/${mapSlugToImageName(slug)}.png`;

  return (
    <Layout>
      <Content>
        <article
          className="post"
          itemScope
          itemType="http://schema.org/Article"
          lang={language}
        >
          <meta itemProp="image" content={thumbnailUrl} />
          <meta itemProp="dateModified" content={dateUpdatedMeta} />
          {authors.map((author) => (
            <meta key={author} itemProp="author" content={author} />
          ))}

          <header className="post__header">
            <h1 itemProp="headline">{title}</h1>

            <time dateTime={datePublishedMeta} itemProp="datePublished">
              {datePublished}
            </time>
          </header>

          <div className="post__wrapper">
            <div className="post__toc">
              <TableOfContents data={tableOfContents} />
            </div>

            <div className="post__content">
              <div itemProp="articleBody">
                <MDXProvider components={{ Alert }}>{children}</MDXProvider>
              </div>

              <Discussion lang={language} />
            </div>
          </div>
        </article>
      </Content>
    </Layout>
  );
}

export function Head({ data, pageContext }: Props) {
  const post = pageContext.data;
  const slug = post.fields.slug;
  const { excerpt } = post;
  const { title, description } = post.frontmatter;

  const siteUrl = data.site.siteMetadata.siteUrl;
  const thumbnailUrl = `${siteUrl}/thumbnails/${mapSlugToImageName(slug)}.png`;

  return (
    <SEO
      url={`${siteUrl}${slug}`}
      title={title}
      image={thumbnailUrl}
      description={description || excerpt}
    >
      <link rel="canonical" href={`${siteUrl}${slug}`} />
      <html className="smooth-scroll" />
    </SEO>
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
