import path from "path";

import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Bartosz Łaniewski`,
    description: `Creative designer & developer based in Poland. Passionate about architecture and beautiful software.`,
    siteUrl: `https://laniewski.me/`, // keep the trailing /
    siteRepo: `https://github.com/Bartozzz/bartozzz.github.io`,
    contact: `hi@laniewski.me`,
    social: {
      GitHub: `https://github.com/Bartozzz`,
      Dribbble: `https://dribbble.com/bartozzz`,
      LinkedIn: `https://linkedin.com/in/bartozzz`,
      YouTube: `https://youtube.com/channel/UCIC1vaSJwSJ2sqKWC3wTTmQ`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./content`),
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./content/blog`),
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src/assets`),
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        remarkPlugins: [
          // See: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
          require("remark-slug"),
          require("remark-abbr"),
          require("remark-copy-linked-files"),
          // Needs ESM Support in Gatsby: https://github.com/gatsbyjs/gatsby/discussions/31599
          // require("remark-smartypants"),
          // require("remark-toc"),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          // TODO: migrate to custom component
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegenDelay: 60 * 60,
      },
    },
    `gatsby-plugin-dts-css-modules`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
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
              slug
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
              [`/${node.slug}`]: node.frontmatter,
            }),
            {}
          );

          return allSitePages.map((page) => ({
            ...page,
            ...mdxNodeMap[page.path],
          }));
        },
        serialize: ({ path, dateUpdated }) => {
          if (dateUpdated) {
            return { url: path, lastmod: dateUpdated };
          } else {
            return { url: path };
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => ({
                description: node.excerpt,
                title: node.frontmatter.title,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              }));
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Bartosz Łaniewski RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bartosz Łaniewski`,
        short_name: `Bart`,
        description: `Creative designer & developer.`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/favicon.svg`,
        legacy: false, // this will not add apple-touch-icon links to <head>
        background_color: `#ffffff`,
        theme_color: `#fc8c03`,
        theme_color_in_head: false,
      },
    },
  ],
};

export default config;
