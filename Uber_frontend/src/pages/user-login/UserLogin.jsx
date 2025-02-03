import React from "react";
import styles from "./UserLogin.module.css";

const UserLogin = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>What's your email</h3>
        <input 
          type="email" 
          name="email" 
          id="email" 
          className={styles.input}
          required 
        />
        <h3 className={styles.title}>Enter password</h3>
        <input 
          type="password" 
          name="password" 
          id="password" 
          className={styles.input}
          required 
        />
        <button className={styles.button}>LogIn</button>
      </form>
    </div>
  );
};

export default UserLogin;