import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    inquiringAbout: '',
    howDidYouHear: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl font-bold text-beige mb-4 transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
          >
            Get In Touch
          </h2>
          <p 
            className={`text-xl text-orange transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to start your next project? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className={`space-y-8 transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div>
              <h3 className="text-2xl font-bold text-beige mb-6 text-center">
                Contact Information
              </h3>
              <p className="text-beige/80 leading-relaxed mb-8 text-center">
                Have a question or want to discuss your project? Feel free to reach out through any of these channels.
              </p>
            </div>
            
            <div className="space-y-6 pl-[34%]">
              <div className="flex items-center gap-4">
                <div className="text-orange">
                  <FaEnvelope size="24" />
                </div>
                <div>
                  <h4 className="text-beige font-semibold text-left">Email</h4>
                  <p className="text-beige/80">info@misowebs.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-orange">
                  <FaMapMarkerAlt size="24" />
                </div>
                <div>
                  <h4 className="text-beige font-semibold text-left">Location</h4>
                  <p className="text-beige/80">Norman, Oklahoma</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`bg-blue/50 backdrop-blur-sm rounded-2xl p-8 border border-beige/20 transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Organization Name side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-beige font-medium mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-beige font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                    placeholder="Your organization name"
                  />
                </div>
              </div>
              
              {/* Email and Phone Number side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-beige font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-beige font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                    placeholder="(405) 123-4567"
                  />
                </div>
              </div>
              
              {/* Subject and Inquiring About side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="subject" className="block text-beige font-medium mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="inquiringAbout" className="block text-beige font-medium mb-2">
                    Inquiring About*
                  </label>
                  <select
                    id="inquiringAbout"
                    name="inquiringAbout"
                    value={formData.inquiringAbout}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                  >
                    <option value="">Select an option</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="static-website">Static Website</option>
                    <option value="hosting-setup">Hosting & Domain Setup</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              {/* How Did You Hear About Us */}
              <div>
                <label htmlFor="howDidYouHear" className="block text-beige font-medium mb-2">
                  How Did You Hear About Us*
                </label>
                <input
                  type="text"
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200"
                  placeholder="How did you hear about us?"
                />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-beige font-medium mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-blue/30 border border-beige/20 rounded-lg text-beige placeholder-beige/50 focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange text-blue font-semibold rounded-lg hover:bg-orange/80 transition-colors duration-200 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
