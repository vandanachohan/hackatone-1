import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#332a52] text-white" style={{ backgroundColor: '#332a52' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-200 mb-10">
            Have questions or want to work together? Feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center">
            <a 
              href="mailto:your-email@example.com" 
              className="text-xl mb-8 hover:text-gray-300 transition duration-300"
            >
              your-email@example.com
            </a>
            
            <div className="flex space-x-6">
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
                aria-label="Twitter"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  T
                </span>
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
                aria-label="GitHub"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  GH
                </span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
                aria-label="LinkedIn"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  L
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;