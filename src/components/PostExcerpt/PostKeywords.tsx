import * as React from "react";

import { Link } from "gatsby";

import { mapKeywordToSlug } from "../../../gatsby/helpers/mapKeywordToSlug.mjs";

interface PostKeywordsProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: string[];
}

export function PostKeywords({ data, ...props }: PostKeywordsProps) {
  return data.map((keyword, index) => (
    <React.Fragment key={keyword}>
      <Link
        {...props}
        to={`/posts/${mapKeywordToSlug(keyword)}/`}
        title={`Category: ${keyword}`}
      >
        {keyword}
      </Link>
      {index !== data.length - 1 ? ", " : null}
    </React.Fragment>
  ));
}
