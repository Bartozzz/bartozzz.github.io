import path from "path";

import { mapKeywordToSlug } from "./mapKeywordToSlug.mjs";

export async function createAllBlogPostsPage(actions, data, context = {}) {
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
