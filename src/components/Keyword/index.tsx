import "./index.scss";

import React from "react";

export function Keyword({ children }: React.PropsWithChildren<unknown>) {
  return <strong className="keyword">{children}</strong>;
}
