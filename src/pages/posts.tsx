import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { PostExcerpt } from "../components/PostExcerpt";

export default function PostsPage({ data }) {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="All posts" />

      <ol className="list">
        {posts.map((post) => (
          <li key={post.fields.slug}>
            <PostExcerpt
              link={post.fields.slug}
              title={post.frontmatter.title || post.fields.slug}
              date={post.frontmatter.date}
              content={post.frontmatter.description || post.excerpt}
            />
          </li>
        ))}
      </ol>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
