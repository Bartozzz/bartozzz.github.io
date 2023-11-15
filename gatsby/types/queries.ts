export interface TableOfContents {
  items?: TableOfContentItem[];
}

export interface TableOfContentItem extends TableOfContents {
  url: string;
  title: string;
}

export interface BlogPost {
  id: string;
  excerpt: string;
  tableOfContents: TableOfContents;
  fields: {
    slug: string;
    timeToRead?: {
      minutes: number;
    };
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
  internal: {
    contentFilePath: string;
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
