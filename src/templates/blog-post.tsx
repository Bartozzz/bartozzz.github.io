import "./blog-post.scss";

import { MDXProvider } from "@mdx-js/react";

import { PageProps } from "gatsby";

import { BlogPost } from "../../gatsby/types/queries";

import { Alert } from "../components/Alert";
import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";
import { Formula } from "../components/Formula";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { TableOfContents } from "../components/TableOfContents";

type Props = PageProps<unknown, { data: BlogPost }>;

export default function BlogPostTemplate({ pageContext, children }: Props) {
  const post = pageContext.data;
  const { frontmatter, tableOfContents } = post;
  const { title, datePublished, language, authors } = frontmatter;

  return (
    <Layout>
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
              <TableOfContents data={tableOfContents} />
            </div>

            <div className="post__content">
              <div itemProp="articleBody">
                <MDXProvider components={{ Alert, Formula }}>
                  {children}
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

export function Head({ pageContext }: Props) {
  const post = pageContext.data;
  const { excerpt } = post;
  const { title, description } = post.frontmatter;

  return <SEO title={title} description={description || excerpt} />;
}
