import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    // Initialize any 3D animations or effects here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
        Welcome to CleanSSR
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Your trusted technology partner for innovative cleaning solutions.
      </p>

      <Canvas className="w-full h-64">
        <OrbitControls />
        {/ Add 3D floating elements here /}
      </Canvas>

      <motion.div className="mt-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          What We Do
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At CleanSSR, we leverage cutting-edge technology to offer
          unparalleled cleaning services. Our solutions are designed to 
          enhance efficiency while ensuring a spotless environment.
        </p>
      </motion.div>

      <motion.div className="mt-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Client Reviews
        </h2>
        <div className="bg-purple-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-800">
            "CleanSSR transformed our workspace! Their technology-driven 
            solutions are top-notch." - TechCorp
          </p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg shadow-md mt-4">
          <p className="text-gray-800">
            "Exceptional service and results. Highly recommend CleanSSR!"
            - Innovate LLC
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Get Started with CleanSSR
      </motion.button>
    </div>
  );
};

export default FloatingElements;