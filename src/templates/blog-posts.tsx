import { BlogPost } from "../../gatsby/types/queries";

import { Content } from "../components/Content";
import { Layout } from "../components/Layout";
import { PostExcerpt } from "../components/PostExcerpt";
import { SEO } from "../components/SEO";

interface Props {
  pageContext: {
    data: BlogPost[];
    keyword?: string;
  };
}

export default function BlogPostsTemplate({ pageContext }: Props) {
  const posts = pageContext.data;

  return (
    <Layout>
      <SEO title={pageContext.keyword ?? "All posts"} />

      <Content>
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
