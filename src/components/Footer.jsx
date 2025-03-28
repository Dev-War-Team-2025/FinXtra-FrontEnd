// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Column 1: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                <a href="/about" className="text-gray-300 hover:text-primary">About Us</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                <a href='./ContactForm' className="text-gray-300 hover:text-primary">Contact</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                <a href="#" className="text-gray-300 hover:text-primary">Privacy Policy</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="transition-all duration-200">
                <a href="#" className="text-gray-300 hover:text-primary">Terms of Service</a>
              </motion.li>
            </ul>
          </div>

          {/* Column 2: Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
              Stay Updated
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></div>
            </h3>
            <p className="text-gray-300">Sign up for our newsletter to receive the latest updates and news.</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-white relative inline-block">
              Follow Us
              <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></div>
            </h3>
            <div className="flex space-x-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700/50 p-3 rounded-full text-gray-300 hover:text-primary hover:bg-gray-700 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 4: Copyright */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 border-t border-gray-700 pt-8 mt-8">
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} AfriTask. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
