import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container content-container">
      <ul className="navbar">
        <li className="nav-category">
          <NavLink to="/blouses">Bluzki</NavLink>
        </li>

        <li className="nav-category">
          <NavLink to="/dresses">Sukienki</NavLink>
        </li>
        <li className="nav-category">
          <NavLink to="/trousers">Spodnie</NavLink>
        </li>
        <li className="nav-category">
          <NavLink to="/jackets">Kurtki i płaszcze</NavLink>
        </li>
        <li className="nav-category">
          <NavLink to="shoes">Buty</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
