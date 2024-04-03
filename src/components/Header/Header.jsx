import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <>
      <header>{children || <h1>My React App</h1>}</header>
      <nav className={styles.header}>
        <ul>
          <li>
            <NavLink className={styles.link} to="" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={styles.link} to="/produtos">
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
