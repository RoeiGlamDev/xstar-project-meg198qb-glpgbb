import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: "Basic Package",
    price: "$99/month",
    features: [
      "Cloud-based cleaning management system",
      "Automated scheduling",
      "Real-time analytics dashboard",
    ],
  },
  {
    title: "Pro Package",
    price: "$199/month",
    features: [
      "All Basic Package features",
      "Advanced reporting tools",
      "Priority customer support",
    ],
  },
  {
    title: "Enterprise Package",
    price: "$399/month",
    features: [
      "All Pro Package features",
      "Custom API integrations",
      "Dedicated account manager",
    ],
  },
];

const FAQ = [
  {
    question: "What is CleanSSR?",
    answer: "CleanSSR is a cutting-edge technology platform that revolutionizes the cleaning industry through advanced software solutions.",
  },
  {
    question: "How does the pricing work?",
    answer: "Our pricing is based on monthly subscriptions with three flexible packages tailored to your needs.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time through your account settings.",
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      <motion.div 
        className="text-4xl font-bold text-purple-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        CleanSSR Pricing
      </motion.h1>
      <motion.div 
        className="text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Choose the right package for your cleaning business and leverage our technology solutions for optimized operations.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index}
            className="bg-purple-50 border border-purple-200 rounded-lg p-6 transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-purple-600">{option.title}</h2>
            <p className="text-3xl font-bold text-purple-700">{option.price}</p>
            <ul className="mt-4">
              {option.features.map((feature, fIndex) => (
                <li key={fIndex} className="text-gray-600">- {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-2xl font-bold text-purple-600 mt-10 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="bg-purple-50 p-6 rounded-lg">
        {FAQ.map((item, index) => (
          <motion.div 
            key={index}
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="font-semibold text-purple-600">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;