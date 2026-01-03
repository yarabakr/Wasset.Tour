import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import servicesData from '../data/servicesData';
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// Helper component for the Amenity Icons
const AmenityItem = ({ icon: Icon, name }) => (
  <div className="text-center p-4 border rounded-lg shadow-sm">
    <Icon className="text-3xl text-teal-600 mx-auto mb-2" />
    <p className="text-sm text-gray-600">{name}</p>
  </div>
);

// Helper component for the Specification List
const SpecificationItem = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-100">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

const ServiceDetail = () => {
  useScrollToTop();
  const { serviceId } = useParams();

  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="relative">
      <Header />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Section 1: Hero/Title Section - Matching the image's dark header */}
        <section className="relative h-64 flex items-end text-white" style={{ backgroundImage: `url(${service.gallery[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-teal-800 opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <p className="text-sm font-medium uppercase tracking-wider mb-1">Service Category</p>
            <h1 className="text-4xl font-extrabold mb-2">{service.title}</h1>
            <p className="text-lg font-light">{service.description}</p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* Section 2: About Service */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed">{service.details}</p>
            </div>

            {/* Section 3: Features & Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Features & Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Amenities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {service.amenities.map((amenity, index) => (
                  <AmenityItem key={index} icon={amenity.icon} name={amenity.name} />
                ))}
              </div>
            </div>

            {/* Section 5: Photo Gallery (Placeholder) */}
            <div className="mb-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
  <div className="grid grid-cols-3 gap-4">
    {service.gallery.map((thumb, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md">
        <img
          src={thumb}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>

            {/* Section 6: Booking and Specifications (Two Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Booking */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Book This Service</h2>
                <div className="p-6 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-teal-600">{service.booking.priceRange}</span>
                    <div className="flex items-center">
                      <FaStar className="text-amber-500 mr-1" />
                      <span className="font-semibold">{service.booking.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">({service.booking.reviews} reviews)</span>
                    </div>
                  </div>
                 <Link to="/contact" className="block w-full text-center py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-[#F7941D] transition duration-300">
  Contact for Booking
</Link>

                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Specifications</h2>
                <div className="p-6 border rounded-lg bg-gray-50">
                  {service.specifications.map((spec, index) => (
                    <SpecificationItem key={index} label={spec.label} value={spec.value} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Interested in Similar Services? (CTA) */}
        <section className="py-16 bg-teal-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Similar Services?</h2>
            <p className="text-lg mb-6">Explore more service providers or contact us to discuss your specific needs.</p>
            <div className="space-x-4">
             <Link to="/services" className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-[#F7941D] transition duration-300">
  Browse All Services
</Link>

              <Link to="/contact" className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-[#F7941D] transition duration-300">
  Request Custom Service
</Link>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
