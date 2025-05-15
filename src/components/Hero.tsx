import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/444copy.jpg')",
        }}
        role="img"
        aria-label="Featured wedding photograph"
      ></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-sans font-light tracking-wider mb-8">
          Brooklyn Wedding Photographer
          <span className="block text-3xl md:text-4xl mt-2">Michelle Ocampo Photography</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Capturing authentic moments and creating timeless memories
        </p>
        <a
          href="#contact"
          className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;