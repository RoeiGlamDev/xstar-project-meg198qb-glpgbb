import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  review: string;
}

const Card: React.FC<CardProps> = ({ title, description, review }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-purple-600 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-gray-500 italic">"{review}"</p>
    </motion.div>
  );
};

export default Card;