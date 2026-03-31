import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
// import Quote from "./Quote";
import MainPhoto from "./MainPhoto";
import How from "./How";
import Where from "./Where";
// import useWindowSize from "../../hooks/useWindowSize";
import firstImage from './fot (5)_trimmed.jpg';
import NewQuote from "./NewQuote";

const Content = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img1 = new Image();
  

    img1.src = firstImage;
    

    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === 1) {
        setIsLoaded(true);
      }
    };

    img1.onload = handleImageLoad;
   

    return () => {
      img1.onload = null;
     
    };
  }, []);

  return (

    <div className={styles.container}>
     {!isLoaded ? (
        <div style={{marginTop: "3rem"}}>Loading...</div>
      ) : ( <div>
              <div className={styles["content-container"]}>
      
              <MainPhoto />
              <NewQuote />
              {/* <Why /> */}
              </div>
      
        <How />
        <Where />
      
        </div>
      )}
    </div>
  );
};

export default Content;
