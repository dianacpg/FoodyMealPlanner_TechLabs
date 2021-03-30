import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="ian-logo">
          <Link to="/" className="navbar-logo">
            {" "}
            FOODYMEALPLANNER
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quotes" className="nav-links" onClick={closeMobileMenu}>
              QUOTES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plan" className="nav-links" onClick={closeMobileMenu}>
              MEAL PLAN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
