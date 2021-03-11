import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html
      lang="en"
      dir="ltr"
      vocab="http://schema.org"
      itemType="http://schema.org/WebPage"
      itemScope
      {...props.htmlAttributes}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, minimal-ui"
        />

        {props.headComponents}
      </head>

      <body {...props.bodyAttributes} className="light">
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
