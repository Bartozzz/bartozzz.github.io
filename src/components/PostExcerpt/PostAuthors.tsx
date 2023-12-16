import * as React from "react";

interface PostAuthorsProps extends React.HTMLAttributes<HTMLSpanElement> {
  data: string[];
}

export function PostAuthors({ data, ...props }: PostAuthorsProps) {
  return (
    <span {...props}>
      {"By "}
      {data.map((author, index) => (
        <React.Fragment key={author}>
          <span
            itemScope
            itemProp="author"
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{author}</span>
          </span>

          {index < data.length - 1 ? " and " : ""}
        </React.Fragment>
      ))}
    </span>
  );
}
