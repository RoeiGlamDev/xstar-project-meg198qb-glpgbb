import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Advanced Cleaning Technology',
    description: 'At CleanSSR, we utilize cutting-edge technology to ensure your environment is spotless and sanitized.',
    icon: <i className="fas fa-laptop-code text-purple-500"></i>,
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Our cleaning products are environmentally friendly, ensuring a safe space for you and your loved ones.',
    icon: <i className="fas fa-leaf text-purple-500"></i>,
  },
  {
    title: 'Expert Team',
    description: 'Our trained professionals bring expertise and precision to every cleaning service we provide.',
    icon: <i className="fas fa-users text-purple-500"></i>,
  },
  {
    title: 'Customer Satisfaction',
    description: 'At CleanSSR, we prioritize your satisfaction, ensuring every job meets our high standards.',
    icon: <i className="fas fa-thumbs-up text-purple-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-purple-600 mb-8">Our Services at CleanSSR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              aria-label={feature.title}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-purple-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;