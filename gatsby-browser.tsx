import "normalize.css";
import "./src/styles/reset.scss";
import "./src/styles/global.scss";
import "./src/styles/helpers.scss";

import { ThemeProvider } from "./src/hooks/useTheme";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  if (location?.pathname !== prevLocation?.pathname) {
    document.documentElement.classList.remove("smooth-scroll");
  }
};
