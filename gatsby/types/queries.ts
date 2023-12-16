export interface TableOfContents {
  items?: TableOfContentItem[];
}

export interface TableOfContentItem extends TableOfContents {
  url: string;
  title: string;
}

export interface BlogPost {
  excerpt: string;
  tableOfContents: TableOfContents;
  fields: {
    slug: string;
    timeToRead: {
      minutes: number;
      words: number;
    };
  };
  frontmatter: {
    title: string;
    authors: string[];
    language: string;
    keywords: string[];
    description: string;
    dateCreated: string;
    dateCreatedMeta: string;
    dateUpdated: string;
    dateUpdatedMeta: string;
    datePublished: string;
    datePublishedMeta: string;
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
