import * as css from "./index.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: string;
  outlined?: boolean;
  wide?: boolean;
}

export function Keyword({
  children,
  outlined,
  wide,
  ...detailedHTMLProps
}: Props) {
  return (
    <strong
      className={`${css.keyword} ${outlined ? css.keyword__outlined : ""} ${
        wide ? css.keyword__wide : ""
      }`}
      title={`Topic: ${children}`}
      {...detailedHTMLProps}
    >
      {children}
    </strong>
  );
}
