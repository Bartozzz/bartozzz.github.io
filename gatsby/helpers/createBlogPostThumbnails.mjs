import nodeHtmlToImage from "node-html-to-image";

import { mapSlugToImageName } from "./mapSlugToImageName.mjs";

const html = `
  <html>
    <head>
      <style>
        :root {
          --imgWidth: {{imgWidth}};
          --imgHeight: {{imgHeight}};

          --vr-unit: 0.8rem;
          --vr-fs: calc(var(--vr-unit) * 2);
          --vr-lh: calc(var(--vr-unit) * 3);
        }

        * {
          box-sizing: border-box;
        }

        body,
        html {
          margin: 0;
        }

        html {
          font-size: 62.5%;
        }

        body {
          width: var(--imgWidth);
          height: var(--imgHeight);
          font-size: var(--vr-fs);
          background-color: #121212;
        }

        .container {
          display: flex;
          flex-flow: column;
          justify-content: space-between;

          width: 100%;
          height: 100%;

          padding-block: calc(var(--vr-unit) * 12);
          padding-inline:  calc(var(--vr-unit) * 14);
        }

        .text {
          margin-bottom: calc(var(--vr-unit) * 3);

          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
          font-size: calc(var(--vr-fs) * 3);
          line-height: calc(var(--vr-lh) * 2);
          color: #9e9e9e;
        }

        .title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-weight: 700;
          font-size: calc(var(--vr-fs) * 5);
          line-height: calc(var(--vr-lh) * 5);
          text-transform: uppercase;
          color: #e8e8e8;
        }

        .author {
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
          font-size: calc(var(--vr-fs) * 1.5);
          line-height: calc(var(--vr-lh) * 2);
          color: #9e9e9e;
        }
        .domain {
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
          font-size: calc(var(--vr-fs) * 1.5);
          line-height: calc(var(--vr-lh) * 2);
          color: #9e9e9e;
        }
      </style>
    </head>
    <body>
      <div class='container'>
        <div>
          <div class='text'>Check out</div>
          <div class='title'>{{title}}</div>
        </div>
        <div>
          <div class='author'>Bartosz Łaniewski</div>
          <div class='domain'>{{link}}</div>
        </div>
      </div>
    </body>
  </html>
`;

function buildOutputPath(slug) {
  return `./static/thumbnails/${mapSlugToImageName(slug)}.png`;
}

function buildLinkPath(slug) {
  // Remove trailing slash:
  return `laniewski.me${slug.replace(/\/$/, "")}`;
}

export async function createBlogPostThumbnails(posts) {
  posts.forEach((post) => {
    console.info(
      `Creating blog post thumbnail at ${buildOutputPath(post.slug)}`,
    );
  });

  return nodeHtmlToImage({
    html,
    content: posts.map((post) => ({
      output: buildOutputPath(post.slug),
      link: buildLinkPath(post.slug),
      title: post.title,
      imgWidth: 1600,
      imgHeight: 900,
    })),
  });
}
