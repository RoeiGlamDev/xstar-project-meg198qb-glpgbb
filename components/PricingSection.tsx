import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Tech Support',
    price: '$99/month',
    features: [
      '24/7 Customer Support',
      'Remote Troubleshooting',
      'Software Updates',
      'Basic Security Monitoring',
    ],
  },
  {
    title: 'Pro Tech Management',
    price: '$199/month',
    features: [
      'All Basic Features',
      'Dedicated Account Manager',
      'Advanced Security Solutions',
      'Data Backup Solutions',
    ],
  },
  {
    title: 'Enterprise Solutions',
    price: '$499/month',
    features: [
      'All Pro Features',
      'Custom Software Development',
      'On-site Support',
      'Priority Response Times',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">CleanSSR Pricing Plans</h2>
        <p className="text-gray-700 mb-12">
          Choose the right plan for your technology needs with CleanSSR.
        </p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 text-white rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/3 transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
              <p className="text-xl mb-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="bg-white text-purple-600 font-semibold py-2 px-4 rounded transition-colors duration-200 hover:bg-purple-700 hover:text-white"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;