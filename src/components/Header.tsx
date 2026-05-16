import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Menu Management</Link></li>
          <li><Link to="/promotions">Promotions</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;