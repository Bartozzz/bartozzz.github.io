import path from "path";

import rehypeSlug from "rehype-slug";

const config = {
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        mdxOptions: {
          rehypePlugins: [
            // See: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
            rehypeSlug,
          ],
        },
        gatsbyRemarkPlugins: [
          // TODO: migrate to custom component or https://codehike.org/
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
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
