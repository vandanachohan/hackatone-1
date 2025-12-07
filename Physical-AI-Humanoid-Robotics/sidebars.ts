 import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome'
    },
    {
      type: 'doc',
      id: 'introduction-to-physical-ai',
      label: 'Introduction to Physical AI'
    },
    {
      type: 'doc',
      id: 'book',
      label: 'About This Book'
    },
    {
      type: 'category',
      label: 'Chapter 1: Overview and History',
      collapsed: false,
      items: [
        'ch01-introduction/1.1-overview',
        'ch01-introduction/1.2-history',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Foundations of Physical AI',
      collapsed: false,
      items: [
        'ch02-foundations/2.1-introduction',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Sensors in Robotics',
      collapsed: false,
      items: [
        'ch03-sensors/3.1-sensor-types',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Actuators in Robotics',
      collapsed: false,
      items: [
        'ch04-actuators/4.1-actuator-types',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Control Systems for Robotics',
      collapsed: false,
      items: [
        'ch05-control-systems/5.1-control-theory',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Machine Learning for Robotics',
      collapsed: false,
      items: [
        'ch06-machine-learning/6.1-ml-for-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 7: Computer Vision in Robotics',
      collapsed: false,
      items: [
        'ch07-computer-vision/7.1-vision-systems',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 8: Natural Language Processing in Robotics',
      collapsed: false,
      items: [
        'ch08-natural-language-processing/8.1-nlp-in-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 9: Motion Planning',
      collapsed: false,
      items: [
        'ch09-motion-planning/9.1-motion-planning-algorithms',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 10: Path Planning',
      collapsed: false,
      items: [
        'ch10-path-planning/10.1-path-planning-algorithms',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 11: Human-Robot Interaction',
      collapsed: false,
      items: [
        'ch11-human-robot-interaction/11.1-hri-principles',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 12: Robotics Software Frameworks',
      collapsed: false,
      items: [
        'ch12-robotics-software/12.1-robotics-frameworks',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 13: Robotics Hardware Components',
      collapsed: false,
      items: [
        'ch13-robotics-hardware/13.1-robotics-hardware-components',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 14: Manufacturing and Industrial Robotics',
      collapsed: false,
      items: [
        'ch14-manufacturing-robotics/14.1-industrial-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 15: Healthcare and Medical Robotics',
      collapsed: false,
      items: [
        'ch15-healthcare-robotics/15.1-medical-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 16: Agricultural Robotics',
      collapsed: false,
      items: [
        'ch16-agricultural-robotics/16.1-agricultural-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 17: Autonomous Vehicles',
      collapsed: false,
      items: [
        'ch17-autonomous-vehicles/17.1-autonomous-vehicles',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 18: AI Safety and Ethics',
      collapsed: false,
      items: [
        'ch18-ai-safety/18.1-ai-safety-considerations',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 19: Future of Robotics',
      collapsed: false,
      items: [
        'ch19-future-of-robotics/19.1-future-trends',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 20: Conclusion',
      collapsed: false,
      items: [
        'ch20-conclusion/20.1-conclusion',
      ],
    }
  ],
};

export default sidebars;
