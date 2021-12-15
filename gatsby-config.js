module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Bartosz Łaniewski`,
    description: `Creative designer & developer based in Poland. Passionate about architecture and beautiful software.`,
    siteUrl: `https://laniewski.me/`,
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
    `gatsby-plugin-sitemap`,
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
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        remarkPlugins: [
          // See: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
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
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  title: node.frontmatter.title,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
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
    {
      resolve: `gatsby-plugin-minify-html`,
    },
  ],
};
