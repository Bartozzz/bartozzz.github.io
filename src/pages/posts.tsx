import { graphql } from "gatsby";

import { PostsPageQuery } from "../../graphql-types";

import { Content } from "../components/Content";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { SEO } from "../components/SEO";

interface Props {
  data: PostsPageQuery;
}

export default function PostsPage({ data }: Props) {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <SEO title="All posts" />

      <Content>
        <ol className="list">
          {posts.map((post) => (
            <li key={post.fields.slug}>
              <PostExcerpt
                link={post.fields.slug}
                title={post.frontmatter.title || post.fields.slug}
                date={post.frontmatter.date}
                authors={post.frontmatter.authors}
                content={post.frontmatter.description || post.excerpt}
                language={post.frontmatter.language}
              />
            </li>
          ))}
        </ol>
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostsPage {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          authors
          language
          description
        }
      }
    }
  }
`;
