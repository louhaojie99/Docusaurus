// @ts-check
// 注意:类型注释允许类型检查和 IDEs 自动完成

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HJ BLOG",
  tagline: "☕ 实事求是.",
  url: "https://louhaojie99.github.io",
  baseUrl: "/blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub页面部署配置.
  organizationName: "louhaojie99",
  projectName: "blog",
  trailingSlash: false,

  // 国际化配置
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/louhaojie99/docs/tree/gh-pages/docs",
          breadcrumbs: true, // 面包屑
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/louhaojie99/blog/tree/gh-pages/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: "blog, 娄豪杰, 娄豪杰个人博客, 娄豪杰个人网站",
        },
      ],
      navbar: {
        title: "HJ Blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "right",
            label: "首页",
            to: "/",
          },
          {
            position: "right",
            label: "成长记录",
            type: "doc",
            docId: "hello",
          },
          {
            position: "right",
            label: "GitHub",
            href: "https://github.com/louhaojie99/",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: "一个收藏回忆分享技术的地方",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
