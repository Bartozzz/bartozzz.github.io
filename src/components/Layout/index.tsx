import * as css from "./index.module.scss";

import * as React from "react";

import { PageFooter } from "../PageFooter";
import { PageHeader } from "../PageHeader";

export function Layout({ children }: React.PropsWithChildren) {
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
