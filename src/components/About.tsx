import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Michelle Ocampo" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light mb-6">About Michelle</h2>
            <p className="text-gray-600 mb-6">
              When I'm not behind the camera, you can find me exploring new hiking trails, experimenting with film photography, or enjoying a cup of coffee at my favorite local café.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;