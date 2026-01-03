import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    initials: 'AS',
    name: 'Ahmad Suleiman',
    title: 'Damascus Tours Agency',
    quote: '“Travel.Agency has transformed how we manage our service bookings. The platform is intuitive and saves us hours every week.”',
  },
  {
    initials: 'LK',
    name: 'Layla Khoury',
    title: 'Heritage Hotels Group',
    quote: '“We\'ve connected with more tourism companies than we ever thought possible. Highly recommended!”',
  },
  {
    initials: 'MN',
    name: 'Marwan Nassar',
    title: 'Global Transport Co.',
    quote: '“Comparing services has never been easier. The platform is reliable and highly recommended to all tourism professionals.”',
  },
];

const TestimonialCard = ({ initials, name, title, quote }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 text-white text-xl font-bold mr-4">
        {initials}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <div className="flex text-amber-400 mb-3">
      {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
    </div>
    <p className="text-gray-600 italic">{quote}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Partners Say</h2>
          <p className="text-xl text-gray-600">Trusted by tourism companies and service providers across the globe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
