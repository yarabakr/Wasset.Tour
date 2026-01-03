import React from 'react';

const Button = ({ children, primary, secondary, className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out shadow-lg';
  let colorStyles = '';

  if (primary || secondary) {
    // Unified style for both primary and secondary buttons
    colorStyles = 'bg-teal-600 text-white hover:bg-[#F7941D]';
  } else {
    // Default style for buttons in the Hero section
    colorStyles = 'bg-teal-600 text-white hover:bg-[#F7941D]';
  }

  return (
    <button
      className={`${baseStyles} ${colorStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
