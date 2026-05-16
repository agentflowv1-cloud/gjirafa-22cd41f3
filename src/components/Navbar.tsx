import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}

export default Navbar;