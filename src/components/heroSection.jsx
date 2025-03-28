import React from 'react';
import Slider from 'react-slick'; // Import the slider component
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpeg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  // Array of images and text information for the slider
  const slides = [
    {
        image:  hero3,
        title: "Find Your Perfect Freelancer or Job",
        description: "Connecting businesses with skilled professionals made easy."
      },
    {
        image: hero2,
        title: "Post Jobs & Get Bids Instantly",
        description: "Save time and money with fast job postings and competitive bids."
      },
      {
        image: hero1,
        title: "Work With Top Talent Worldwide",
        description: "Access a global pool of freelancers with diverse skills."
      }
  ];

  const titleVariants = {
    hidden: { 
      y: 50,
      opacity: 0 ,
      scale: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 5.8
        }
    }
  };

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000,  // Transition every 4 seconds
    fade: true,           // Smooth fade transition
    speed: 4000,          // Speed of transition
    arrows: false,       // Disable arrows      
    dots: true,           // Enable dots for navigation
    infinite: true,       // Infinite loop
    pauseOnHover:false,   // Pause on hover
     draggable: true, 
    adaptiveHeight: true,     // Allow manual dragging
  };
  return (
    <section className="relative">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img 
              src={slide.image} 
              alt={`slide-${index+1}:${slide.title}`} 
              className="w-full h-[80vh] object-cover bg-gray-500 rounded-lg-3xl" 
              //loading="eager"  
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = hero3; 
              }}
              
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg-3xl" ></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
                
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl lg:text-2xl text-center"
              >
                {slide.description}
              </motion.p>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-2 transition"
                onClick={handleSignUp}
              >
                Sign Up Now
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;