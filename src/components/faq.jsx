import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: 'How do I sign up as a freelancer?',
    answer: `Getting started as a freelancer is easy:
    1. Click the "Sign Up" button in the top right corner
    2. Choose "Freelancer Account" option
    3. Fill in your personal and professional details
    4. Upload relevant portfolio samples
    5. Verify your identity through our secure system
    6. Complete your profile with skills, experience, and rates
    7. Set up your payment preferences
    
    Once approved, you can start browsing and applying for projects immediately!`,
  },
  {
    id: 2,
    question: 'How do I post a job as a client?',
    answer: `Posting a job is straightforward:
    1. Log into your client account
    2. Click "Post a Job" from your dashboard
    3. Fill out the comprehensive job details:
       - Project title and description
       - Required skills and experience level
       - Project budget and timeline
       - Any specific requirements or milestones
    4. Add any relevant files or documentation
    5. Review and publish your listing
    
    Your job will be visible to qualified freelancers immediately after posting!`,
  },
  {
    id: 3,
    question: 'What types of jobs can I find on the platform?',
    answer: `Our platform hosts a diverse range of professional services:

    Technical Services:
    • Web Development (Frontend, Backend, Full-Stack)
    • Mobile App Development
    • Software Engineering
    • DevOps & System Administration

    Creative Services:
    • Graphic Design
    • UI/UX Design
    • Content Writing
    • Video Editing
    • Animation

    Business Services:
    • Digital Marketing
    • SEO & Social Media
    • Business Consulting
    • Virtual Assistance
    
    Each category has detailed subcategories to help you find exactly what you need.`,
  },
  {
    id: 4,
    question: 'How do I get paid?',
    answer: `Our secure payment system ensures safe and timely payments:

    Payment Process:
    1. Client deposits funds in escrow when hiring
    2. You complete the agreed-upon work
    3. Client reviews and approves the work
    4. Funds are released to your account within 24 hours
    
    Supported Payment Methods:
    • Direct bank transfer
    • PayPal
    • Mobile Money (for African regions)
    • Cryptocurrency (Bitcoin, Ethereum)
    
    We handle currency conversions automatically, and you can track all payments in real-time through your dashboard.`,
  },
  {
    id: 5,
    question: 'Can I communicate with clients before applying for a job?',
    answer: `Yes, we encourage clear communication:

    Pre-Application Communication:
    • Use the project discussion feature
    • Ask clarifying questions publicly
    • View client history and ratings
    
    After Shortlisting:
    • Access private messaging
    • Schedule video calls
    • Share detailed proposals
    • Discuss terms and conditions
    
    All communications are recorded for security and transparency. We also provide built-in translation tools for international projects.`,
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full p-6 text-left focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    className="text-primary text-2xl font-bold"
                  >
                    +
                  </motion.span>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 mt-2 pt-4 whitespace-pre-line">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
