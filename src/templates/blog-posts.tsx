import "./blog-posts.scss";

import { Link } from "gatsby";

import { mapKeywordToSlug } from "../../gatsby/helpers/mapKeywordToSlug";

import { BlogPost } from "../../gatsby/types/queries";

import { Content } from "../components/Content";
import { Keyword } from "../components/Keyword";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { SEO } from "../components/SEO";
import { useKeywords } from "../hooks/useKeywords";

interface Props {
  pageContext: {
    data: BlogPost[];
    keyword?: string;
  };
}

export default function BlogPostsTemplate({ pageContext }: Props) {
  const keywords = useKeywords();

  const pagePosts = pageContext.data;
  const pageKeyword = pageContext.keyword;

  return (
    <Layout>
      <Content>
        <ul className="keywords">
          <Link to="/posts">
            <Keyword wide outlined={pageKeyword ? true : false}>
              All
            </Keyword>
          </Link>

          {keywords.map((keyword) => (
            <Link key={keyword} to={`/posts/${mapKeywordToSlug(keyword)}`}>
              <Keyword wide outlined={keyword !== pageKeyword}>
                {keyword}
              </Keyword>
            </Link>
          ))}
        </ul>

        <ol className="list">
          {pagePosts.map((post) => (
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

export function Head({ pageContext }: Props) {
  const pageKeyword = pageContext.keyword;

  return (
    <SEO
      title={pageKeyword ? `${pageKeyword} posts` : "All posts"}
      description={
        pageKeyword
          ? `My latest posts, updates, and stories about ${pageKeyword} for developers`
          : "My latest posts, updates, and stories about software engineering for developers"
      }
    />
  );
}
