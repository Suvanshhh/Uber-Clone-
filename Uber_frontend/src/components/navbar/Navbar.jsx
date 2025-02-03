import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img 
          src="https://i.ibb.co/gLZjSGMX/Uber-Logo.png" 
          alt="Uber Logo" 
          className={styles.logo} 
        />
      </div>

      {/* Hamburger Menu */}
      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <a href="#" className={styles.menuItem}>Home</a>
          <a href="#" className={styles.menuItem}>Profile</a>
          <a href="#" className={styles.menuItem}>Settings</a>
          <a href="#" className={styles.menuItem}>Logout</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;