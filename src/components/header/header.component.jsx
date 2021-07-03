import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <nav className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </nav>
  </header>
);

export default Header;

// Using it in app.js above the switch component so no matter the specified route it will be mounted and then rendered
