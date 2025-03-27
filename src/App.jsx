// src/App.js

import React from 'react';
import Header from './components/header';
import JobCategories from './components/JobCategories';
import JobListings from './components/JobListings';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Features from './components/features';
import HeroSection from './components/heroSection';
import AboutUs from './components/aboutus';
import HowItWorks from './components/howItwork';
import FAQ from './components/faq';
import CTA from './components/cta';
//import { Features } from 'tailwindcss';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <Features /> 
      <AboutUs />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <FAQ />
      
     
      <Footer />
    </div>
  );
};

export default App;