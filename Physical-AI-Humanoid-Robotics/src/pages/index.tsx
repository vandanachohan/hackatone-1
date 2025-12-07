import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '../components/HomepageFeatures';
import '../css/custom.css'; // Global CSS (hero, cards, theme, contact)

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Features data for the main features section (defined in HomepageFeatures component)

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Physical AI',
      description: 'Learn the fundamentals of Physical AI and its applications in robotics.',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11f06a1e72?auto=format&fit=crop&w=600',
    },
    {
      id: 2,
      title: 'Humanoid Robot Control Systems',
      description: 'Master the control systems needed for humanoid robot locomotion and interaction.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=600',
    },
    {
      id: 3,
      title: 'ROS for Robotics Development',
      description: 'Step-by-step guide to using ROS for building robotics applications.',
      image: 'https://images.unsplash.com/photo-1639762681057-4a4a5cb647cc?auto=format&fit=crop&w=600',
    },
  ];

  const tutorials = [
    { id: 1, title: 'Python for Robotics', description: 'Master Python basics needed for AI and robotics applications.' },
    { id: 2, title: 'JavaScript for IoT', description: 'Deep dive into JavaScript for IoT and embedded systems.' },
    { id: 3, title: 'AI Development Guide', description: 'Learn AI development with practical examples and projects.' },
  ];

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A complete textbook for learning Physical AI, robotics, and the future of intelligent systems.">

      {/* Hero Section */}
      <header className="heroBanner">
        <div className="container">
          <Heading as="h1" className="title">{siteConfig.title}</Heading>
          <p className="subtitle">Physical AI & Humanoid Robotics Textbook</p>
          <p className="description">
            The future of work depends on powerful collaborations between humans,
            AI agents, and humanoid robots. This book prepares learners with the
            foundational skills needed for this next era.
          </p>
          <div className="buttons">
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Start Learning 🚀
            </Link>
            <Link className="button button--primary button--lg" to="/docs/category/tutorials">
              View Tutorials
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <HomepageFeatures />

      {/* Blog Section */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle text--center">Latest Blog Posts</h2>
          <div className="cardsContainer">
            {blogPosts.map(post => (
              <div key={post.id} className="card">
                <div className="blogImage" style={{ backgroundImage: `url(${post.image})` }} role="img" aria-label={post.title} />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link className="button button--primary button--block" to={`/blog/post-${post.id}`}>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="section section--dark">
        <div className="container">
          <h2 className="sectionTitle text--center">Programming Tutorials</h2>
          <p className="sectionText text--center">
            Master the programming languages and tools essential for robotics and AI development.
          </p>
          <div className="cardsContainer">
            {tutorials.map(t => (
              <div key={t.id} className="card">
                <div className="cardIcon">
                  <span className="icon">📚</span>
                </div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <Link className="button button--primary button--block" to={`/docs/tutorials/${t.id}`}>
                  Start Tutorial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text--center">
          <h2 className="sectionTitle">Ready to Start Your Journey?</h2>
          <p className="sectionText">
            Join thousands of students and professionals learning Physical AI and Robotics.
          </p>
          <div className="buttons">
            <Link className="button button--primary button--lg" to="/docs/intro">
              Begin Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section--contact">
        <div className="container">
          <h2 className="sectionTitle text--center">Connect With Us</h2>
          <div className="contactBox">
            <div className="contactGrid">
              <div className="contactItem">
                <h3>Email</h3>
                <p><a href="mailto:vandanapython@gmail.com">vandanapython@gmail.com</a></p>
              </div>
              <div className="contactItem">
                <h3>YouTube</h3>
                <p><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">My Channel</a></p>
              </div>
              <div className="contactItem">
                <h3>GitHub</h3>
                <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">My Projects</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
