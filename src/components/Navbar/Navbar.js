import { NavLink } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/about">
      <img className="logo" src={logo} alt="logo" />
    </NavLink>
    <ul className="navMenu">
      <NavLink
        className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
        id="aboutLink"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
        id="projectsLink"
        to="/projects"
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
        id="contactLink"
        to="/contact"
      >
        Contact
      </NavLink>
    </ul>
  </nav>
);

export default Navbar;
