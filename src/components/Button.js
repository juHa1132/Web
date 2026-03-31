import React from 'react';
import styles from './Button.module.css';

const Button = ({text, classes, onClick}) => {
  return (
    <button type="button" onClick={onClick ? onClick : null} className={styles["button"]} >
            {text}<p className={styles["button-icon"]}>❯</p>
     </button>
  )
}

export default Button;
