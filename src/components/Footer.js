import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles['copy-rights']}>© Psycholog Sportu Aleksandra Adamiec</p>
      <p className={styles['copy-rights']}>All Rights Reserved</p>
    </div>
  )
}

export default Footer;
