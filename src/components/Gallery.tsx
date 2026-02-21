import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'weddings' | 'events'>('weddings');
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      lightboxRef.current?.focus();
    }
  }, [selectedImageIndex]);

  // Wedding gallery images
  const weddingImages = [
    {
      src: "/images/068copy.jpg",
      alt: "Elegant wedding ceremony at sunset with bride and groom exchanging vows",
    },
    {
      src: "/images/0097copy.jpg",
      alt: "Intimate moment between newlyweds during their first dance",
    },
    {
      src: "/images/0098copy.jpg",
      alt: "Candid celebration moment with wedding party",
    },
    {
      src: "/images/136copy.jpg",
      alt: "Romantic portrait of bride and groom in Brooklyn Bridge Park",
    },
    {
      src: "/images/378copy.jpg",
      alt: "Emotional father-daughter dance at reception",
    },
    {
      src: "/images/420copy.jpg",
      alt: "Detail shot of wedding rings and flowers",
    },
    {
      src: "/images/444copy.jpg",
      alt: "Bride getting ready with her bridesmaids",
    },
    {
      src: "/images/426copy.jpg",
      alt: "Couple's first look moment in Central Park",
    },
    {
      src: "/images/AdrianRyanIMG_5284.jpg",
      alt: "Romantic sunset portrait of newlyweds",
    }
  ];

  // Event gallery images
  const eventImages = [
    { src: "/images/068copy.jpg",             alt: "Event photograph" },
    { src: "/images/0097copy.jpg",            alt: "Event photograph" },
    { src: "/images/0098copy.jpg",            alt: "Event photograph" },
    { src: "/images/136copy.jpg",             alt: "Event photograph" },
    { src: "/images/378copy.jpg",             alt: "Event photograph" },
    { src: "/images/420copy.jpg",             alt: "Event photograph" },
    { src: "/images/444copy.jpg",             alt: "Event photograph" },
    { src: "/images/426copy.jpg",             alt: "Event photograph" },
    { src: "/images/AdrianRyanIMG_5284.jpg",  alt: "Event photograph" },
  ];

  const currentImages = activeTab === 'weddings' ? weddingImages : eventImages;

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + currentImages.length) % currentImages.length);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % currentImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light mb-4">Portfolio</h2>
          <p className="text-warm-gray max-w-2xl mx-auto">A glimpse into the beautiful moments I've had the privilege to capture.</p>
        </div>

        {/* Gallery Tabs — Events tab hidden until events portfolio is ready */}
        {false && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex space-x-8" role="group">
              <button
                type="button"
                className={`px-2 py-1 text-sm ${
                  activeTab === 'weddings'
                    ? 'font-bold border-b-2 border-primary text-charcoal'
                    : 'font-medium text-warm-gray hover:text-charcoal'
                } focus:outline-none transition-colors`}
                onClick={() => setActiveTab('weddings')}
              >
                Weddings
              </button>
              <button
                type="button"
                className={`px-2 py-1 text-sm ${
                  activeTab === 'events'
                    ? 'font-bold border-b-2 border-primary text-charcoal'
                    : 'font-medium text-warm-gray hover:text-charcoal'
                } focus:outline-none transition-colors`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer ${index === 0 || index === 5 ? 'featured' : ''}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label="Image gallery lightbox"
        >
          <button
            className="absolute top-4 right-4 text-cream hover:text-gold transition-colors"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close image viewer"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 p-2 rounded-full text-cream hover:bg-primary transition-colors"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 p-2 rounded-full text-cream hover:bg-primary transition-colors"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <img
            src={currentImages[selectedImageIndex].src}
            alt={currentImages[selectedImageIndex].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {selectedImageIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
