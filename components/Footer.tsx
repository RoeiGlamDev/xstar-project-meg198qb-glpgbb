import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName = "CleanSSR", socialLinks }) => {
    return (
        <footer className="bg-purple-600 text-white p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto text-center"
            >
                <h2 className="text-xl font-bold mb-4">About {companyName}</h2>
                <p className="mb-4">
                    {companyName} is at the forefront of innovative cleaning solutions, leveraging technology to deliver efficient and eco-friendly services. Our mission is to transform the cleaning industry through smart automation and exceptional customer experiences.
                </p>
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#services" className="hover:text-purple-300 transition">Services</a></li>
                        <li><a href="#reviews" className="hover:text-purple-300 transition">Reviews</a></li>
                        <li><a href="#contact" className="hover:text-purple-300 transition">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="flex justify-center space-x-4 mt-4">
                    {socialLinks.map((link) => (
                        <motion.div
                            key={link.name}
                            href={link.url}
                            className="hover:text-purple-300 transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>
                <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;