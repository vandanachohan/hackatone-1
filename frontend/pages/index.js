/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import TutorialsSection from '../components/TutorialsSection';
import ContactSection from '../components/ContactSection';
import HomepageChecker from '../components/HomepageChecker';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Personal Book Website</title>
        <meta name="description" content="A personal book website with blogs, tutorials and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomepageChecker />
        <HeroSection />
        <BlogSection />
        <TutorialsSection />
        <ContactSection />
      </main>
    </div>
  );
}