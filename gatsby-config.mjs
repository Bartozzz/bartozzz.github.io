import path from "path";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkSmartypants from "remark-smartypants";

const config = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: "Bartosz Łaniewski",
    description:
      "Creative designer & developer based in Poland. Passionate about architecture and beautiful software.",
    siteUrl: "https://laniewski.me/", // keep the trailing /
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
          ],
        },
      },
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-json",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://laniewski.me/",
        stripQueryString: true,
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
  ],
};

export default config;
