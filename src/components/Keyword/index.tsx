import * as css from "./index.module.scss";

interface Props {
  children: string;
  outlined?: boolean;
  wide?: boolean;
}

export function Keyword({ children, outlined, wide }: Props) {
  return (
    <strong
      className={`${css.keyword} ${outlined ? css.keyword__outlined : ""} ${
        wide ? css.keyword__wide : ""
      }`}
      title={`Topic: ${children}`}
    >
      {children}
    </strong>
  );
}
