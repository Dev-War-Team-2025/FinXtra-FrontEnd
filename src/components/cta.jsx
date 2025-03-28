import React from 'react';
import { motion } from 'framer-motion';
import freelancer from '../assets/hero4.jpeg'
const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Transform <br />
              Your <span className="underline decoration-4 decoration-white/30">Career</span>?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 mb-10 leading-relaxed"
            >
              Join thousands of African freelancers and clients creating success stories every day. 
              Your next opportunity awaits!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#signup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Get Started Free
              </motion.a>
              
              <motion.a
                href="#learn-more"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Learn More
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: "10K+", label: "Freelancers" },
                { number: "5K+", label: "Projects" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-white">{stat.number}</p>
                  <p className="text-sm text-white/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <img
                src={freelancer}
                alt="Professional freelancer"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
