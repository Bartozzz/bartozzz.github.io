import "./blog-posts.scss";

import { HeadProps, Link, PageProps, graphql } from "gatsby";

import { mapKeywordToSlug } from "../../gatsby/helpers/mapKeywordToSlug.mjs";

import { BlogPost } from "../../gatsby/types/queries";

import { Content } from "../components/Content";
import { Keyword } from "../components/Keyword";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { SEO } from "../components/SEO";
import { useKeywords } from "../hooks/useKeywords";

interface DataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

interface PageContextType {
  data: BlogPost[];
  keyword?: string;
}

export default function BlogPostsTemplate({
  pageContext,
}: PageProps<DataType, PageContextType>) {
  const keywords = useKeywords();

  const pagePosts = pageContext.data;
  const pageKeyword = pageContext.keyword;

  return (
    <Layout>
      <Content>
        <h1 className="heading">
          {pageKeyword
            ? `Articles about ${pageKeyword}`
            : "Most Recent Articles"}
        </h1>

        <ul className="keywords">
          <li>
            <Link to="/posts/">
              <Keyword wide outlined={pageKeyword ? true : false}>
                All
              </Keyword>
            </Link>
          </li>

          {keywords.map((keyword) => (
            <li key={keyword.name}>
              <Link to={`/posts/${mapKeywordToSlug(keyword.name)}/`}>
                <Keyword
                  wide
                  outlined={keyword.name !== pageKeyword}
                  title={`${keyword.name} category contains ${
                    keyword.quantity === 1
                      ? "1 post"
                      : `${keyword.quantity} posts`
                  }`}
                >
                  {keyword.name}
                </Keyword>
              </Link>
            </li>
          ))}
        </ul>

        <ol className="list">
          {pagePosts.map((post) => (
            <li key={post.fields.slug}>
              <PostExcerpt
                link={post.fields.slug}
                wordCount={post.fields.timeToRead.words}
                timeToRead={post.fields.timeToRead?.minutes}
                title={post.frontmatter.title || post.fields.slug}
                datePublished={post.frontmatter.datePublished}
                datePublishedMeta={post.frontmatter.datePublishedMeta}
                dateModifiedMeta={post.frontmatter.dateUpdatedMeta}
                authors={post.frontmatter.authors}
                content={post.frontmatter.description || post.excerpt}
                language={post.frontmatter.language}
                keywords={post.frontmatter.keywords}
              />
            </li>
          ))}
        </ol>
      </Content>
    </Layout>
  );
}

export function Head({
  data,
  pageContext,
  location,
}: HeadProps<DataType, PageContextType>) {
  const pageKeyword = pageContext.keyword;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const slug = location.pathname;

  return (
    <SEO
      url={`${siteUrl}${slug}`}
      title={
        pageKeyword
          ? `${pageKeyword} posts by Bartosz Łaniewski`
          : "Blog by Bartosz Łaniewski"
      }
      description={
        pageKeyword
          ? `My latest posts, updates, and stories about ${pageKeyword} for developers`
          : "My latest posts, updates, and stories about software engineering for developers"
      }
    />
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
