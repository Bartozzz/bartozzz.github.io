import { graphql } from "gatsby";
import { PostsPageQuery } from "../../graphql-types";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { PostExcerpt } from "../components/PostExcerpt";
import { Content } from "../components/Content";

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
          description
        }
      }
    }
  }
`;
