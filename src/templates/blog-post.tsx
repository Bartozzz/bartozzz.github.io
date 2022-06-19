import "./blog-post.scss";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPost } from "../../gatsby/types/queries";

import { Alert } from "../components/Alert";
import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";
import { Image } from "../components/Image";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { TableOfContents } from "../components/TableOfContents";

interface Props {
  pageContext: {
    data: BlogPost;
  };
}

export default function BlogPostTemplate({ pageContext }: Props) {
  const post = pageContext.data;
  const { frontmatter, headings, excerpt, body, embeddedImagesRemote } = post;
  const {
    title,
    datePublished,
    language,
    description,
    authors,
    embeddedImagesLocal,
  } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />

      <Content>
        <article
          className="post"
          itemScope
          itemType="http://schema.org/Article"
          lang={language}
        >
          <header className="post__header">
            <h1 itemProp="headline">{title}</h1>

            <time dateTime={datePublished} itemProp="datePublished">
              {datePublished}
            </time>

            {authors?.length ? (
              <ul className="visually-hidden">
                {authors.map((author) => (
                  <li key={author}>
                    <p itemProp="author">{author}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          <div className="post__wrapper">
            <div className="post__toc">
              <TableOfContents headings={headings} />
            </div>

            <div className="post__content">
              <div itemProp="articleBody">
                <MDXProvider components={{ Alert, Image }}>
                  <MDXRenderer
                    remoteImages={embeddedImagesRemote}
                    localImages={embeddedImagesLocal}
                  >
                    {body}
                  </MDXRenderer>
                </MDXProvider>
              </div>

              <Discussion lang={language} />
            </div>
          </div>
        </article>
      </Content>
    </Layout>
  );
}
