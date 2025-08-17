import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    expertise: 'Tech Innovation & Strategy',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    expertise: 'Software Development & AI',
  },
  {
    name: 'Carol White',
    role: 'Head of Operations',
    expertise: 'Project Management & Efficiency',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-700 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">About CleanSSR</h2>
        <p className="text-lg mb-4">
          CleanSSR is at the forefront of technology solutions, dedicated to providing innovative cleaning services that leverage the latest advancements in smart cleaning technologies. Our story began with a vision to redefine cleanliness through the integration of technology and sustainability, ensuring that our clients enjoy a cleaner, greener environment.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Our Mission</h3>
        <p className="text-lg mb-4">
          At CleanSSR, our mission is to revolutionize the cleaning industry by incorporating cutting-edge technology into our services. We aim to enhance efficiency, reduce waste, and deliver impeccable results while ensuring a commitment to sustainability and customer satisfaction.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-purple-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-md italic">{member.role}</p>
              <p className="text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-2">Our Values</h3>
        <p className="text-lg">
          CleanSSR values innovation, integrity, and environmental responsibility. We are committed to excellence in service delivery and continuously seek to improve our processes through technology. Our achievements include numerous awards for sustainable practices and cutting-edge service solutions in the cleaning sector.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;