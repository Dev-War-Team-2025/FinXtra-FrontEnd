// src/components/FeaturedJobs.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { motion } from 'framer-motion';

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

const cardVariants = {
  initial: {
    x: -1000,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {

      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 5
    }
  }
};

const FeaturedJobs = () => {
    const formatCurrency = (amount, currency) => {
        switch (currency) {
          case "NGN":
            return `₦${amount.toLocaleString()}`; // Naira
          case "XAF":
            return `R${amount.toLocaleString()}`; // CFA Franc
          case "KES":
            return `KSh ${amount.toLocaleString()}`;
            case "GHS":
      return `GH₵${amount.toLocaleString()}`; // Ghanaian Cedi
    case "EGP":
      return `E£${amount.toLocaleString()}`; // Egyptian Pound
    case "ETB":
      return `Br${amount.toLocaleString()}`; // Ethiopian Birr
    default:
      return `$${amount.toLocaleString()}`; // Default is USD
        }
      };
      
      const jobs = [
        {
          title: "Web Developer",
          description: "Looking for an experienced web developer to build a dynamic website for our e-commerce store.",
          location: "Remote",
          budget: 2500,
          currency: "USD" // You can modify based on location (e.g., "NGN" for Nigeria)
        },
        {
          title: "Graphic Designer",
          description: "Need a creative graphic designer to design marketing materials and branding.",
          location: "Lagos, Nigeria",
          budget: 1200000,
          currency: "NGN"
        },
        {
          title: "SEO Specialist",
          description: "Seeking an SEO specialist to optimize our website and increase organic traffic.",
          location: "Nairobi, Kenya",
          budget: 200000,
          currency: "KES"
        },
        {
            title: "Mobile App Developer",
            description: "Looking for a skilled mobile developer to create an innovative fintech application.",
            location: "Douala, Cameroon",
            budget: 1500000,
            currency: "XAF"
          },
          {
            title: "Data Analyst",
            description: "Seeking an experienced data analyst to help optimize business operations and insights.",
            location: "Cape Town, South Africa",
            budget: 25000,
            currency: "ZAR"
          },
          {
            title: "UI/UX Designer",
            description: "Seeking a creative UI/UX designer to redesign our financial platform interface.",
            location: "Accra, Ghana",
            budget: 15000,
            currency: "GHS"
          },
          {
            title: "Backend Developer",
            description: "Looking for a skilled backend developer with expertise in fintech solutions.",
            location: "Cairo, Egypt",
            budget: 45000,
            currency: "EGP"
          },
          {
            title: "DevOps Engineer",
            description: "Seeking an experienced DevOps engineer to streamline our deployment processes.",
            location: "Addis Ababa, Ethiopia",
            budget: 80000,
            currency: "ETB"
          }
      ];
      
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with specific options
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Jobs Available</h2>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{job.location}</span>
                <span>{job.budget}</span>
              </div>
              <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-2 transition">
                View Job
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="my-20"></div>
    </section>
    
  );
};

export default FeaturedJobs;
