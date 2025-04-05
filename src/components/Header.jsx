import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header>
      <h1>ShopEase</h1>
      <nav>
        <ul>
          <li><Link to="/products">Home</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
