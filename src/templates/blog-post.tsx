import "./blog-post.scss";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Content } from "../components/Content";
import { Discussion } from "../components/Discussion";

export function BlogPostTemplate({ data }) {
  const post = data.mdx;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Content>
        <article
          className="post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="post__header">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>

          <section itemProp="articleBody" className="post__content">
            <MDXRenderer>{post.body}</MDXRenderer>
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
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
