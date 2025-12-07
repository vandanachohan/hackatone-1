import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-[#332a52] text-white py-20 md:py-32"
      style={{ backgroundColor: '#332a52' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Professional Subtitle
          </p>
          <p className="text-lg text-gray-300 mb-10">
            Introductory paragraph about yourself and your expertise in your field. 
            This is where you can highlight your unique value proposition.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#332a52] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#332a52] transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;