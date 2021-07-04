import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out {currentUser.displayName}
        </div>
      ) : (
        <Link className="option" to="/signin">
          sign in
        </Link>
      )}
    </nav>
  </header>
);

export default Header;

// Using it in app.js above the switch component so no matter the specified route it will be mounted and then rendered
