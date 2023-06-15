import React from "react";
import "../style/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
            <Link href="/start">Start</Link>
          </li>
          <li>
            <Link onClick={logout} href="/">
              Logout 
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </li>
          
          <li>
            <Link href="/contact">
              Contact
            <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar-list">
          <li>
            <Link href="/">Home
            <FontAwesomeIcon icon={faHome} /> 
            </Link>
            
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
            <FontAwesomeIcon icon={faSignInAlt} />
          </li>
          <li>
            <Link href="/contact">Contact</Link>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
