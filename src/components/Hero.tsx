import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./dist/images/444copy.jpg')",
        }}
      ></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-sans font-light tracking-wider mb-8">
          Michelle Ocampo Photography
        </h1>
        <a
          href="#contact"
          className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  );
};

export default Hero;
