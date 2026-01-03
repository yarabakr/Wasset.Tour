import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold text-teal-400 mb-4">
             <img src={logo} alt="Wasset.Tour Logo" className="h-25 w-40 mr-2" />
            </Link>
            <p className="text-gray-400 text-sm">
              Connecting tourism companies with trusted service providers across the globe. Streamline your operations and grow your business.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-teal-400 transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Our Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/hotels" className="text-gray-400 hover:text-teal-400 transition">Hotels & Accommodation</Link></li>
              <li><Link to="/services/transportation" className="text-gray-400 hover:text-teal-400 transition">Transportation</Link></li>
              <li><Link to="/services/tour-guides" className="text-gray-400 hover:text-teal-400 transition">Tour Guides</Link></li>
              <li><Link to="/services/restaurants" className="text-gray-400 hover:text-teal-400 transition">Restaurants & Dining</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Contact Us</h5>
            <div className="space-y-3 text-sm">
              <p className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-teal-400" />
              Wasset.Tour Main Headquarters, Damascus, Syrian Arab Republic
              </p>
              <p className="flex items-center text-gray-400">
                <FaPhone className="mr-3 flex-shrink-0 text-teal-400" />
                00000000000
              </p>
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 flex-shrink-0 text-teal-400" />
                info@travelagency.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Travel.Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
