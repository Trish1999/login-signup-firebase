import React, { Component } from 'react'
import styles from "./Home.module.css";
import Sidebar from '../sidebar/Sidebar';
import RightSidebar from '../Rightsidebar/RightSidebar';
import MainContent from '../main/Main';

const Home = () => {
  return (
    <div className={styles.app}>
      <div class={styles.leftPanel}><Sidebar /></div>
       <div class={styles.mainPanel}> <MainContent /></div>
      <div class={styles.rightPanel}><RightSidebar /></div>
    </div>
  );
};

export default Home
