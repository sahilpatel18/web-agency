import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className="navbar-icon" />
          Apace
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
    
          <li className="nav-btn">
            {button ? (
              <Link to="/get-quote" className="btn-link">
                <Button buttonStyle="btn--outline">Get Free Quote</Button>
              </Link>
            ) : (
              <Link to="/get-quote" className="btn-link">
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  Get Free Quote
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
