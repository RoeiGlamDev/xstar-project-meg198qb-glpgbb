import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    photo: '/images/john-doe.jpg',
    content: 'CleanSSR transformed our office environment with their advanced cleaning technology. Our workspace has never been this fresh and productive!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: '/images/jane-smith.jpg',
    content: 'The innovative cleaning solutions from CleanSSR have significantly reduced our downtime. Highly recommended for tech companies!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Lee',
    photo: '/images/michael-lee.jpg',
    content: 'I appreciate the minimal design approach of CleanSSR. Their service is effective and seamlessly integrates with our tech-driven environment.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">
          What Our Clients Say About CleanSSR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-purple-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.photo}
                alt={${testimonial.name}'s photo}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-700">{testimonial.name}</h3>
              <p className="text-gray-700 my-2">{testimonial.content}</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.12-6.551L1 7.91l6.569-.955L10 1l2.431 5.955L19 7.91l-4.242 3.629 1.12 6.551z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;