import React from 'react';
import { FaHotel, FaBus, FaMapMarkedAlt, FaUtensils, FaPlane, FaShip } from 'react-icons/fa';

const categories = [
  { icon: FaHotel, title: 'Luxury Stays', description: 'Hand-picked 5-star hotels and resorts.' },
  { icon: FaBus, title: 'Private Transfers', description: 'Comfortable and reliable ground transportation.' },
  { icon: FaMapMarkedAlt, title: 'Local Experts', description: 'Certified guides for immersive cultural tours.' },
  { icon: FaUtensils, title: 'Gourmet Dining', description: 'Exclusive reservations at top-rated restaurants.' },
  { icon: FaPlane, title: 'Flight Booking', description: 'Seamless air travel arrangements and ticketing.' },
  { icon: FaShip, title: 'Cruise Packages', description: 'All-inclusive packages for sea and river cruises.' },
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Explore Our Service Categories</h2>
          <p className="text-xl text-gray-600">A diverse portfolio to cover every aspect of your client's journey.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center border-b-4 border-transparent hover:border-teal-600">
              <category.icon className="text-5xl text-teal-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
