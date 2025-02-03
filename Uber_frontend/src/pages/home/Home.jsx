import React from "react";
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle button click
  const handleButtonClick = () => {
    navigate("/user-login"); // Navigate to /user-login route
  };

  return (
    <div className={styles.container}>
      {/* Uber Logo */}
      <img 
        src="https://i.ibb.co/gLZjSGMX/Uber-Logo.png" 
        alt="Uber Logo" 
        className={styles.logo} 
      />

      {/* Full-screen background image handled by CSS */}
      <div className={styles.imageWrapper}>
        <div className={styles.backgroundImage}></div>
      </div>

      {/* Overlay content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Get Started with Uber</h1>
        <button className={styles.button} onClick={handleButtonClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
