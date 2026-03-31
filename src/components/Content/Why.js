import React from "react";
import styles from "./Why.module.css";
import WhyCard from "./WhyCard";
import useWindowSize from "../../hooks/useWindowSize";

const Why = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1000;

  return (
    <section className={styles.offers}>
      <div className={styles["offers-container"]}></div>
      <h1 className={`${"title"} ${styles["offers-title"]}`}>
        Kiedy zwrócić się do psychologa sportu?
      </h1>
      <ul className={styles["offers-container"]}>
        {!isMobile && (
          <div className={styles.empty}>
            {/* <img src="/head.svg" alt="performance psychology" /> */}
            <img src="/images/fot (3).jpg" alt="performance psychology" />
          </div>
        )}
        <div className={styles["offers-list"]}>
          <div className={styles["background-image"]}>
            <img src="/background.svg" alt="" />
          </div>
          <WhyCard alignLeft={true}>
            <span className="text">Kiedy sami nie potrafimy poradzić sobie ze stresem, lękiem,
            nadmiernymi emocjami, brakiem motywacji lub też z brakiem
            odpowiedniej koncentracji uwagi</span>
          </WhyCard>
          <WhyCard alignLeft={true}>
          <span className="text">Kiedy ciężki trening nie przekłada się na sukcesy sportowe</span>
          </WhyCard>
          <WhyCard alignLeft={true}>
          <span className="text">Kiedy trudności w naszym życiu osobistym oddziałują na naszą
            sportową pracę</span>
          </WhyCard>
          <WhyCard alignLeft={true}>
          <span className="text">Kiedy po prostu chcemy podnieść poziom naszym umiejętności
            psychologicznych, by móc osiągnąć mistrzostwo!</span>
          </WhyCard>
          {isMobile && (
            <div className={styles.empty}>
              {/* <img src="/head.svg" alt="performance psychology" /> */}
              <img src="/images/fot (3).jpg" alt="performance psychology" />
            </div>
          )}

          <WhyCard noDecoration={true}>
          <span className="text">Do psychologa sportu może zgłosić się
            <span style={{ fontWeight: 600 }}> każda osoba</span> - niezależnie
            od wieku, uprawianej dyscypliny, swojej roli w sporcie (i nie tylko
            w sporcie) - zarówno zawodnik, trener, jak i rodzic.</span>
          </WhyCard>
        </div>
        {/*           
          <img src="/runner.svg" alt="svg" />
          <li className={styles["offers-item"]}>
            Kiedy ciężki trening nie przekłada się na sukcesy sportowe;
          </li>
          <img src="/hardships.svg" alt="svg" />

          <li className={styles["offers-item"]}>
            Kiedy trudności w naszym życiu osobistym oddziałują na naszą
            sportową pracę
          </li>

          <img src="/succes.svg" alt="svg" />

          <li className={styles["offers-item"]}>
            Kiedy po prostu chcemy podnieść poziom naszym umiejętności
            psychologicznych, by móc osiągnąć mistrzostwo!
          </li> */}
      </ul>
    </section>
  );
};

export default Why;
