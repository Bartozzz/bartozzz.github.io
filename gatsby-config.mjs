import path from "path";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkSmartypants from "remark-smartypants";

const config = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: "Bartosz Łaniewski",
    description:
      "Creative designer & developer based in Poland. Passionate about architecture and beautiful software.",
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
            remarkSmartypants,
          ],
          rehypePlugins: [
            // See: https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeExternalLinks,
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
          const mdxNodeMap = allMdxNodes.reduce(
            (acc, node) => ({
              ...acc,
              [node.fields.slug]: node.frontmatter,
            }),
            {},
          );

          return allSitePages.map((page) => ({
            ...page,
            ...mdxNodeMap[page.path],
          }));
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
