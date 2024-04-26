import React from 'react';
import styles from '../css/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="./logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.navItems}>
        <a href="#" className={styles.navItem}>Graficas</a>
        <a href="#" className={styles.navItem}>Sensores</a>
        <a href="#" className={styles.navItem}>Configuraciones</a>
        <a href="#" className={styles.navItem}>Ayuda</a>
      </div>
    </nav>
  );
}

export default Navbar;
