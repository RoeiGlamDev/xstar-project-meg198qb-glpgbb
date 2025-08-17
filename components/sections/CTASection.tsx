import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Transform Your Space with CleanSSR", 
  subtitle = "Experience the future of cleaning technology. Fast, efficient, and eco-friendly solutions tailored for your needs.", 
  buttonText = "Get Started", 
  buttonLink = "/contact" 
}) => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-purple-600 mb-4"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={buttonLink} 
          className="inline-block bg-purple-600 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
          initial={{ scale: 1 }} 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </div>
  );
};

export default CTASection;