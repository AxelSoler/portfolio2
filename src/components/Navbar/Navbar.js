import logo from '../../img/vector/default-monochrome-white.svg';
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
      <img src={logo} alt="logo" className="nav-logo" />
      <ul className="nav-menu">
        <li className="nav-item">
            Portfolio
        </li>
        <li className="nav-item">
            About
        </li>
        <li className="nav-item">
            Contact
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
}

export default Navbar;
