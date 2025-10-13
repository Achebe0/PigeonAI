import PinGeoLogo from '../assets/PinGeo_logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function NavBar() {
  return (
    <header className="navbar">
      {/* Logo on far left */}
      <a href="#" className="logo">
        <img src={PinGeoLogo} alt="Logo" height="10px" />
      </a>

      {/* Links on far right */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Favourites</a>
      </nav>
    </header>
  );
}

export default NavBar;
