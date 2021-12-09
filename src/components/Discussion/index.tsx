import "./index.scss";

import * as React from "react";
import { useTheme } from "../../hooks/useTheme";

function sendGiscusMessage<T>(message: T) {
  const iframe = document.querySelector<HTMLIFrameElement>(
    "iframe.giscus-frame"
  );

  if (iframe) {
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }
}

function createGiscusTag({ theme }: { theme: Theme }) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const lightThemePath = `${origin}/discussion-light.css`;
  const darkThemePath = `${origin}/discussion-dark.css`;
  const initialTheme = theme === "dark" ? darkThemePath : lightThemePath;

  return `
    <script src="https://giscus.app/client.js"
      data-repo="Bartozzz/bartozzz.github.io"
      data-repo-id="MDEwOlJlcG9zaXRvcnkyNDk1MjY5MQ=="
      data-category="Discussion"
      data-category-id="DIC_kwDOAXy_c84CAHzq"
      data-mapping="pathname"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-theme=${initialTheme}
      data-lang="en"
      crossorigin="anonymous"
      async>
    </script>
  `;
}

export function Discussion() {
  const divRef = React.useRef<HTMLDivElement>();
  const [theme] = useTheme();
  const hasTheme = theme !== null;

  React.useLayoutEffect(() => {
    const div = divRef.current;

    if (!div || !hasTheme) {
      return;
    }

    console.debug("Rendering Giscus");

    const scriptTag = createGiscusTag({ theme });
    const slotHtml = document.createRange().createContextualFragment(scriptTag);

    div?.appendChild(slotHtml);

    return () => {
      div.innerHTML = "";
    };
  }, [hasTheme]);

  React.useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const lightThemePath = `${origin}/discussion-light.css`;
    const darkThemePath = `${origin}/discussion-dark.css`;
    const newTheme = theme === "dark" ? darkThemePath : lightThemePath;

    sendGiscusMessage({
      setConfig: {
        theme: newTheme,
      },
    });
  }, [theme]);

  return (
    <>
      <div className={`comments--${theme}`} ref={divRef}></div>
    </>
  );
}
