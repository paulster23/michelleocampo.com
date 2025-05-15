import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const galleryImages = [
    {
      src: "/images/068copy.jpg",
      alt: "Elegant wedding ceremony at sunset with bride and groom exchanging vows",
      title: "Sunset Wedding Ceremony"
    },
    {
      src: "/images/0097copy.jpg",
      alt: "Intimate moment between newlyweds during their first dance",
      title: "First Dance"
    },
    {
      src: "/images/0098copy.jpg",
      alt: "Candid celebration moment with wedding party",
      title: "Wedding Party Celebration"
    },
    {
      src: "/images/136copy.jpg",
      alt: "Romantic portrait of bride and groom in Brooklyn Bridge Park",
      title: "Brooklyn Bridge Portrait"
    },
    {
      src: "/images/378copy.jpg",
      alt: "Emotional father-daughter dance at reception",
      title: "Father Daughter Dance"
    },
    {
      src: "/images/420copy.jpg",
      alt: "Detail shot of wedding rings and flowers",
      title: "Wedding Details"
    },
    {
      src: "/images/444copy.jpg",
      alt: "Bride getting ready with her bridesmaids",
      title: "Bridal Preparation"
    },
    {
      src: "/images/426copy.jpg",
      alt: "Couple's first look moment in Central Park",
      title: "First Look"
    },
    {
      src: "/images/AdrianRyanIMG_5284.jpg",
      alt: "Romantic sunset portrait of newlyweds",
      title: "Sunset Portrait"
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
          <h2 className="text-3xl font-light mb-4">Wedding Photography Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Elegant and authentic wedding photography capturing precious moments across New York City and worldwide.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <figure 
              key={index} 
              className="aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                title={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <figcaption className="sr-only">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label="Image gallery lightbox"
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
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
          
          <figure>
            <img 
              src={galleryImages[selectedImageIndex].src} 
              alt={galleryImages[selectedImageIndex].alt} 
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;