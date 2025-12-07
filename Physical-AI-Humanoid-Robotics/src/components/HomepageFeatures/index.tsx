import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Feature Items
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI Foundations',
    Svg: require('@site/static/img/robot_ai.svg').default,
    description: (
      <>
        Learn the core principles behind Physical AI — intelligent systems that
        interact with and control physical robots in the real world.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics Engineering',
    Svg: require('@site/static/img/humanoid_robot.svg').default,
    description: (
      <>
        Explore humanoid robot design, locomotion, sensors, embedded systems,
        and modern robotics toolchains including ROS.
      </>
    ),
  },
  {
    title: 'Future of Work Skills',
    Svg: require('@site/static/img/ai_future.svg').default,
    description: (
      <>
        Prepare for a world where humans collaborate with AI agents and robots.
        Build the skills needed for the next-generation workforce.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Svg className={styles.featureSvg} role="img" aria-label={title} />
      <Heading as="h3" style={{ fontWeight: 700, textAlign: 'center', marginTop: '1rem' }}>
        {title}
      </Heading>
      <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
