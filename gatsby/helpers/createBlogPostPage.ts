import path from "path";

import { Actions } from "gatsby";

import { BlogPost } from "../types/queries";

export async function createBlogPostPage(actions: Actions, data: BlogPost) {
  const slug = data.fields.slug;
  const template = path.resolve(`./src/templates/blog-post.tsx`);

  console.info(`Creating blog post page at ${slug}`);

  return actions.createPage({
    path: slug,
    component: template,
    context: {
      data,
    },
  });
}
