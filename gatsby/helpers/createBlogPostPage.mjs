import path from "path";

import { createImage } from "./createImage.mjs";
import { mapSlugToImageName } from "./mapSlugToImageName.mjs";

export async function createBlogPostPage(actions, data) {
  const template = path.resolve("./src/templates/blog-post.tsx");

  const slug = data.fields.slug;
  const slugWithoutEndSlash = slug.replace(/\/$/, "");

  console.info(`Creating blog post page at ${slug}`);

  await createImage({
    title: data.frontmatter.title,
    link: `laniewski.me${slugWithoutEndSlash}`,
    output: `./static/thumbnails/${mapSlugToImageName(slug)}.png`,
  });

  return actions.createPage({
    path: slug,
    component: `${template}?__contentFilePath=${data.internal.contentFilePath}`,
    context: {
      data,
    },
  });
}
