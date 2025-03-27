// src/components/HowItWorks.jsx

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4"
        >
          How It Works
        </motion.h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Freelancer Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="text-6xl bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-2xl mb-4">
                👨‍💻
              </div>
              <h3 className="text-3xl font-bold text-gray-800">For Freelancers</h3>
            </div>
            <div className="space-y-6">
              {[
                "Sign up and create a profile with your skills and experience",
                "Browse available jobs based on your expertise",
                "Submit proposals to apply for jobs you're interested in",
                "Get hired, complete tasks, and get paid securely"
              ].map((step, index) => (
                <div key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="text-6xl bg-gradient-to-br from-primary/20 to-primary/10 p-6 rounded-2xl mb-4">
                💼
              </div>
              <h3 className="text-3xl font-bold text-gray-800">For Clients</h3>
            </div>
            <div className="space-y-6">
              {[
                "Create a job listing with your project details",
                "Review freelancer profiles and proposals",
                "Select the best candidate for your project",
                "Track the progress and release payments securely"
              ].map((step, index) => (
                <div key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-lg leading-relaxed pt-1 group-hover:text-gray-900 transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
