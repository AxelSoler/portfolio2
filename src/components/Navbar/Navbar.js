import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="developer">
      <h2 className="name">Axel Soler</h2>
      <h3>Full Stack Developer</h3>
    </div>
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
