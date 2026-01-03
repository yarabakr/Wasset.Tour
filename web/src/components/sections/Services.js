import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import { FaCheckCircle } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 border border-gray-200">
      {/* Replace icon with image */}
      <div className="relative h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <FaCheckCircle className="text-teal-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="inline-block px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
