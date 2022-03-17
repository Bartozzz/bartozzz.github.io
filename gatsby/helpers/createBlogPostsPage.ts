import path from "path";

import { Actions } from "gatsby";

import { mapKeywordToSlug } from "./mapKeywordToSlug";

const template = path.resolve(`./src/templates/blog-posts.tsx`);

export async function createBlogPostsPage(
  actions: Actions,
  data: any,
  context: any = {}
) {
  const { keyword } = context;
  const path = keyword ? `/posts/${mapKeywordToSlug(keyword)}/` : `/posts/`;

  console.info(`Creating blog posts listing at ${path}`);

  return actions.createPage({
    path: path,
    component: template,
    context: {
      keyword,
      data,
    },
  });
}
