import React from 'react';
import { FaSearch, FaHandshake, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const steps = [
  { icon: FaSearch, title: '1. Discovery', description: 'We analyze your business needs and identify the best service matches from our network.' },
  { icon: FaHandshake, title: '2. Partnership', description: 'A dedicated account manager facilitates the connection and onboarding process.' },
  { icon: FaCheckCircle, title: '3. Execution', description: 'Seamless booking and management of services through our integrated platform.' },
  { icon: FaChartLine, title: '4. Growth', description: 'Continuous support and performance tracking to ensure your business thrives.' },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Simple Partnership Process</h2>
          <p className="text-xl text-gray-600">From initial contact to successful service delivery, we guide you every step of the way.</p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                <div className={`w-full lg:w-5/6 p-6 rounded-xl shadow-lg bg-gray-50 border-l-4 border-teal-600 ${index % 2 === 0 ? 'lg:text-right lg:border-l-0 lg:border-r-4' : ''}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} mb-4`}>
                    <div className={`p-4 rounded-full bg-teal-600 text-white text-2xl shadow-xl ${index % 2 === 0 ? 'lg:order-2 lg:ml-4' : 'lg:order-1 lg:mr-4'}`}>
                      <step.icon />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
