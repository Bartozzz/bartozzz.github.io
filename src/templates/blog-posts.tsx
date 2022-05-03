import "./blog-posts.scss";

import { graphql, Link } from "gatsby";

import { mapKeywordToSlug } from "../../gatsby/helpers/mapKeywordToSlug";

import { BlogPost } from "../../gatsby/types/queries";
import { AllKeywordsQuery } from "../../graphql-types";

import { Content } from "../components/Content";
import { Keyword } from "../components/Keyword";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { SEO } from "../components/SEO";

interface Props {
  data: AllKeywordsQuery;
  pageContext: {
    data: BlogPost[];
    keyword?: string;
  };
}

export default function BlogPostsTemplate({ data, pageContext }: Props) {
  const posts = pageContext.data;
  const keywords = data.allMdx.nodes.flatMap(
    (node) => node.frontmatter.keywords
  );

  const uniqueSortedKeywords = keywords
    .reduce<Array<{ quantity: number; keyword: string }>>((acc, val) => {
      const dupeIndex = acc.findIndex((accItem) => accItem.keyword === val);

      if (dupeIndex === -1) {
        acc.push({ quantity: 1, keyword: val });
      } else {
        acc[dupeIndex].quantity++;
      }

      return acc;
    }, [])
    .sort((a, b) => b.quantity - a.quantity)
    .map(({ keyword }) => keyword);

  return (
    <Layout>
      <SEO title={pageContext.keyword ?? "All posts"} />

      <Content>
        <ul className="keywords">
          <Link to="/posts">
            <Keyword wide outlined={pageContext.keyword ? true : false}>
              All
            </Keyword>
          </Link>

          {uniqueSortedKeywords.map((keyword) => (
            <Link key={keyword} to={`/posts/${mapKeywordToSlug(keyword)}`}>
              <Keyword wide outlined={keyword !== pageContext.keyword}>
                {keyword}
              </Keyword>
            </Link>
          ))}
        </ul>

        <ol className="list">
          {posts.map((post) => (
            <li key={post.fields.slug}>
              <PostExcerpt
                link={post.fields.slug}
                title={post.frontmatter.title || post.fields.slug}
                date={post.frontmatter.datePublished}
                authors={post.frontmatter.authors}
                content={post.frontmatter.description || post.excerpt}
                language={post.frontmatter.language}
                keywords={post.frontmatter.keywords}
                timeToRead={post.timeToRead}
              />
            </li>
          ))}
        </ol>
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllKeywords {
    allMdx {
      nodes {
        frontmatter {
          keywords
        }
      }
    }
  }
`;
