import React from 'react';
import './Navbar.css'; // Include CSS for styling

const Navbar = () => {
  return (
    <div className="navbar">
      {'NAVBAR'.split('').map((letter, index) => (
        <span key={index} className="navbar-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Navbar;