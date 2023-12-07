function processQueryResult(result) {
  if (result.errors) {
    console.error("Error while processing query results:", result.errors);
    throw Error(result.errors);
  } else if (!result.data) {
    console.warn("No data returned by the query:", result.data);
    throw Error("No data returned by the query");
  } else {
    return result.data;
  }
}

export const postQuery = `
  totalCount
  nodes {
    id
    body
    excerpt(pruneLength: 154)
    tableOfContents(maxDepth: 3)
    fields {
      slug
      timeToRead {
        minutes
      }
    }
    frontmatter {
      title
      authors
      keywords
      language
      description
      dateCreated(formatString: "MMMM DD, YYYY")
      dateCreatedMeta: dateCreated
      dateUpdated(formatString: "MMMM DD, YYYY")
      dateUpdatedMeta: dateUpdated
      datePublished(formatString: "MMMM DD, YYYY")
      datePublishedMeta: datePublished
    }
    internal {
      contentFilePath
    }
  }
`;

export async function getAllPosts(graphql) {
  const result = await graphql(`
    query AllPostsQuery {
      allMdx(sort: { frontmatter: { datePublished: DESC } }) {
        ${postQuery}
      }
    }
  `);

  return processQueryResult(result);
}

export async function getAllPostsByKeyword(graphql, keyword) {
  const result = await graphql(
    `
      query PostsByKeywordQuery($keyword: String) {
        allMdx(
          sort: { frontmatter: { datePublished: DESC } }
          filter: { frontmatter: { keywords: { in: [$keyword] } } }
        ) {
          ${postQuery}
        }
      }
    `,
    {
      keyword,
    },
  );

  return processQueryResult(result);
}
