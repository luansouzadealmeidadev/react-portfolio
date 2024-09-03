import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {i18next} from '../../../src/translate/i18n'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      {i18next.t('titles.app')}
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
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about"> {i18next.t('navbar.about')}</a>
          </li>
          <li>
            <a href="#experience">{i18next.t('navbar.experience')}</a>
          </li>
         
          <li>
            <a href="#contact">{i18next.t('navbar.contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
