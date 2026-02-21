import React from 'react';

const Hero = () => {
  return (
<<<<<<< HEAD
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
=======
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
>>>>>>> add-gallery
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/444copy.jpg')",
        }}
        role="img"
        aria-label="Featured wedding photograph"
      ></div>
<<<<<<< HEAD
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-sans font-light tracking-wider mb-8">
          <span className="block text-3xl md:text-4xl mt-2">Michelle Ocampo Photography</span>
        </h1>

        <a
          href="#contact"
          className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          Book a Consultation
        </a>
=======
      <div className="relative h-full flex items-end justify-start px-6 pb-12 md:px-12 md:pb-20 z-20">
        <div className="flex flex-col items-start">
          <hr className="w-12 border-gold mb-6" />
          <h1 className="text-5xl md:text-7xl font-heading font-light text-cream tracking-tighter mb-8">
            Michelle Ocampo Photography
          </h1>
          <a
            href="#contact"
            className="bg-primary text-cream px-12 py-4 font-sans text-sm tracking-widest uppercase hover:bg-primary/80 transition-all duration-300"
          >
            Book a Consultation
          </a>
        </div>
>>>>>>> add-gallery
      </div>
    </section>
  );
};

export default Hero;