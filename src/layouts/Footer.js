import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content-container">
        <div className="footer-category-container">
          <div className="footer-category">
            <h2 className="category-header">Obsługa klienta</h2>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li className="footer-list-item">
                <Link to="delivery">Dostawa</Link>
              </li>
              <li className="footer-list-item">
                <Link to="returns">Zwroty</Link>
              </li>
            </ul>
          </div>
          <div className="footer-category">
            <h2 className="category-header">O nas</h2>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link to="/about"> O marce</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/regulations">Regulamin sklepu</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sm">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookSquare} className="sm-icon" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} className="sm-icon" />
          </a>
          <a href="https://www.tiktok.com">
            <FontAwesomeIcon icon={faTiktok} className="sm-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
