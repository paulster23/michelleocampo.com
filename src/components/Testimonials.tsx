import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Michelle has an incredible talent for capturing emotions. Our wedding photos tell the story of our day in the most beautiful way possible.",
      name: "Sarah & James",
      wedding: "May 2024"
    },
    {
      quote: "Working with Michelle was the best decision we made for our wedding. She made us feel comfortable and the photos exceeded our expectations.",
      name: "Elena & Michael",
      wedding: "October 2023"
    },
    {
      quote: "Not only is Michelle an amazing photographer, but she's also a calming presence on what can be a stressful day. She captured moments we didn't even know happened!",
      name: "David & Thomas",
      wedding: "July 2023"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Kind Words</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What couples are saying about their experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.wedding}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;