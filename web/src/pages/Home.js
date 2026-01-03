import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services'; // Bringing back Services to Home
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
  useScrollToTop();

  return (
    <div className="relative">
      <Header />
      <main className="pt-16">
        <Hero /> {/* Section 1: Hero Section */}
        
        <Features /> {/* Section 2: Features Section */}
        <HowItWorks /> {/* Section 4: How It Works */}
        <Testimonials /> {/* Section 5: What Our Partners Say */}
        <CTA /> {/* Section 6: Ready to Transform Your Tourism Business CTA */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
