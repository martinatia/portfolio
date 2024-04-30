import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const  [menuOpen, setMenuOpen ]= useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/portfolio">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() =>setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
          <li>
            <a href="#about" className="links">Acerca de</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          {/* <li>
            <a href="#proyects">Proyectos</a>
          </li> */}
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
