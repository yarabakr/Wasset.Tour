import React from 'react';
import { Link } from 'react-router-dom';
import ctaImage from '../../assets/cta_bg.jpg';

const CTA = () => {
  return (
    <section className="py-20 relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-800 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Transform Your Tourism Business?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join hundreds of tourism companies and service providers already using our platform to streamline their operations.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-[#F7941D]"
          >
            Get Started Today
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-[#F7941D]"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
