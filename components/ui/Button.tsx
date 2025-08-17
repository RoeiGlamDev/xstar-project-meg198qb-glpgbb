import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      className={`px-4 py-2 rounded transition-all duration-300 ease-in-out ${buttonVariants[variant]`}}
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={children.toString()}
    >
      {children}
    </motion.button>
  );
};

export default Button;