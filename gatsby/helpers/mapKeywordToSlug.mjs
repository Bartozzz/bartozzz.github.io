import * as changeCase from "change-case";

export function mapKeywordToSlug(category) {
  return changeCase.kebabCase(category.trim().toLowerCase());
}
