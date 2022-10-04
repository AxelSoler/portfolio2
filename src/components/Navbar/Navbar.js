import { NavLink } from 'react-router-dom';
import logo from '../../img/logo/default-monochrome-white.svg';
import './Navbar.css';

const Navbar = () => {
  const toggleMobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navLogo" />
      <ul className="nav-menu">
        <li className="navItem">
          <NavLink
            className="navLink"
            to="/"
          >
            About
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            className="navLink"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            className="navLink"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        type="button"
        className="hamburger"
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
