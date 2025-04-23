import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  // Gallery images using local files
  const galleryImages = [
    {
      src: "/images/068copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/0097copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/0098copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/136copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/378copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/420copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/444copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/426copy.jpg",
      alt: "Wedding photograph"
    },
    {
      src: "/images/AdrianRyanIMG_5284.jpg",
      alt: "Wedding photograph"
    }
  ];

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into the beautiful moments I've had the privilege to capture.</p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <img 
            src={galleryImages[selectedImageIndex].src} 
            alt={galleryImages[selectedImageIndex].alt} 
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
