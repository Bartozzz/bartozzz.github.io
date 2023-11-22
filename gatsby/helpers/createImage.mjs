import nodeHtmlToImage from "node-html-to-image";

function generateHtml({ title, imgWidth = 1600, imgHeight = 900 }) {
  return `
    <html>
      <head>
        <style>
          :root {
            --imgWidth: ${imgWidth};
            --imgHeight: ${imgHeight};
          }

          * {
            box-sizing: border-box;
          }

          body,
          html {
            margin: 0;
          }

          body {
            width: var(--imgWidth);
            height: var(--imgHeight);
            background-color: #121212;
          }

          .container {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            padding: 80px;
          }

          .title {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
            font-size: 80px;
            text-align: center;
            text-transform: uppercase;
            color: #e8e8e8;

            margin-bottom: 50px;
          }

          .domain {
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
            font-size: 20px;
            color: #9e9e9e;
          }
        </style>
      </head>
      <body>
        <div class='container'>
          <div class='title'>${title}</div>
          <div class='domain'>https://laniewski.me</div>
        </div>
      </body>
    </html>
  `;
}

export function createImage({ title, output }) {
  const html = generateHtml({
    title,
  });

  return nodeHtmlToImage({ output, html });
}
