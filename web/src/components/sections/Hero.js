import React from 'react';
import Button from '../common/Button';
import hero2 from '../../assets/hero5.png'; // ✅ make sure this path matches your project
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-center font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6 font-[Playfair_Display]">
          Explore Syria{" "}
          <span className="text-[#C6943A]">with Confidence,</span>
        </h1>

        <p className="text-xl md:text-2xl font-light mb-10">
          Your trusted B2B platform for seamless tourism service management, connecting you to hotels, transportation, restaurants and local guides.
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/services">
            <Button className="bg-teal-600 hover:bg-[#F7941D] text-white border-none transition duration-300">
              Explore Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-transparent text-white border border-white hover:bg-[#F7941D] hover:border-[#F7941D] transition-all duration-200">
              Join as Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
