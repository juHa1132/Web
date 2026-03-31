import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles["navigation__list"]}>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="/omnie"  className={({isActive}) => isActive ? styles.active : undefined}>O mnie</NavLink>
        </li>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="/oferta" className={({isActive}) => isActive ? styles.active : undefined} >Oferta</NavLink>
        </li>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="/nietylkosport" className={({isActive}) => isActive ? styles.active : undefined}>Nie tylko dla sportowców</NavLink>
        </li>
        {/* <li className={styles["navigation__list-item"]}>
          <NavLink to="/linki" className={({isActive}) => isActive ? styles.active : undefined}>Linki</NavLink>
        </li> */}
        <li className={styles["navigation__list-item"]}>
          <NavLink to="/kontakt" className={({isActive}) => isActive ? styles.active : undefined}>Kontakt</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
