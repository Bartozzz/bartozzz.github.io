import "../styles/pages/index.scss";

import * as React from "react";
import { graphql } from "gatsby";
import { IndexPageQuery } from "../../graphql-types";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { PostExcerpt } from "../components/PostExcerpt";
import { Hero } from "../components/Hero";
import { Content } from "../components/Content";
import { Repository } from "../components/Repository";

interface Props {
  data: IndexPageQuery;
}

export default function IndexPage({ data }: Props) {
  const posts = data.allMarkdownRemark.nodes;
  const repositories = data.allRepositoriesYaml.nodes;

  return (
    <Layout>
      <SEO title="All posts" />

      <Hero />

      <Content>
        <ol className="repositories list">
          {repositories.map((repository) => (
            <Repository
              as="li"
              key={repository.id}
              link={repository.path}
              name={repository.name}
              description={repository.desc}
              keywords={repository.keywords}
            />
          ))}
        </ol>

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
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexPage {
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
    allRepositoriesYaml {
      nodes {
        id
        name
        desc
        path
        keywords
      }
    }
  }
`;
