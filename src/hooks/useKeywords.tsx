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

export function useKeywords() {
  const query = useStaticQuery<KeywordsDataQuery>(
    graphql`
      query KeywordsData {
        allMdx {
          nodes {
            frontmatter {
              keywords
            }
          }
        }
      }
    `
  );

  const uniqueSortedKeywords = query.allMdx.nodes
    .flatMap((node) => node.frontmatter.keywords)
    .reduce<Array<{ quantity: number; keyword: string }>>((acc, val) => {
      const dupeIndex = acc.findIndex((accItem) => accItem.keyword === val);

      if (dupeIndex === -1) {
        acc.push({ quantity: 1, keyword: val });
      } else {
        acc[dupeIndex].quantity++;
      }

      return acc;
    }, [])
    .sort((a, b) => b.quantity - a.quantity)
    .map(({ keyword }) => keyword);

  return uniqueSortedKeywords;
}
