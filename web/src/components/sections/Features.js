import React from 'react';
import { FaCheckCircle, FaExchangeAlt, FaMoneyBillWave, FaTachometerAlt } from 'react-icons/fa';

const featuresData = [
  {
    icon: FaCheckCircle,
    title: 'Easy Booking',
    description: 'Streamlined booking process that saves time and reduces administrative burden.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Compare Providers',
    description: 'Access multiple service providers and compare offerings to find the best fit.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Clear Pricing',
    description: 'Transparent pricing structure with no hidden fees or surprises.',
  },
  {
    icon: FaTachometerAlt,
    title: 'Professional Dashboard',
    description: 'Manage all your bookings and orders through one intuitive control panel.',
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
    <div className="flex justify-center mb-4">
      <Icon className="text-4xl text-teal-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Your trusted B2B platform for seamless tourism service management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
