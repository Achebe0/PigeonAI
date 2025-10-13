import PinGeoLogo from '../assets/PinGeo_logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'; // can change to solid if you prefer

function NavBar() {
  return (
    <header className="navbar">
      <img src={PinGeoLogo} alt="Logo" className="logo" height="120px" />

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Favourites</a>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </nav>
    </header>
  );
}

export default NavBar;
