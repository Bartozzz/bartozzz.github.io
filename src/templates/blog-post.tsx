import "./blog-post.scss";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BlogPostBySlugQuery } from "../../graphql-types";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";

interface Props {
  data: BlogPostBySlugQuery;
}

export function BlogPostTemplate({ data }: Props) {
  const post = data.mdx;
  const { frontmatter, excerpt, body } = post;
  const { title, date, description, authors } = frontmatter;

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />

      <Content>
        <article
          className="post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="post__header">
            <h1 itemProp="headline">{title}</h1>

            <time dateTime={date} itemProp="datePublished">
              {date}
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

        <Discussion />
      </Content>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        authors
        description
      }
    }
  }
`;
