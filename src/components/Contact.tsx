import React, { useState } from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_dizvkpg';
    const templateID = 'template_lnbz257';
    const userID = 'q2ycnHxxDT4dVYj-W';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        alert('Thank you for your inquiry! I will get back to you soon.');
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
        alert('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">I'd love to hear about your wedding plans and how I can help capture your special day.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <h3 className="text-lg font-light">Email</h3>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
          </div>
          {/* Add other form fields here */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;