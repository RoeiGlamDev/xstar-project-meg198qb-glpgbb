import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-2 text-purple-600 hover:text-purple-800 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-purple-600 text-lg font-semibold mb-4">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </motion.div>
    </div>
  );
};

export default Modal;