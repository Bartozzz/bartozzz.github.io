import "./blog-post.scss";

import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Content } from "../components/Content";

export function BlogPostTemplate({ data }) {
  const post = data.markdownRemark;

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

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="post__content"
          />
        </article>

        {/*
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        */}
      </Content>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
