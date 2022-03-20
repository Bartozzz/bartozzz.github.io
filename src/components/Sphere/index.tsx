import * as css from "./index.module.scss";

interface Props {
  size?: number;
  className?: string;
}

export function Sphere({ className = "", size = 200 }: Props) {
  return (
    <div
      className={`${className} ${css.sphere}`}
      style={{ width: size, height: size }}
    />
  );
}
