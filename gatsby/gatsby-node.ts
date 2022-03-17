import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

import { getAllPosts, getAllPostsByKeyword } from "./data/queries";
import { createBlogPostPage } from "./helpers/createBlogPostPage";
import { createBlogPostsPage } from "./helpers/createBlogPostsPage";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  // Create a list of unique keywords from blog posts:
  const keywords = new Set<string>();

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

    return await createBlogPostsPage(actions, data);
  })();

  // Create page for listing all blog posts by keyword:
  await (async function () {
    const tasks = Array.from(keywords.keys()).map(async (keyword) => {
      const result = await getAllPostsByKeyword(graphql, keyword);
      const data = result.allMdx.nodes;

      await createBlogPostsPage(actions, data, { keyword });
    });

    return await Promise.all(tasks);
  })();
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
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
        title: String
        description: String
        date: Date @dateformat
      }
    `);
  };
