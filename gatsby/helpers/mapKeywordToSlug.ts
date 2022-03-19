import { paramCase } from "param-case";

export function mapKeywordToSlug(category: string) {
  return paramCase(category.trim().toLowerCase());
}
