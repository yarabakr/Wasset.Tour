import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../../assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'LoginRegister', path: '/LoginRegister' },

];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-teal-600">
          <img src={logo} alt="Wasset.Tour Logo" className="h-20 w-auto mr-2" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <Link to="/contact">
          <Button
            primary
            className="hidden md:block bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-[#F7941D]"
          >
            Join as Partner
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-teal-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-teal-600 transition duration-150 ease-in-out font-medium"
                onClick={() => setIsMobileMenuOpen(false)} // close menu after click
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                primary
                className="w-full bg-teal-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-[#F7941D]"
              >
                Join as Partner
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
