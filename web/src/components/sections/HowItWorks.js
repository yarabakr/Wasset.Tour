import React from 'react';
import { FaUserPlus, FaSearch, FaCheckCircle, FaClipboardList } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    icon: FaUserPlus,
    title: 'Registration',
    description: 'Create your account as a tourism company or service provider on our platform.',
  },
  {
    number: 2,
    icon: FaSearch,
    title: 'Search Services',
    description: 'Browse and compare service providers based on your specific travel needs.',
  },
  {
    number: 3,
    icon: FaCheckCircle,
    title: 'Book & Confirm',
    description: 'Make bookings directly through the platform with instant confirmation.',
  },
  {
    number: 4,
    icon: FaClipboardList,
    title: 'Manage Orders',
    description: 'Track and manage all your bookings through our intuitive dashboard.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to connect with service providers and manage your tourism business.</p>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between items-center">
          {/* Steps */}
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center max-w-xs p-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-500 text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {/* Arrow/Separator */}
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-300 mx-4 mt-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
