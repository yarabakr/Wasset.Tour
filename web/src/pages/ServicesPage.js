import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features'; // Reusing Features for "Why Choose Our Services"
import CTA from '../components/sections/CTA';
import useScrollToTop from '../hooks/useScrollToTop';
import serviceHero from '../assets/serviceHero.jpg';

const ServicesPage = () => {
  useScrollToTop();

  return (
    <div className="relative">
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Section 1: Hero/Title Section - Matching the image's dark header */}
       <section className="relative h-[90vh] flex items-center justify-center text-white">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${serviceHero})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6 font-[Playfair_Display]">
              Our <span className="text-[#C6943A]">Services</span>
            </h1>

            <p className="text-xl md:text-2xl font-light">
               We provide comprehensive tourism services, seamlessly connecting you with the finest hotels, transportation options, local guides, and dining experiences
            </p>
          </div>
        </section>

        
        {/* Section 2: Main Services List - Using the new, image-matched Services component */}
        <Services />

        {/* Section 3: Why Choose Our Services - Reusing the Features component and renaming the title */}
        <Features title="Why Choose Our Services" subtitle="We guarantee quality, reliability, and the best prices for your clients." />

        {/* Section 4: Ready to Get Started CTA - Matching the image's dark footer CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
