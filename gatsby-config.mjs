import path from "path";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkSmartypants from "remark-smartypants";

const config = {
  jsxRuntime: "automatic",
  siteMetadata: {
    siteUrl: "https://laniewski.me",
    siteRepo: "https://github.com/Bartozzz/bartozzz.github.io",
    contact: "hi@laniewski.me",
    social: {
      GitHub: "https://github.com/Bartozzz",
      Dribbble: "https://dribbble.com/bartozzz",
      LinkedIn: "https://linkedin.com/in/bartozzz/",
      YouTube: "https://www.youtube.com/@bartosz.laniewski",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve("./content"),
        name: "content",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        mdxOptions: {
          remarkPlugins: [
            // See: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
            remarkMath,
            remarkSmartypants,
          ],
          rehypePlugins: [
            // See: https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins
            [rehypeKatex, { strict: "ignore" }],
            rehypePrism,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "append",
                properties: (node) => ({
                  className: ["heading-link"], // Add custom class if needed
                  ariaLabel: `Permalink to "${node.children.map((child) => child.value || "").join("")}"`, // Extract heading text dynamically
                }),
                content: () => ({
                  type: "element",
                  tagName: "svg",
                  // https://primer.style/foundations/icons/link-16
                  properties: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    "aria-hidden": "true",
                  },
                  children: [
                    {
                      type: "element",
                      tagName: "path",
                      properties: {
                        d: "m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z",
                      },
                    },
                  ],
                }),
              },
            ],
            [
              rehypeExternalLinks,
              {
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                // Exclude links to my own website (subdomains):
                test: (node) =>
                  !node.properties?.href?.includes("laniewski.me"),
              },
            ],
          ],
        },
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-transformer-yaml",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMdx {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  dateUpdated
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allSitePages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          const blogPostsPages = allMdxNodes.reduce(
            (acc, node) => ({
              ...acc,
              [node.fields.slug]: node.frontmatter,
            }),
            {},
          );

          const externalPages = [
            { path: "https://slowo.laniewski.me/" },
            { path: "https://make0.laniewski.me/" },
            { path: "https://filler.laniewski.me/" },
            { path: "https://stacker.laniewski.me/" },
            { path: "https://tiltcopters.laniewski.me/" },
          ];

          const internalPages = allSitePages.map((page) => ({
            ...page,
            ...blogPostsPages[page.path],
          }));

          return [...internalPages, ...externalPages];
        },
        serialize: ({ path, dateUpdated }) => {
          if (dateUpdated) {
            return {
              url: path,
              lastmod: dateUpdated,
              priority: 0.7,
              changefreq: "daily",
            };
          } else {
            return {
              url: path,
              priority: 0.5,
              changefreq: "daily",
            };
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Bartosz Łaniewski",
        short_name: "Bart",
        description: "Creative designer & developer.",
        start_url: "/",
        display: "standalone",
        icon: "src/assets/favicon.svg",
        legacy: false, // this will not add apple-touch-icon links to <head>
        background_color: "#ffffff",
        theme_color: "#fc8c03",
        theme_color_in_head: false, // This will avoid adding theme-color meta tag
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://laniewski.us14.list-manage.com/subscribe/post?u=bdf52b20921d687fdf3435ba2&amp;id=8ce23f66dd&amp;f_id=00d0c2e1f0",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-N3PHFLJDNK"],
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    // Make sure to put last in the array:
    "gatsby-plugin-meta-redirect",
  ],
};

export default config;
