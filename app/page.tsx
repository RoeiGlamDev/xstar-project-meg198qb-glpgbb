import React from 'react';
import { motion } from 'framer-motion';

const page: React.FC = () => {
  return (
    <div className="bg-white text-purple-600 min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-5 shadow-md">
        <h1 className="text-3xl font-bold">CleanSSR</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#reviews" className="hover:underline">Reviews</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-10">
        <motion.section 
          className="max-w-2xl mb-10"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold">Welcome to CleanSSR</h2>
          <p className="mt-4 text-lg">Your technology-driven cleaning solution.</p>
        </motion.section>

        <motion.section 
          id="features" 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-purple-600 text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Smart Scheduling</h3>
            <p>Utilize our technology for efficient, automated scheduling tailored to your needs.</p>
          </div>
          <div className="bg-purple-600 text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Real-time Tracking</h3>
            <p>Track your cleaning progress in real-time with our state-of-the-art technology.</p>
          </div>
          <div className="bg-purple-600 text-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Eco-friendly Solutions</h3>
            <p>We prioritize sustainability with eco-friendly cleaning products and practices.</p>
          </div>
        </motion.section>

        <motion.section 
          id="reviews" 
          className="max-w-2xl mb-10"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold">What Our Clients Say</h3>
          <div className="mt-4">
            <blockquote className="border-l-4 border-purple-600 pl-4 italic">
              "CleanSSR transformed our office. Their attention to detail and technology-driven approach is unmatched!" - TechCorp
            </blockquote>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic mt-4">
              "Efficient and eco-friendly! CleanSSR is our go-to for all cleaning needs." - EcoSolutions
            </blockquote>
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="mb-10"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="mt-4">Ready to experience the CleanSSR difference? Reach out to us today!</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Contact Us
          </button>
        </motion.section>
      </main>

      <footer className="bg-purple-600 text-white text-center p-4">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default page;