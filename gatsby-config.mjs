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
            rehypeAutolinkHeadings,
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
