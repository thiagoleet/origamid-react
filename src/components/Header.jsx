import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <>
      <header>{children || <h1>My React App</h1>}</header>
      <nav>
        <NavLink className="nav-link" to="" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/sobre">
          Sobre
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
