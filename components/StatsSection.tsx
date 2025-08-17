import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: {
    title: string;
    value: number;
  }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">CleanSSR Achievements</h2>
        <p className="text-lg text-gray-800 mb-12">We take pride in our metrics that showcase our commitment to excellence in technology-driven cleaning solutions.</p>
        <div className="flex justify-around flex-wrap">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 text-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-semibold">{achievement.value}</h3>
              <p className="text-lg mt-2">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;