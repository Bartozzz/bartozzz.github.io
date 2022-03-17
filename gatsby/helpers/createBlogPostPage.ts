import path from "path";

import { Actions } from "gatsby";

const template = path.resolve(`./src/templates/blog-post.tsx`);

export async function createBlogPostPage(actions: Actions, data: any) {
  console.info(`Creating blog post page at ${data.fields.slug}`);

  return actions.createPage({
    path: data.fields.slug,
    component: template,
    context: {
      data,
    },
  });
}
