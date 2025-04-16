import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <img 
                src="https://github.com/paulster23/michelleocampo.com/blob/main/dist/images/michelleocampo.jpg?raw=true&&auto=format&fit=crop&w=1000&q=80" 
                alt="Michelle Ocampo" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light mb-6">About Michelle</h2>
            <p className="text-gray-600 mb-6">
My style combines spontaneity, portraiture and lots of fun. I'm always searching for fleeting moments that happen between people. It’s amazing how a photograph can make you feel, transporting you back to that exact moment in time.  I try to blend in to weddings by interacting with guests and feeding off the energy of the celebration.             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
