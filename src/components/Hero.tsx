import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/444copy.jpg')",
        }}
      ></div>
      <div className="relative h-full flex items-end justify-start px-12 pb-20 z-20">
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
      </div>
    </div>
  );
};

export default Hero;
