import React from "react";
// import MobileNavButton from './MobileNavButton';
import Logo from "./Logo";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import { motion, useScroll, useTransform } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import MobileNavButton from "./MobileNavButton";
import MobileNavbar from "./MobileNavbar";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  
  const { scrollY } = useScroll(0);
  
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 800;
  

  const heightOfHeader = useTransform(scrollY, [0, 120], ["120px", "100px"]);
  // const colorOfHeader = useTransform(scrollY, [0, 1], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const colorOfBackground = useTransform(scrollY, [0, 120], ["rgba(237, 237, 237 , 0)", "rgba(237 , 237 , 237 , 1)"]);
  
  return (
    <motion.div style={{ height: heightOfHeader, backgroundColor: colorOfBackground }} className={styles.header}>
      <div className={isMobile ? styles["header-container-mobile"] : styles["header-container"]}>
        <Logo/>
        {!isMobile && <Navigation />}
        {isMobile && <MobileNavbar />}
        {/* {isMobile && <MobileNavButton />} */}
      </div>
    </motion.div>
  );
};

export default Header;
