import { createFilePath } from "gatsby-source-filesystem";
import readingTime from "reading-time";

import { getAllPosts } from "./gatsby/data/queries.mjs";
import { createAllBlogPostsPage } from "./gatsby/helpers/createAllBlogPostsPage.mjs";
import { createBlogPostPage } from "./gatsby/helpers/createBlogPostPage.mjs";
import { createBlogPostThumbnails } from "./gatsby/helpers/createBlogPostThumbnails.mjs";
import { redirects } from "./redirects.mjs";

function getAllPostsByKeyword(posts, keyword) {
  return posts.filter((post) => post.frontmatter.keywords.includes(keyword));
}

export const createPages = async ({ graphql, actions }) => {
  const allPostsResult = await getAllPosts(graphql);
  const allPosts = allPostsResult.allMdx.nodes;

  // Create a list of unique keywords from blog posts:
  const allKeywords = allPosts.flatMap((post) => post.frontmatter.keywords);
  const uniqueKeywords = Array.from(new Set(allKeywords).keys());

  async function createRedirectsTask() {
    redirects.forEach((redirect) => {
      actions.createRedirect({
        fromPath: redirect.from,
        toPath: redirect.to,
        isPermanent: true,
      });
    });
  }

  async function createAllBlogPostPagesTask() {
    for (const post of allPosts) {
      await createBlogPostPage(actions, post);
    }
  }

  async function createAllBlogPostThumbnailsTask() {
    await createBlogPostThumbnails(
      allPosts.map((post) => ({
        title: post.frontmatter.title,
        slug: post.fields.slug,
      })),
    );
  }

  async function createAllBlogPostListingPagesTask() {
    // All blog posts listing:
    await createAllBlogPostsPage(actions, allPosts);

    for (const keyword of uniqueKeywords) {
      const allPostsForKeyword = getAllPostsByKeyword(allPosts, keyword);
      await createAllBlogPostsPage(actions, allPostsForKeyword, { keyword });
    }
  }

  return Promise.all([
    createRedirectsTask(),
    createAllBlogPostPagesTask(),
    createAllBlogPostThumbnailsTask(),
    createAllBlogPostListingPagesTask(),
  ]);
};

export const onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body),
    });

    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode }),
    });
  }
};

export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
      type SiteSiteMetadata {
        siteUrl: String
        siteRepo: String
        contact: String
        social: Social
      }

      type Social {
        GitHub: String
        Dribbble: String
        LinkedIn: String
        YouTube: String
      }

      type Mdx implements Node {
        frontmatter: MdxFrontmatter
      }

      type MdxFrontmatter {
        title: String!
        description: String
        date: Date @dateformat
      }
    `);
};
