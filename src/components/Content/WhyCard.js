import React from "react";
import styles from "./Why.module.css";

const WhyCard = ({ noDecoration, children, alignLeft }) => {


  
  const classesCenter = {
    fontSize: "20px",
  }

  const classesLeft  = {
    fontSize: "20px",
    textAlign: "left",
  }

  const classes = alignLeft ? classesLeft : classesCenter;


  
  return (
    <div className={styles["offers-item"]}>
      <li style={classes}>
        {!noDecoration && (
          <span className={styles["offers-item__decoration"]}>
            <img src="/svg/ptaszek.svg" alt="" />
          </span>
        )}
        {children}
      </li>
    </div>
  );
};

export default WhyCard;
