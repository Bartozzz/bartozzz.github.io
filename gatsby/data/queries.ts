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
      allMdx(sort: { fields: [frontmatter___datePublished], order: DESC }) {
        totalCount
        nodes {
          id
          excerpt
          body
          timeToRead
          headings {
            depth
            value
          }
          fields {
            slug
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
            embeddedImagesLocal {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          embeddedImagesRemote {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
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
          sort: { fields: [frontmatter___datePublished], order: DESC }
          filter: { frontmatter: { keywords: { in: [$keyword] } } }
        ) {
          totalCount
          nodes {
            id
            excerpt
            body
            timeToRead
            headings {
              depth
              value
            }
            fields {
              slug
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
              embeddedImagesLocal {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            embeddedImagesRemote {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
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