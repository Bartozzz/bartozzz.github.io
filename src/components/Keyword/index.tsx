import * as css from "./index.module.scss";

interface Props {
  children: string;
}

export function Keyword({ children }: Props) {
  return (
    <strong className={css.keyword} title={`Topic: ${children}`}>
      {children}
    </strong>
  );
}
