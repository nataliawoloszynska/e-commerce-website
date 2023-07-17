import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header content-container">
      <div className="nav-menu">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </div>
      <div className="user-menu">
        <Link to="/favourite">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/user">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/cart">
          {" "}
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
