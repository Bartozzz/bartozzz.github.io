import * as css from "./index.module.scss";

import * as React from "react";

interface Props {
  as?: string | React.ComponentType<unknown>;
  type?: "success" | "failure" | "warning" | "info";
}

export function Alert({
  children,
  as = "aside",
  type = "info",
  ...props
}: React.PropsWithChildren<Props>) {
  const Wrapper = (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  ) => React.createElement(as, props);

  return (
    <Wrapper {...props} className={`${css.alert} ${css[`alert__${type}`]}`}>
      {children}
    </Wrapper>
  );
}
