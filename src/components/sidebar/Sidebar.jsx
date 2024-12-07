import React from 'react';
import { auth, db } from "../firebase";
import styles from "./Sidebar.module.css"

const Sidebar = () => {

    async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.active}>
        <img src="/home.svg" alt="home"></img>
        Home</li>
        <li> 
        <img src="/notification.svg" alt="notification"></img>Notifications</li>
        <li>
        <img src="/heart (1).svg" alt="heart"></img>Shop</li>
        <li>
        <img src="/message (1).svg" alt="message"></img>Conversation</li>
        <li>
         <img src="/message.svg" alt="message"></img>Wallet</li>
        <li>
         <img src="/favorite.svg" alt="subscribe"></img>Subscription</li>
        <li>
         <img src="/profile.svg" alt="profile"></img>My Profile</li>
        <li>
         <img src="/setting.svg" alt="setting"></img>Settings</li>
         </ul>
         <ul className={styles.list}>        
         <button className={styles.logout} onClick={handleLogout}>
         <img src="/logout.svg" alt="logout"></img>  Logout</button>
      </ul>
      </div>
      <div className={styles.footer}>
      <p >2022©logo name </p> <p> Developed by ivan Infotech</p>
    </div>
    </div>
  );
};

export default Sidebar
