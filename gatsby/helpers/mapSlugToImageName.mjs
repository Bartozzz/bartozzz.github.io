export function mapSlugToImageName(slug) {
  return slug.replace("blog/", "").replace(/\/$/, "");
}
