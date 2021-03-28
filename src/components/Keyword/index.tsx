import * as css from "./index.module.scss";

import React from "react";

export function Keyword({ children }: React.PropsWithChildren<unknown>) {
  return <strong className={css.keyword}>{children}</strong>;
}
