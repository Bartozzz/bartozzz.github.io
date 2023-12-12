import path from "path";

export async function createBlogPostPage(actions, data) {
  const template = path.resolve("./src/templates/blog-post.tsx");
  const slug = data.fields.slug;

  console.info(`Creating blog post page at ${slug}`);

  return actions.createPage({
    path: slug,
    component: `${template}?__contentFilePath=${data.internal.contentFilePath}`,
    context: {
      data,
    },
  });
}
