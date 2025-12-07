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
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'f2d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6ec'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '59c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '586'),
            routes: [
              {
                path: '/docs/book',
                component: ComponentCreator('/docs/book', 'cca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch01-introduction/1.1-overview',
                component: ComponentCreator('/docs/ch01-introduction/1.1-overview', '916'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch01-introduction/1.2-history',
                component: ComponentCreator('/docs/ch01-introduction/1.2-history', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch02-foundations/2.1-introduction',
                component: ComponentCreator('/docs/ch02-foundations/2.1-introduction', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch03-sensors/3.1-sensor-types',
                component: ComponentCreator('/docs/ch03-sensors/3.1-sensor-types', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch04-actuators/4.1-actuator-types',
                component: ComponentCreator('/docs/ch04-actuators/4.1-actuator-types', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch05-control-systems/5.1-control-theory',
                component: ComponentCreator('/docs/ch05-control-systems/5.1-control-theory', 'd5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch06-machine-learning/6.1-ml-for-robotics',
                component: ComponentCreator('/docs/ch06-machine-learning/6.1-ml-for-robotics', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch07-computer-vision/7.1-vision-systems',
                component: ComponentCreator('/docs/ch07-computer-vision/7.1-vision-systems', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch08-natural-language-processing/8.1-nlp-in-robotics',
                component: ComponentCreator('/docs/ch08-natural-language-processing/8.1-nlp-in-robotics', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch09-motion-planning/9.1-motion-planning-algorithms',
                component: ComponentCreator('/docs/ch09-motion-planning/9.1-motion-planning-algorithms', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch10-path-planning/10.1-path-planning-algorithms',
                component: ComponentCreator('/docs/ch10-path-planning/10.1-path-planning-algorithms', '528'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch11-human-robot-interaction/11.1-hri-principles',
                component: ComponentCreator('/docs/ch11-human-robot-interaction/11.1-hri-principles', 'de2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch12-robotics-software/12.1-robotics-frameworks',
                component: ComponentCreator('/docs/ch12-robotics-software/12.1-robotics-frameworks', 'c94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch13-robotics-hardware/13.1-robotics-hardware-components',
                component: ComponentCreator('/docs/ch13-robotics-hardware/13.1-robotics-hardware-components', '4cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch14-manufacturing-robotics/14.1-industrial-robotics',
                component: ComponentCreator('/docs/ch14-manufacturing-robotics/14.1-industrial-robotics', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch15-healthcare-robotics/15.1-medical-robotics',
                component: ComponentCreator('/docs/ch15-healthcare-robotics/15.1-medical-robotics', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch16-agricultural-robotics/16.1-agricultural-robotics',
                component: ComponentCreator('/docs/ch16-agricultural-robotics/16.1-agricultural-robotics', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch17-autonomous-vehicles/17.1-autonomous-vehicles',
                component: ComponentCreator('/docs/ch17-autonomous-vehicles/17.1-autonomous-vehicles', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch18-ai-safety/18.1-ai-safety-considerations',
                component: ComponentCreator('/docs/ch18-ai-safety/18.1-ai-safety-considerations', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch19-future-of-robotics/19.1-future-trends',
                component: ComponentCreator('/docs/ch19-future-of-robotics/19.1-future-trends', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ch20-conclusion/20.1-conclusion',
                component: ComponentCreator('/docs/ch20-conclusion/20.1-conclusion', '372'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '23f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction-to-physical-ai',
                component: ComponentCreator('/docs/introduction-to-physical-ai', '1e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '456'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '1d8'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'a5a'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '2fd'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '7e8'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '727'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'e54'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '888'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
