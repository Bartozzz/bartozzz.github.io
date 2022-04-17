import path from "path";

import { Actions } from "gatsby";

import { mapKeywordToSlug } from "./mapKeywordToSlug";

import { BlogPost } from "../types/queries";

interface Context {
  keyword?: string;
}

export async function createAllBlogPostsPage(
  actions: Actions,
  data: BlogPost[],
  context: Context = {}
) {
  const { keyword } = context;
  const slug = keyword ? `/posts/${mapKeywordToSlug(keyword)}/` : `/posts/`;
  const template = path.resolve(`./src/templates/blog-posts.tsx`);

  console.info(`Creating blog posts listing at ${slug}`);

  return actions.createPage({
    path: slug,
    component: template,
    context: {
      keyword,
      data,
    },
  });
}
