import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="developer">
      <h2 className="name">Axel Soler</h2>
      <h3>Full Stack Developer</h3>
    </div>
    <ul className="navMenu">
      <li className="navItem">
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
          id="aboutLink"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
          id="projectsLink"
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}
          id="contactLink"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
