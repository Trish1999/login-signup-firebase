import React from 'react'
import styles from "./Main.module.css";
import Post from '../posts/Post';
import Header from "../header/Header";
import Slider from '../slider/Slider';

function Main() {
  return (
    <div className={styles.mainContent}>
     <Header />
      <Post
        dp="/dp1.png"
        userName="Lara Leones"
        userHandle="@thewallart"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/post1.png"
        likes=" 9.8K"
        comments=" 8.6K"
        shares="  7.2K"
      />

        <Post
        dp="dp2.png"
        userName="Thomas J."
        userHandle="@thecustomcreater"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        image="/poster2.jpg"
        likes=" 9.8K"
        comments=" 8.6K"
        shares=" 7.2K"
      />
      <Slider/>
    </div>
  );
}

export default Main;
