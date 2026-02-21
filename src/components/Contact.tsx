import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  // State for form data and messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // State for success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Clear messages after a timeout
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });
      if (response.ok) {
        setSuccessMessage("Thank you! I'll be in touch within 24 hours.");
        setFormData({ name: '', email: '', date: '', location: '', message: '' });
      } else {
        setErrorMessage('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-warm-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light mb-4">Get in Touch</h2>
        <p className="text-warm-gray max-w-2xl mx-auto">I'd love to hear about your wedding plans and how I can help capture your special day.</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              <h3 className="text-lg font-light">Email</h3>
            </div>
            <p className="text-warm-gray"><a href="mailto:michelle@michelleocampo.com">michelle@michelleocampo.com</a></p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2 text-gray-400" />
              <h3 className="text-lg font-light">Based in</h3>
            </div>
            <p className="text-warm-gray">Brooklyn, New York</p>
            <p className="text-warm-gray">Available for travel worldwide</p>
          </div>
        </div>

        <div className="md:w-2/3 md:pl-8">
          {successMessage && (
            <div className="mb-4 p-3 bg-cream text-primary border border-primary/20">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-800">
              {errorMessage}
            </div>
          )}
          <form
            name="contact"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="bg-warm-white p-8 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><input name="bot-field" /></p>
            <p className="text-xs text-warm-gray tracking-widest uppercase mb-8">Let's discuss your vision — I respond within 24 hours.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm text-warm-gray mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-cream border border-warm-gray/30 rounded-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-warm-gray mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-cream border border-warm-gray/30 rounded-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm text-warm-gray mb-2">Wedding Date</label>
                <div className="relative">
                  <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 pl-8 bg-cream border border-warm-gray/30 rounded-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm text-warm-gray mb-2">Wedding Location</label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-3 pl-8 bg-cream border border-warm-gray/30 rounded-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-warm-gray mb-2">Tell me about your wedding</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-cream border border-warm-gray/30 rounded-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-cream py-4 px-8 font-sans text-sm tracking-widest uppercase hover:bg-primary/80 transition-colors duration-300"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
