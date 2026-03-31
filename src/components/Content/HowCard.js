import React, {  useState } from "react";
import styles from "./How.module.css";
import { AnimatePresence, motion } from "framer-motion";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const HowCard = ({extendedInfo, src, title, text, extraClass, extraClassHover}) => {
  const [isHovered, setisHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1000;
  
  

  function handleHoverEffect() {
    if(isMobile){
      return;
    }
    setisHovered(true);
  }

  function handleHoverDisappear() {
    if(isMobile){
      return;
    }
    setisHovered(false);
  }

  function handleClick () {
    if(isMobile){
      return;
    }
    dispatch({ type: 'howCardPackage', title: title, src: src, text: text, extendedInfo: extendedInfo});
    navigate("/kontakt");
  }

  return (
<>
        <div
          className={` ${styles.item} ${styles[`${extraClass}`]}`}
          onMouseEnter={handleHoverEffect}
          onMouseLeave={handleHoverDisappear}
          onClick={handleClick}
        >
          <div className={styles["box-shadow__overlay"]}></div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${styles["box-shadow"]} ${styles[`${extraClassHover}`]}`}
              ></motion.div>
            )}
          </AnimatePresence>
          
          <h3>{title}</h3>
          <img src={src} alt={title} />
          <p className="text">
           {text}
          </p>
        </div>
        
</>
  );
};

export default HowCard;
