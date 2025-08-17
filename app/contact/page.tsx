import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-2 border border-purple-500 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-2 border border-purple-500 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="p-2 border border-purple-500 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        Send Message
      </button>
    </form>
  );
};

const ContactPage: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    // Handle form submission logic here
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-white text-purple-900 flex flex-col items-center justify-center p-8">
      <motion.div
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>
      <motion.div
        className="mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Have questions or need assistance? We're here to help you with all your cleaning technology needs.
      </motion.p>
      <ContactForm onSubmit={handleFormSubmit} />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <p>123 CleanTech Ave, San Francisco, CA 94103</p>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Business Hours</h2>
        <p>Monday - Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;