import Head from 'next/head';
import AIChatbot from '../components/AIChatbot';
import TextbookSidebar from '../components/TextbookSidebar';

export default function AITutorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AI Tutor for Physical AI & Humanoid Robotics</title>
        <meta name="description" content="Interactive AI tutor for Physical AI & Humanoid Robotics textbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Physical AI & Humanoid Robotics
          </h1>
          <p className="text-lg text-gray-600">
            Interactive AI Tutor - Learn with real-time assistance
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Textbook Sidebar - 40% width on large screens */}
          <div className="lg:w-2/5">
            <TextbookSidebar />
          </div>

          {/* Chat Interface - 60% width on large screens */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-lg shadow-lg p-1">
              <AIChatbot />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This interactive AI tutor helps you understand the concepts of Physical AI & Humanoid Robotics.
            Ask questions about any chapter or topic, and get step-by-step explanations with examples.
          </p>
        </div>
      </main>
    </div>
  );
}