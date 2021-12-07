import * as css from "./index.module.scss";

import * as React from "react";
import { PageHeader } from "../PageHeader";
import { PageFooter } from "../PageFooter";

export function Layout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <>
      <a className={`${css.skip} visually-hidden`} href="#content">
        Skip to main content
      </a>

      <PageHeader />

      {children}

      <PageFooter />
    </>
  );
}
