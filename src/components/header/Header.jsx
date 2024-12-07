import React from 'react';
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <img src="/search.svg" alt="search" className={styles.icon} />
        <input type="text" placeholder="Search here..." className={styles.searchBox} />
        <img src="/filter.svg" alt="filter" className={styles.icon} />
        Filters
      </div>
    </div>
  );
}

export default Header;
