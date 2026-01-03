import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import { FaMapMarkerAlt,FaClock, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import contactHero from '../assets/contact1.jpg';
// Component for Contact Form
const ContactForm = () => (
  <div className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-teal-600">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name *</label>
          <input type="text" id="company" name="company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Company Name" required />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name *</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Your Name" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="your.email@mail.com" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="+963 XX XXX XXXX" required />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="Tell us about your needs and how we can help." required></textarea>
      </div>
      <button
  type="submit"
  className="w-full py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white bg-teal-600 hover:bg-[#F7941D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7941D] transition duration-300"
>
  Send Message
</button>

    </form>
  </div>
);

// Component for Contact Information
const ContactInfo = () => (
  <div className="p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
    <div className="space-y-6">
      <div className="flex items-start">
        <FaMapMarkerAlt className="text-2xl text-teal-600 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Office Address</h3>
          <p className="text-gray-600">Damascus, Syria, Old City District, Syria</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaEnvelope className="text-2xl text-teal-600 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">support@wasset.tour</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaPhone className="text-2xl text-teal-600 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">+963 11 123 4567</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaClock className="text-2xl text-teal-600 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
          <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 5:00 PM (Syria Time)</p>
        </div>
      </div>
    </div>
  </div>
);

// Component for Follow Us
const FollowUs = () => (
  <div className="p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
    <div className="flex space-x-4">
     <a href="#" className="p-3 rounded-full bg-teal-600 text-white hover:bg-[#F7941D] transition duration-300"><FaFacebookF /></a>
<a href="#" className="p-3 rounded-full bg-teal-600 text-white hover:bg-[#F7941D] transition duration-300"><FaInstagram /></a>
<a href="#" className="p-3 rounded-full bg-teal-600 text-white hover:bg-[#F7941D] transition duration-300"><FaTwitter /></a>
<a href="#" className="p-3 rounded-full bg-teal-600 text-white hover:bg-[#F7941D] transition duration-300"><FaLinkedinIn /></a>

    </div>
  </div>
);

// Component for Map Placeholder
const MapPlaceholder = () => (
  <div className="h-96 rounded-xl shadow-lg overflow-hidden">
    <MapContainer center={[33.5138, 36.2765]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      
    </MapContainer>
  </div>
);


const Contact = () => {
  useScrollToTop();

  return (
    <div className="relative">
      <Header />
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Section 1: Hero Section - Matching the image's dark header */}
          <section className="relative h-[90vh] flex items-center justify-center text-white">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHero})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6 font-[Playfair_Display]">
              Contact <span className="text-[#C6943A]">Us</span>
            </h1>

            <p className="text-xl md:text-2xl font-light">
              Reach out to us for assistance, collaboration opportunities, or service information — our team is ready to support you.
            </p>
          </div>
        </section>


        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Right Column: Info and Follow */}
            <div className="lg:col-span-1 space-y-10">
              <ContactInfo />
              <FollowUs />
            </div>
          </div>
        </section>

        {/* Section 3: Map Placeholder */}
        <section className="pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <MapPlaceholder />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
