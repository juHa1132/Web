import React from "react";

import styles from "./MobileNavButton.module.css";

const MobileNavButton = () => {
  return (
    <div>
      <button className={styles["mobile-nav-button"]}>
        <span className={styles["button-dashboard"]}></span>
        <span className={styles["button-dashboard"]}></span>
        <span className={styles["button-dashboard"]}></span>
      </button>
    </div>
  );
};

export default MobileNavButton;
