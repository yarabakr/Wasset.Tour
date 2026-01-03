import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import { FaGlobe, FaHandshake, FaRocket, FaCheckCircle, FaTimesCircle, FaTachometerAlt, FaHeadset } from 'react-icons/fa';
import aboutHeroImage from '../assets/about_hero3.jpg';


// Component for Mission/Vision
const MissionVision = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">About Wasset.Tour</h2>
        <p className="text-lg text-gray-600">We are revolutionizing the Syrian tourism industry by connecting tourism companies with trusted service providers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600">
          <div className="flex items-center mb-4">
            <FaGlobe className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600">Our mission is to be the premier B2B platform that facilitates seamless connections, empowering tourism companies to deliver exceptional travel experiences.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600">
          <div className="flex items-center mb-4">
            <FaRocket className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600">To be the leading resource for tourism companies seeking reliable service providers, helping them to streamline operations and grow their business sustainably.</p>
        </div>
      </div>
    </div>
  </section>
);

// Component for Problem/Solution
const ProblemSolution = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why We Created Wasset.Tour</h2>
        <p className="text-lg text-gray-600">Addressing the core challenges facing Syria's tourism industry.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Problem Column */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6">The Problem</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaTimesCircle className="text-red-600 mr-3" />
                <p className="font-semibold text-gray-800">Fragmented Market</p>
              </div>
              <p className="text-sm text-gray-600">Tourism companies struggle to find reliable service providers across sectors.</p>
            </div>
            <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaTimesCircle className="text-red-600 mr-3" />
                <p className="font-semibold text-gray-800">Time Wastage</p>
              </div>
              <p className="text-sm text-gray-600">Hours spent coordinating bookings and managing individual providers.</p>
            </div>
            <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaTimesCircle className="text-red-600 mr-3" />
                <p className="font-semibold text-gray-800">Lack of Transparency</p>
              </div>
              <p className="text-sm text-gray-600">Unclear service information, pricing, and quality assurance.</p>
            </div>
          </div>
        </div>
        {/* Solution Column */}
        <div>
          <h3 className="text-2xl font-bold text-teal-600 mb-6">Our Solution</h3>
          <div className="space-y-4">
            <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaCheckCircle className="text-teal-600 mr-3" />
                <p className="font-semibold text-gray-800">Unified Platform</p>
              </div>
              <p className="text-sm text-gray-600">All service providers are consolidated, verified, and managed in one place.</p>
            </div>
            <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaCheckCircle className="text-teal-600 mr-3" />
                <p className="font-semibold text-gray-800">Efficiency</p>
              </div>
              <p className="text-sm text-gray-600">Streamlined booking, communication, and management tools.</p>
            </div>
            <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-lg">
              <div className="flex items-center mb-1">
                <FaCheckCircle className="text-teal-600 mr-3" />
                <p className="font-semibold text-gray-800">Clear Pricing</p>
              </div>
              <p className="text-sm text-gray-600">Upfront, transparent pricing and service quality information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Component for Core Values
const CoreValues = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
        <p className="text-lg text-gray-600">The principles that guide everything we do at Wasset.Tour.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <FaHandshake className="text-5xl text-teal-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Reliability</h3>
          <p className="text-sm text-gray-600">We ensure all service providers act with integrity and consistency.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <FaTachometerAlt className="text-5xl text-teal-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Speed</h3>
          <p className="text-sm text-gray-600">Fast booking confirmations, quick communication, and efficient service.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <FaGlobe className="text-5xl text-teal-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Transparency</h3>
          <p className="text-sm text-gray-600">Open communication, transparent pricing, and clear service details.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <FaHeadset className="text-5xl text-teal-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Support</h3>
          <p className="text-sm text-gray-600">Dedicated and responsive support team, ready to provide assistance and guidance.</p>
        </div>
      </div>
    </div>
  </section>
);

// Component for Stats
const Stats = () => (
  <section className="py-16 bg-teal-800 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 text-center">
        <div>
          <h3 className="text-4xl font-extrabold">100+</h3>
          <p className="text-lg font-light">Service Providers</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">500+</h3>
          <p className="text-lg font-light">Successful Bookings</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold">24/7</h3>
          <p className="text-lg font-light">Platform Availability</p>
        </div>
      </div>
    </div>
  </section>
);


const About = () => {
  useScrollToTop();

  return (
    <div className="relative">
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Section 1: Hero Section - Matching the image's dark header */}
        <section className="relative h-[90vh] flex items-center justify-center text-white">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHeroImage})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6 font-[Playfair_Display]">
              About <span className="text-[#C6943A]">Wasset.Tour</span>
            </h1>

            <p className="text-xl md:text-2xl font-light">
              We are revolutionizing the Syrian tourism industry by connecting tourism companies
              with trusted service providers.
            </p>
          </div>
        </section>


        <MissionVision /> {/* Section 2: Mission/Vision */}
        <ProblemSolution /> {/* Section 3: Problem/Solution */}
        <CoreValues /> {/* Section 4: Core Values */}
        <Stats /> {/* Section 5: Stats */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
