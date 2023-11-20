// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/products">Other Products</Link>
        </li>
        <li>
          <Link to="/addnewproducts">Add New Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
