import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import Header from '../components/header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { FaHandshake, FaUsers, FaGlobe, FaLightbulb, FaShieldAlt, FaClock, FaAward, FaGraduationCap } from 'react-icons/fa';
import FAQ from '../components/faq';
import hero6 from '../assets/hero6.jpeg';
import hero7 from '../assets/hero7.jpeg';

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  // Add new features section
  const features = [
    {
      title: "Verified Professionals",
      description: "All freelancers undergo thorough verification process to ensure quality and reliability.",
      icon: <FaShieldAlt className="text-5xl text-primary" />
    },
    {
      title: "Flexible Work",
      description: "Choose projects that match your schedule and expertise.",
      icon: <FaClock className="text-5xl text-primary" />
    },
    {
      title: "Skill Development",
      description: "Access to training resources and mentorship opportunities.",
      icon: <FaGraduationCap className="text-5xl text-primary" />
    },
    {
      title: "Quality Assurance",
      description: "Guaranteed satisfaction with every completed project.",
      icon: <FaAward className="text-5xl text-primary" />
    }
  ];

  return (
    <ParallaxProvider>
      <Header />
      
      {/* Hero Section with Enhanced Animation */}
      <section className="relative h-[95vh] bg-cover bg-center rounded-lg overflow-hidden" 
        style={{ backgroundImage: `url(${hero6})` }}>
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-blue bg-opacity-100"></div>
        </Parallax>
        <div className="relative container mx-auto h-full flex items-center justify-center text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-7xl font-bold mb-8">About AfriTask</h1>
            <div className="text-2xl max-w-3xl mx-auto">
              <TypeAnimation
                sequence={[
                  'Empowering Africa\'s digital workforce',
                  2000,
                  'Connecting talented freelancers',
                  2000,
                  'Building the future of work',
                  2000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add floating animation to mission stats */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section className="py-24">
        <div className="container mx-auto px-8">
          {/* Mission Section with Scale Animation */}
          <motion.div 
            style={{ scale }}
            className="grid md:grid-cols-2 gap-12 items-start mb-24"
          >
            <div className="relative h-[60vh]">
              <img 
                src={hero7}
                alt="Our Mission" 
                className="rounded-2xl shadow-xl w-full h-full object-cover" 
                style={{ minHeight: '100%' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8">
                To create economic opportunities for Africa's workforce by building a trusted marketplace where talent meets opportunity, fostering professional growth and innovation across the continent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "10,000+", label: "Active Freelancers" },
                  { number: "500+", label: "Satisfied Clients" },
                  { number: "25+", label: "African Countries" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl float-animation"
                  >
                    <h4 className="text-4xl font-bold text-primary mb-2">{stat.number}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Values with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4"
          >
            {[
              { icon: <FaHandshake className="text-5xl text-primary" />, title: "Trust", desc: "Building lasting relationships through transparency" },
              { icon: <FaLightbulb className="text-5xl text-primary" />, title: "Innovation", desc: "Fostering creative solutions and ideas" },
              { icon: <FaUsers className="text-5xl text-primary" />, title: "Community", desc: "Growing together as one African workforce" },
              { icon: <FaGlobe className="text-5xl text-primary" />, title: "Pan-African", desc: "Connecting talent across borders" }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">{value.title}</h4>
                <p className="text-gray-600 text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Section with Hover Animation */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 font-montserrat"
            >
              Why Choose AfriTask?
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add How It Works Section */}
          <div className="mt-24">
            <h3 className="text-4xl font-bold text-gray-800 mb-12 font-montserrat">How AfriTask Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Create Your Profile",
                  desc: "Sign up and showcase your skills, experience, and portfolio to stand out."
                },
                {
                  step: "2",
                  title: "Find Opportunities",
                  desc: "Browse through diverse projects or post your requirements as a client."
                },
                {
                  step: "3",
                  title: "Collaborate & Earn",
                  desc: "Work on projects, deliver quality results, and grow your career."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white p-8 rounded-2xl shadow-xl"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mt-4 mb-4">{item.title}</h4>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Stories & Contact Form Side by Side */}
          <div className="grid md:grid-cols-2 gap-12 mt-24">
            <div>
              <h3 className="text-4xl font-bold mb-8">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    quote: "AfriTask helped me build a successful freelance career while working with clients across Africa.",
                    author: "John D.",
                    role: "Web Developer"
                  },
                  {
                    quote: "Finding qualified talent has never been easier. AfriTask has transformed how we hire freelancers.",
                    author: "Sarah M.",
                    role: "Project Manager"
                  }
                ].map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl"
                  >
                    <p className="text-gray-600 text-lg italic mb-6">"{story.quote}"</p>
                    <p className="font-bold text-gray-800">{story.author}</p>
                    <p className="text-primary">{story.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Journey Timeline with Slide Animation */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-16 font-montserrat"
            >
              Our Journey
            </motion.h3>
            <div className="max-w-5xl mx-auto space-y-10">
              {[
                { year: "2021", title: "Platform Launch", desc: "Started connecting African freelancers with businesses" },
                { year: "2022", title: "Community Growth", desc: "Reached 10,000+ registered freelancers and expanded to 15 countries" },
                { year: "2023", title: "Market Leader", desc: "Became Africa's fastest-growing freelance marketplace" }
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

          {/* Call to Action */}
          <motion.div className="mt-24 space-y-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/signup"
              className="inline-block text-white bg-gradient-to-r from-primary to-primary-dark py-5 px-12 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mr-4"
            >
              Join as Freelancer
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/signup"
              className="inline-block text-primary border-2 border-primary py-5 px-12 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Talent
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
    </ParallaxProvider>
  );
};

export default AboutUs;