import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/month">Monthly View</Link>
    <Link to="/week">Weekly View</Link>
  </nav>
);

export default NavBar;
