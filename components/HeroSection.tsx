import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white text-purple-700">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <div className="flex space-x-4">
          <motion.div
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
          <motion.div
            className="border border-purple-600 text-purple-600 py-2 px-4 rounded hover:bg-purple-600 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-sm text-gray-500">Trusted by industry leaders in technology solutions.</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;