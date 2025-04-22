import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // EmailJS configuration
  const serviceID = 'service_dizvkpg';
  const templateID = 'templtemplate_rshedde';
  const userID = 'q2ycnHxxDT4dVYj-W';
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(userID);
  }, [userID]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(serviceID, templateID, formData)
      .then(() => {
        setSuccessMessage('Email sent successfully! Thank you for your inquiry. I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          date: '',
          location: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setErrorMessage('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">I'd love to hear about your wedding plans and how I can help capture your special day.</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              <h3 className="text-lg font-light">Email</h3>
            </div>
            <p className="text-gray-600"><a href="mailto:michelle@michelleocampo.com">michelle@michelleocampo.com</a></p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2 text-gray-400" />
              <h3 className="text-lg font-light">Based in</h3>
            </div>
            <p className="text-gray-600">Brooklyn, New York</p>
            <p className="text-gray-600">Available for travel worldwide</p>
          </div>
        </div>
        
        <div className="md:w-2/3 md:pl-8">
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm text-gray-600 mb-2">Wedding Date</label>
                <div className="relative">
                  <Calendar className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 pl-8 border border-gray-300 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm text-gray-600 mb-2">Wedding Location</label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 pl-8 border border-gray-300 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Tell me about your wedding</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-2 border border-gray-300 focus:border-gray-500 focus:outline-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300"
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