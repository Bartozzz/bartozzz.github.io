import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" dir="ltr" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="prefetch" href="/discussion-dark.css" as="style" />
        <link rel="prefetch" href="/discussion-light.css" as="style" />

        <meta name="theme-color" content="#fc8c03" />

        {props.headComponents}
      </head>

      <body {...props.bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__theme = "light";
              window.__onThemeChange = function onThemeChange() {};

              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;

                var themeColor = newTheme === "light" ? "#fc8c03" : "#7742bd";
                document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);

                window.__onThemeChange(newTheme);
              }

              window.__setPreferredTheme = function setPreferredTheme(newTheme) {
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
              }

              var preferredTheme = localStorage.getItem('theme');
              var prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

              prefersDarkQuery.addListener(function (event) {
                window.__setPreferredTheme(event.matches ? 'dark' : 'light')
              });

              setTheme(preferredTheme || (prefersDarkQuery.matches ? 'dark' : 'light'));
            `,
          }}
        />

        {props.preBodyComponents}

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
