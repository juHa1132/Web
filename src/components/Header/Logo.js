import React from 'react';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

const Logo = () => {

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 800;
  

  return (
    <div className={styles.logo}>
      {!isMobile && <NavLink to="/"><img src="/images/logo_blue_small.png" alt="logo" /></NavLink>}
      {isMobile && <img src="/images/logo_blue_small.png" alt="logo" />}
    </div>
  )
}

export default Logo;

