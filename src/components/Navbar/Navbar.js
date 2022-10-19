import logo from '../../img/logo/logo.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <img className="logo" src={logo} alt="logo" to="#about" />
    <ul className="navMenu">
      <a
        id="aboutLink"
        href="#about"
      >
        About
      </a>
      <a
        id="projectsLink"
        href="#work"
      >
        Projects
      </a>
      <a
        id="contactLink"
        href="#contact"
      >
        Contact
      </a>
    </ul>
  </nav>
);

export default Navbar;
