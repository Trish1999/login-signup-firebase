import React from 'react';
import styles from './Post.module.css';

const Post = ({dp, userName, userHandle, content, image, likes, comments, shares }) => {
  return (
    <div className={styles.postCard}>
     <div className={styles.top}>
     <div className={styles.dpSection}>
      <img className={styles.dp} src={dp} alt="dp" />
      <div className={styles.postHeader}>
        <h4>{userName}</h4>
        <span>{userHandle}</span>
      </div>
      </div>
      <img className={styles.menu} src="/menu.png" alt="option" />
      </div>
      <p>{content} <a style={{color:"#FF5E8A"}}>Read More</a></p>
      <img className={styles.post} src={image} alt="Post" />
      <hr/>
      <div className={styles.postStats}>
        <span><img src="/heart.svg" alt="like"></img> {likes}</span>
        <span><img src="/comment.svg" alt="comment"></img>{comments}</span>
        <span><img src="/share.svg" alt="like"></img>{shares}</span>
      </div>
    </div>
  );
};

export default Post;
