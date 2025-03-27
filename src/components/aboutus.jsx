import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
      <div className="container mx-auto text-center px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-800 mb-4 font-montserrat"
        >
          About Us
        </motion.h2>
        
        <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-12 rounded-full"></div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed font-light"
        >
          We're a platform connecting talented freelancers with innovative clients across Africa. 
          Whether you're looking to hire top talent or find your next opportunity, we're here to help you succeed.
        </motion.p>

        {/* Mission Statement - Updated styling */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300 max-w-4xl mx-auto backdrop-blur-sm bg-opacity-90">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Our Mission</h3>
          <p className="text-gray-700 mx-auto leading-relaxed text-lg">
            Our mission is to empower Africa's workforce by providing a reliable and accessible platform for freelancers to thrive and for clients to access skilled talent.
          </p>
        </div>

        {/* Core Values Section - Enhanced grid layout */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {[
            { icon: "✨", title: "Integrity", desc: "Transparency and trust in every project" },
            { icon: "💡", title: "Innovation", desc: "Fostering creativity and unique solutions" },
            { icon: "🌟", title: "Empowerment", desc: "Creating opportunities for success" },
            { icon: "🎯", title: "Excellence", desc: "Striving for quality in everything we do" }
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">{value.title}</h4>
              <p className="text-gray-600 text-lg">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline - Improved visual hierarchy */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-gray-800 mb-16 font-montserrat">Our Journey So Far</h3>
          <div className="max-w-5xl mx-auto space-y-10">
            {[
              { year: "2021", title: "Platform Launch", desc: "Connected first freelancers with clients" },
              { year: "2022", title: "Community Growth", desc: "10,000+ freelancers, 500+ active clients" },
              { year: "2023", title: "Market Expansion", desc: "New tools and features launched" }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-10 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 font-montserrat">{milestone.title}</h4>
                  <p className="text-gray-600 text-lg">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button - Enhanced styling */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="mt-24 inline-block text-white bg-gradient-to-r from-primary to-primary-dark py-5 px-12 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Learn More About Our Mission
        </motion.a>
      </div>
    </section>
  );
};

export default AboutUs;
