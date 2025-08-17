import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormFields {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formFields, setFormFields] = useState<ContactFormFields>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormFields> = {};
    if (!formFields.name) newErrors.name = 'Name is required';
    if (!formFields.email) newErrors.email = 'Email is required';
    if (!formFields.message) newErrors.message = 'Message is required';
    if (!formFields.reason) newErrors.reason = 'Reason for contact is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log('Form submitted:', formFields);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center text-4xl font-bold mb-8 text-purple-600"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Contact CleanSSR
        </motion.h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="bg-purple-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-purple-600 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={handleChange}
                className={w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-purple-300'}}
                placeholder="Your Name"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleChange}
                className={w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-purple-300'}}
                placeholder="Your Email"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 mb-2" htmlFor="reason">Reason for Contact</label>
              <select
                name="reason"
                value={formFields.reason}
                onChange={handleChange}
                className={w-full p-2 border rounded ${errors.reason ? 'border-red-500' : 'border-purple-300'}}
                required
              >
                <option value="">Select reason</option>
                <option value="Inquiry">Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-purple-600 mb-2" htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formFields.message}
                onChange={handleChange}
                className={w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-purple-300'}}
                placeholder="Your Message"
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-purple-600 font-bold">Business Information</h3>
          <p className="text-gray-700">CleanSSR</p>
          <p className="text-gray-700">123 Tech Lane, Silicon Valley, CA 94043</p>
          <p className="text-gray-700">Hours: Mon - Fri, 9 AM - 5 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;