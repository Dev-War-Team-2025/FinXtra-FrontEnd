// src/components/Testimonials.jsx

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hers.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kwame Nkrumah",
      location: "Accra, Ghana",
      feedback: "This platform has been a game changer for my freelance career. I've found so many great clients and worked on exciting projects!",
      rating: 5
    },
    {
      name: "Amina Abdi",
      location: "Nairobi, Kenya",
      feedback: "As a graphic designer, I love how easy it is to find clients here. The platform is user-friendly, and payments are secure.",
      rating: 4
    },
    {
      name: "Chinonso Okafor",
      location: "Lagos, Nigeria",
      feedback: "I was able to land my first big project on this platform. The job postings are relevant and the community is supportive.",
      rating: 5
    },
    {
      name: "Thabo Mbeki",
      location: "Johannesburg, South Africa",
      feedback: "I've posted several jobs for my company, and the response from freelancers has been incredible. Highly recommend this platform.",
      rating: 4
    },
    {
      name: "Fatima El-Sisi",
      location: "Cairo, Egypt",
      feedback: "The platform's escrow system gives me confidence when working with new clients. The support team is also very responsive.",
      rating: 5
    },
    {
      name: "Paul Kagame",
      location: "Kigali, Rwanda",
      feedback: "As a tech startup founder, this platform has helped us find talented developers across Africa. The quality of work is exceptional.",
      rating: 5
    }
  ];

  const containerVariants = {
    animate: {
      x: [0, -50 * 16], // Move by 50rem (width of all cards)
      transition: {
        x: {
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }
      }
    }
  };

  return (
    <section className="py-16 bg-primary overflow-hidden-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">What Our Users Say</h2>

        <div className="relative w-full">
          <div className="absolute flex w-max">
            <motion.div 
              variants={containerVariants}
              animate="animate"
              className="flex gap-8"
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="w-[350px] flex-shrink-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex justify-center mb-4 space-x-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400" // Increased size and adjusted color
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          strokeWidth="2"
                          stroke="#FCD34D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                      <svg
                        key={`empty-${i}`}
                        className="w-6 h-6 text-gray-300" // Empty stars
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          strokeWidth="2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">{testimonial.feedback}</p>

                  <div className="text-sm text-gray-500">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="w-[350px] flex-shrink-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex justify-center mb-4 space-x-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400" // Increased size and adjusted color
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          strokeWidth="2"
                          stroke="#FCD34D"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                      <svg
                        key={`empty-${i}`}
                        className="w-6 h-6 text-gray-300" // Empty stars
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          strokeWidth="2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">{testimonial.feedback}</p>

                  <div className="text-sm text-gray-500">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
