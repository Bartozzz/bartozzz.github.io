import "./blog-post.scss";

import { MDXRenderer } from "gatsby-plugin-mdx";

import { BlogPost } from "../../gatsby/types/queries";

import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

interface Props {
  pageContext: {
    data: BlogPost;
  };
}

export default function BlogPostTemplate({ pageContext }: Props) {
  const post = pageContext.data;
  const { frontmatter, excerpt, body } = post;
  const { title, datePublished, language, description, authors } = frontmatter;

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

          <section itemProp="articleBody" className="post__content">
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </article>

        <Discussion lang={language} />
      </Content>
    </Layout>
  );
}
