import React from 'react';

const TutorialsSection = () => {
  // Sample tutorial data
  const tutorials = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Complete tutorial covering React basics, components, props, state, and hooks.',
      link: '/tutorials/react-fundamentals'
    },
    {
      id: 2,
      title: 'Next.js Routing',
      description: 'Learn how to set up routing in Next.js with pages and API routes.',
      link: '/tutorials/nextjs-routing'
    },
    {
      id: 3,
      title: 'TailwindCSS Styling',
      description: 'Step-by-step guide to styling your applications with TailwindCSS.',
      link: '/tutorials/tailwind-styling'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div 
              key={tutorial.id} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">{tutorial.title}</h3>
              <p className="text-gray-600 mb-4">{tutorial.description}</p>
              <a 
                href={tutorial.link} 
                className="inline-flex items-center text-[#332a52] font-semibold hover:underline"
              >
                Start Tutorial
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;