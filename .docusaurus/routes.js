import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'de3'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ab6'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '755'),
            routes: [
              {
                path: '/Archive/tutorial-basics/create-a-document',
                component: ComponentCreator('/Archive/tutorial-basics/create-a-document', '936'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-basics/styling-layout',
                component: ComponentCreator('/Archive/tutorial-basics/styling-layout', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-basics/swizzling',
                component: ComponentCreator('/Archive/tutorial-basics/swizzling', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-basics/typescript-support',
                component: ComponentCreator('/Archive/tutorial-basics/typescript-support', 'cb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-basics/using-plugins',
                component: ComponentCreator('/Archive/tutorial-basics/using-plugins', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Archive/tutorial-extras/manage-docs-versions', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Archive/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Archive/tutorial-extras/translate-your-site', '279'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---basics',
                component: ComponentCreator('/category/tutorial---basics', 'c11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---extras',
                component: ComponentCreator('/category/tutorial---extras', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tutorial---extras-1',
                component: ComponentCreator('/category/tutorial---extras-1', '04b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Guide/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Guide/tutorial-extras/manage-docs-versions', '285'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Guide/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Guide/tutorial-extras/translate-your-site', '7ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
