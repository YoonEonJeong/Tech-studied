// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  // tagline: 'Dinosaurs are cool',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YoonEonJeong', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/atchlogo.png',
      navbar: {
        title: '윤언정 사원',
        logo: {
          alt: 'A-Tech Logo',
          src: 'img/atchlogo.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '주차별 업무 일지',
          }
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Company',
            items: [
              {
                label: 'A-TECH',
                to: 'https://atech1221.com/',
              },
              {
                label: 'News',
                to: 'http://newseconomy.kr/news/view.php?no=5900',
              },
              {
                label: 'Blog',
                to: 'https://m.blog.naver.com/atech_official?tab=1&trackingCode=blog_search_mobile',
              },
              {
                label: 'Solution',
                to: 'http://smartcitysolutionmarket.com/scsm/cmpny/slutnCmpnyView.do;jsessionid=3011D2507DF057E0780049B7364D7E65?menuNo=17&searchStartUpAt=N&cmpnyId=CMPNY_00000000000310',
              },
              {
                label: 'Recruit',
                to: 'https://www.saramin.co.kr/zf_user/company-info/view/csn/WXJndCt1YVVsQXo1WUIrNWk4RW9iZz09/company_nm/(%EC%A3%BC)%EC%97%90%EC%9D%B4%ED%85%8C%ED%81%AC'
              }
            ],
          },
          {
            title: 'References',
            items: [
              {
                label:  '.\static\img\favicon.ico (official) ',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'Docusaurus (GitHub) ',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'About Associate',
            items: [
              {
                label: 'Notion',
                to: 'https://www.notion.so/396695c239ed4eb39ece11afd2eb0658?v=7836f642fdb943358edbeb11df1dc217',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/YoonEonJeong/Docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ina Yoon(YEJ), A-TECH COMPANY. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
