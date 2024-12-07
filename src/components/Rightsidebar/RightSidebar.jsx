import React from "react";
import styles from "./RightSidebar.module.css";

function RightSidebar() {
  const profiles = [
    { name: "Thomas Edward", handle: "@thewildwithyou", image: "art1.png",dp:"./artist1.png" },
    { name: "Chris Doe", handle: "@thewildwithyou", image: "art2.png",dp:"./artist2.png" },
    { name: "Emilie Jones", handle: "@thewildwithyou", image: "art3.png",dp:"./artist.png" },
    { name: "Jessica Williams", handle: "@thewildwithyou", image: "art4.png",dp:"./artis3.png" },
     { name: "Hellen Williams", handle: "@thewildwithyou", image: "art5.png",dp:"./artist.png" },
  ];

  return (
    <div className={styles.rightSidebar}>
      <div className={styles.top}>Become a Seller</div>
      <div className={styles.sidebarTitle}>
      <span style={{color:"black"}}>Artists</span>
      <span style={{color:"#8D8D8D"}}>Photographers</span>
      </div>
  <div className={styles.profileList}>
        {profiles.map((profile, index) => (
          <div key={index} className={styles.card}>
            <img src={profile.image} alt="background" className={styles.background} />
            <div className={styles.overlay}>
              <div className={styles.profileInfo}>
                <div className={styles.dpWrapper}>
                  <img src={profile.dp} alt="profile" className={styles.profilePic} />
                  <span className={styles.statusDot}></span>
                </div>
                <div className={styles.textInfo}>
                  <h4 className={styles.name}>{profile.name}</h4>
                  <p className={styles.handle}>{profile.handle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
