import React from "react";
import styles from "./Offer.module.css";
import WhyCard from "../Content/WhyCard";
import How from "../Content/How";
import useWindowSize from "../../hooks/useWindowSize";

const Offer = () => {

  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1200;

  return (
    <div className={styles.offer}>
              <h1 className={`${"title"} ${styles.title}`}>Co mogę zaproponować Ci w ramach sesji?</h1>

      <div className={styles.container} >
      {!isMobile && <div className={styles.svg} >
        <img className={styles.svg} src="/svg/psycholog.svg" alt="" />
        </div>}
      <div className={styles.content}>  
      <div className={styles.technics}>
        <ul className={styles["technics-list"]}>
         
          <WhyCard><span className="text">Trening relaksacyjny</span></WhyCard>
          <WhyCard><span className="text">Trening regulacji pobudzenia</span></WhyCard>
          <WhyCard><span className="text">Praca nad wyznaczaniem celów</span></WhyCard>
          <WhyCard><span className="text">Praca nad radzeniem sobie ze stresem i emocjami</span></WhyCard>
          <WhyCard><span className="text">Trening wyobrażeniowy</span></WhyCard>
          <WhyCard><span className="text">Trening koncentracji uwagi</span></WhyCard>
         
        </ul>
        <p className={styles['technics-more-info']}>
          Wszystko dostosowane do Twoich indywidualnych potrzeb, które określam
          na podstawie szczegółowej diagnozy, ale także do uprawianej dyscypliny
          i wieku.
        </p>
      </div>
      
      {/* <div className={styles.options}>
        <div className={styles["offer-item"]}>Zajęcia indywidualne</div>
        <div className={styles["offer-item"]}>Współpraca z zespołem</div>
        <div className={styles["offer-item"]}>Spotkania online</div>
        <div className={styles["offer-item"]}>Wykłady i warsztaty</div>
      </div> */}
      </div>
      {!isMobile && <div className={styles.svg} >
        <img className={styles.svg} src="/svg/klient.svg" alt="" />
        </div>}
        </div>
      <div style={{zIndex: 5}}>
      <How />
      </div>
    </div>
  );
};

export default Offer;
