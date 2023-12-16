import * as React from "react";

interface PostTimeToReadProps
  extends React.TimeHTMLAttributes<HTMLTimeElement> {
  value: number;
}

export function PostTimeToRead({ value, ...props }: PostTimeToReadProps) {
  // Assuming it's in minutes - hopefully I won't write articles that take hours
  // to read:
  const timeToReadRounded = Math.ceil(value);
  const timeToReadMeta = `PT${timeToReadRounded}M`;

  return (
    <time {...props} itemProp="timeRequired" dateTime={timeToReadMeta}>
      {timeToReadRounded} min read
    </time>
  );
}
