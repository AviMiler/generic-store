import { NavLink } from "react-router-dom";
import styles from "../style/TopMenu.module.css";

function TopMenu() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.homeButton} ${styles.activeHomeButton}`
                : styles.homeButton
            }
          >
            <img
              src={require("../assets/store_black_logo.png")}
              alt="Logo"
              className={styles.logo}
            />
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? `${styles.NavLink} ${styles.active}` : styles.NavLink
            }
          >
            categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.NavLink} ${styles.active}` : styles.NavLink
            }
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.NavLink} ${styles.active}` : styles.NavLink
            }
          >
            contact
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? `${styles.cartNav} ${styles.activeCartNav}`
                : styles.cartNav
            }
          >
            <img
              src={require("../assets/cart_black_img.png")}
              alt="cart logo"
              className={styles.logo}
            />
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default TopMenu;
