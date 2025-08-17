import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    photo: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    photo: '/images/bob.jpg',
  },
  {
    name: 'Cathy Lee',
    role: 'Head of Operations',
    photo: '/images/cathy.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-600 flex flex-col items-center">
      <header className="py-10">
        <h1 className="text-4xl font-bold">About CleanSSR</h1>
        <p className="mt-4 text-lg">Innovating the Cleaning Industry with Technology</p>
      </header>
      <section className="max-w-4xl px-4 py-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="bg-purple-100 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold">Our History</h2>
          <p className="mt-2">
            CleanSSR was founded in 2020 with a mission to revolutionize the cleaning industry through technology. 
            We leverage advanced software solutions and data analytics to optimize cleaning services, ensuring efficiency and effectiveness.
          </p>
        </motion.div>
      </section>
      <section className="max-w-4xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Innovation: We embrace new technologies to enhance our services.</li>
          <li>Integrity: We operate with transparency and accountability.</li>
          <li>Customer Focus: Our clients are at the heart of everything we do.</li>
        </ul>
      </section>
      <section className="max-w-4xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name}
              initial={{ scale: 0.95 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }}
              className="bg-white border border-purple-300 rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <img src={member.photo} alt={member.name} className="rounded-full w-32 h-32 mx-auto"/>
              <h3 className="text-xl font-semibold text-center mt-2">{member.name}</h3>
              <p className="text-center text-purple-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;