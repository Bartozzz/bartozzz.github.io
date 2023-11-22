import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

interface KeywordsDataQuery {
  allMdx: {
    nodes: Array<{
      frontmatter: {
        keywords: string[];
      };
    }>;
  };
}

function normalizeKeyword(keyword: string) {
  return keyword.toLowerCase();
}

const KEYWORDS_TO_HIDE = [
  normalizeKeyword("Blockchain"),
  normalizeKeyword("Cryptocurrency"),
];

const KEYWORDS_ORDER = {
  [normalizeKeyword("JavaScript")]: 0,
  [normalizeKeyword("TypeScript")]: 1,
  [normalizeKeyword("React")]: 2,
  [normalizeKeyword("React Native")]: 3,
};

export function useKeywords() {
  const query = useStaticQuery<KeywordsDataQuery>(graphql`
    query KeywordsData {
      allMdx {
        nodes {
          frontmatter {
            keywords
          }
        }
      }
    }
  `);

  const uniqueSortedKeywords = React.useMemo(() => {
    const KEYWORDS_WITH_ORDER = Object.entries(KEYWORDS_ORDER).length;

    return query.allMdx.nodes
      .flatMap((node) => node.frontmatter.keywords)
      .reduce<Array<{ quantity: number; name: string }>>((acc, value) => {
        const dupeIndex = acc.findIndex((accItem) => accItem.name === value);

        if (dupeIndex === -1) {
          acc.push({ quantity: 1, name: value });
        } else {
          acc[dupeIndex].quantity++;
        }

        return acc;
      }, [])
      .filter(
        (keyword) => !KEYWORDS_TO_HIDE.includes(normalizeKeyword(keyword.name)),
      )
      .sort((a, b) => b.quantity - a.quantity)
      .sort(
        (a, b) =>
          (KEYWORDS_ORDER[normalizeKeyword(a.name)] ?? KEYWORDS_WITH_ORDER) -
          (KEYWORDS_ORDER[normalizeKeyword(b.name)] ?? KEYWORDS_WITH_ORDER),
      );
  }, [query.allMdx.nodes]);

  return uniqueSortedKeywords;
}
