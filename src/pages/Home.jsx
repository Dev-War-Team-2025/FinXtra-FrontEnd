// src/Home.js

import React from 'react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Features from '../components/features';
import HeroSection from '../components/heroSection';
import AboutUs from '../components/aboutus';
import HowItWorks from '../components/howItwork';
import FAQ from '../components/faq';
import CTA from '../components/cta';
import Navbar from '../components/Navbar';
//import { Features } from 'tailwindcss';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <Features /> 
      <Navbar />
      <AboutUs />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <FAQ /> 
      <Footer />
    </div>
  );
};

export default Home;