import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-purple-600 text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-gray-700 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 p-3 border border-purple-400 rounded-md mb-4 md:mb-0 md:mr-4"
          />
          <motion.div
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
      ) : (
        <motion.div
          className="text-green-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for signing up for CleanSSR updates!
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;