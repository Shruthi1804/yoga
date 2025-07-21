import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#6a1b9a', padding: '10px' }}>
      <span style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>Yoga Instructor Application</span>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/instructors" style={{ color: 'white' }}>Instructor Details</Link>
    </nav>
  );
};

export default NavBar;
