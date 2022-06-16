export interface BlogPost {
  id: string;
  excerpt: string;
  body: string;
  timeToRead: number;
  headings: Array<{
    depth: number;
    value: string;
  }>;
  fields: {
    slug: string;
  };
  frontmatter: {
    dateCreated: string;
    dateUpdated: string;
    datePublished: string;
    title: string;
    authors: string[];
    language: string;
    keywords: string[];
    description: string;
  };
}

export interface AllPostsQuery {
  allMdx: {
    totalCount: number;
    nodes: BlogPost[];
  };
}

export interface PostsByKeywordQuery {
  allMdx: {
    totalCount: number;
    nodes: BlogPost[];
  };
}
