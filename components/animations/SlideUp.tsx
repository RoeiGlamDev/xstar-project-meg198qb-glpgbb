import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="bg-white text-purple-600 p-5 rounded-md shadow-md"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;