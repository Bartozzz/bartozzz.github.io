import { createFilePath } from "gatsby-source-filesystem";
import readingTime from "reading-time";

import { getAllPosts, getAllPostsByKeyword } from "./gatsby/data/queries.mjs";
import { createAllBlogPostsPage } from "./gatsby/helpers/createAllBlogPostsPage.mjs";
import { createBlogPostPage } from "./gatsby/helpers/createBlogPostPage.mjs";

export const createPages = async ({ graphql, actions }) => {
  // Create a list of unique keywords from blog posts:
  const keywords = new Set();

  // Create pages for blog posts:
  await (async function () {
    const result = await getAllPosts(graphql);
    const posts = result.allMdx.nodes;

    const tasks = posts.map(async (data) => {
      data.frontmatter.keywords.forEach((keyword) => {
        keywords.add(keyword);
      });

      await createBlogPostPage(actions, data);
    });

    return await Promise.all(tasks);
  })();

  // Create page for listing all blog posts:
  await (async function () {
    const result = await getAllPosts(graphql);
    const data = result.allMdx.nodes;

    return await createAllBlogPostsPage(actions, data);
  })();

  // Create page for listing all blog posts by keyword:
  await (async function () {
    const tasks = Array.from(keywords.keys()).map(async (keyword) => {
      const result = await getAllPostsByKeyword(graphql, keyword);
      const data = result.allMdx.nodes;

      await createAllBlogPostsPage(actions, data, { keyword });
    });

    return await Promise.all(tasks);
  })();
};

export const onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });

    createNodeField({
      node,
      name: `slug`,
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
