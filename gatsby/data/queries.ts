import { AllPostsQuery, PostsByKeywordQuery } from "../types/queries";

type QueryResult<TData> = {
  errors?: any;
  data?: TData;
};

type GraphqlType = <TData, TVariables = any>(
  query: string,
  variables?: TVariables
) => Promise<QueryResult<TData>>;

function processQueryResult<TData>(result: QueryResult<TData>) {
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

export async function getAllPosts(graphql: GraphqlType) {
  const result = await graphql<AllPostsQuery>(`
    query AllPostsQuery {
      allMdx(sort: { frontmatter: { datePublished: DESC } }) {
        totalCount
        nodes {
          id
          excerpt
          body
          tableOfContents(maxDepth: 3)
          fields {
            slug
            timeToRead {
              minutes
            }
          }
          frontmatter {
            dateCreated(formatString: "MMMM DD, YYYY")
            dateUpdated(formatString: "MMMM DD, YYYY")
            datePublished(formatString: "MMMM DD, YYYY")
            title
            authors
            language
            keywords
            description
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  return processQueryResult(result);
}

export async function getAllPostsByKeyword(
  graphql: GraphqlType,
  keyword: string
) {
  const result = await graphql<PostsByKeywordQuery>(
    `
      query PostsByKeywordQuery($keyword: String) {
        allMdx(
          sort: { frontmatter: { datePublished: DESC } }
          filter: { frontmatter: { keywords: { in: [$keyword] } } }
        ) {
          totalCount
          nodes {
            id
            excerpt
            body
            tableOfContents(maxDepth: 3)
            fields {
              slug
              timeToRead {
                minutes
              }
            }
            frontmatter {
              dateCreated(formatString: "MMMM DD, YYYY")
              dateUpdated(formatString: "MMMM DD, YYYY")
              datePublished(formatString: "MMMM DD, YYYY")
              title
              authors
              language
              keywords
              description
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
    {
      keyword,
    }
  );

  return processQueryResult(result);
}
