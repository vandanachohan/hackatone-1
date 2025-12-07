import React from 'react';

const BlogSection = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      description: 'Learn the fundamentals of Next.js and how to build modern web applications.',
      image: '/api/placeholder/400/250',
      link: '/blog/nextjs-intro'
    },
    {
      id: 2,
      title: 'Mastering TailwindCSS',
      description: 'Advanced techniques and best practices for building responsive UIs with TailwindCSS.',
      image: '/api/placeholder/400/250',
      link: '/blog/tailwind-mastery'
    },
    {
      id: 3,
      title: 'React Performance Optimization',
      description: 'Essential techniques to make your React applications faster and more efficient.',
      image: '/api/placeholder/400/250',
      link: '/blog/react-performance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a 
                  href={post.link} 
                  className="text-[#332a52] font-semibold hover:underline flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;