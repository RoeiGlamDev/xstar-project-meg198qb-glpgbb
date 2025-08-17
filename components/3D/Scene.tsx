import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      if (meshRef.current) {
        meshRef.current.scale.set(1.1, 1.1, 1.1);
      }
    };

    const handleMouseOut = () => {
      if (meshRef.current) {
        meshRef.current.scale.set(1, 1, 1);
      }
    };

    const mesh = meshRef.current;
    if (mesh) {
      mesh.addEventListener('mouseover', handleMouseOver);
      mesh.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (mesh) {
        mesh.removeEventListener('mouseover', handleMouseOver);
        mesh.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef} position={[-1.2, 0, 0]} scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#7C3AED" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

const CleanSSR: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-purple-700">
      <motion.header
        className="mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Welcome to CleanSSR</h1>
        <p className="mt-2 text-lg">Your technology-driven cleaning solution</p>
      </motion.header>
      <div className="relative w-full max-w-4xl h-96">
        <Scene />
      </div>
      <motion.section
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Why Choose CleanSSR?</h2>
        <ul className="mt-4 space-y-2 text-left">
          <li>✔️ Cutting-edge technology for superior cleaning</li>
          <li>✔️ Eco-friendly products and methods</li>
          <li>✔️ Customizable cleaning plans tailored to your needs</li>
          <li>✔️ Fully trained and certified cleaning professionals</li>
        </ul>
      </motion.section>
      <motion.footer
        className="mt-10 py-5 border-t border-purple-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="mt-2">“CleanSSR transformed our office! Highly recommend!” - Tech Corp</p>
        <p>“Efficient and reliable service with a tech twist.” - Startup Inc.</p>
      </motion.footer>
    </div>
  );
};

export default CleanSSR;