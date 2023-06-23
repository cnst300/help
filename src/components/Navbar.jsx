import React from "react";
import "../style/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      {auth ? (
        <ul className="navbar-list">
          <li>
            <a href="/start">Start</a>
          </li>
          <li>
            <a onClick={logout} href="/">
              Logout 
              <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
          </li>
          
          <li>
            <a href="/contact">
              Contact
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-list">
          <li>
            <a href="/">Home
            <FontAwesomeIcon icon={faHome} /> 
            </a>
            
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
            <FontAwesomeIcon icon={faSignInAlt} />
          </li>
          <li>
            <a href="/contact">Contact</a>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
