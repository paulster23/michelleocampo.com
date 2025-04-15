import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Wedding Day Coverage",
      description: "Comprehensive photography from getting ready to the last dance, ensuring every special moment is captured.",
      price: "Starting at $2,800"
    },
    {
      title: "Engagement Sessions",
      description: "A relaxed photo session to capture your connection before the big day, perfect for save-the-dates.",
      price: "Starting at $500"
    },
    {
      title: "Elopements",
      description: "Intimate coverage for couples choosing a more personal celebration of their love story.",
      price: "Starting at $1,800"
    },
    {
      title: "Destination Weddings",
      description: "Capturing your special day in beautiful locations worldwide, with travel arrangements included.",
      price: "Custom pricing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tailored photography packages to suit your unique wedding day needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-light mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-800 font-medium">{service.price}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">All packages include high-resolution digital images, an online gallery, and print release.</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300"
          >
            Request Pricing Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;