import React from "react";
import styles from "./MainPhoto.module.css";

const MainPhoto = () => {
  return (
    <section className={styles.container}>
      <div className={styles["img-and-text-container"]}>
        {/* <img alt="psycholog sportu" src="/images/fot1_trimmed.jpg" /> */}
        <div className={styles["flex-item"]}>
          {/* <Quote /> */}
          <div className={styles["list"]}>
            <h1 className={`${styles.title} ${"title"}`}>Kiedy zwrócić się do psychologa sportu?</h1>
            <div className={styles["grid-container"]}>
              <div className={styles["grid-item"]}>
                Kiedy sami nie potrafimy poradzić sobie ze stresem, lękiem,
                nadmiernymi emocjami, brakiem motywacji lub też z brakiem
                odpowiedniej koncentracji uwagi
              </div>
              <div className={styles["grid-item"]}>
                Kiedy ciężki trening nie przekłada się na sukcesy sportowe
              </div>
              <div className={styles["grid-item"]}>
                Kiedy trudności w naszym życiu osobistym oddziałują na naszą
                sportową pracę
              </div>
              <div className={styles["grid-item"]}>
                Kiedy po prostu chcemy podnieść poziom naszym umiejętności
                psychologicznych, by móc osiągnąć mistrzostwo!
              </div>
            </div>
            {/* <li alignLeft={true}>
                <span className="text">
                  Kiedy sami nie potrafimy poradzić sobie ze stresem, lękiem,
                  nadmiernymi emocjami, brakiem motywacji lub też z brakiem
                  odpowiedniej koncentracji uwagi
                </span>
              </li>
              <li alignLeft={true}>
                <span className="text">
                  Kiedy ciężki trening nie przekłada się na sukcesy sportowe
                </span>
              </li>
              <li alignLeft={true}>
                <span className="text">
                  Kiedy trudności w naszym życiu osobistym oddziałują na naszą
                  sportową pracę
                </span>
              </li>
              <li alignLeft={true}>
                <span className="text">
                  Kiedy po prostu chcemy podnieść poziom naszym umiejętności
                  psychologicznych, by móc osiągnąć mistrzostwo!
                </span>
              </li> */}
          </div>
          {/* <div class={styles["container-elipses"]}>
            <div class={styles.ellipse}>Tekst 1</div>
            <div class={styles.ellipse}>Tekst 2</div>
            <div class={styles.ellipse}>Tekst 3</div>
            <div class={styles.ellipse}>Tekst 4</div>
          </div> */}
        </div>
        <div className={styles["flex-item"]}>
          <div className={styles.photo}>
            <img src="/images/fot (5)_trimmed.jpg" alt="Aleksandra Adamiec" />
          </div>
        </div>
        {/* {!isMobile && <div className={styles['photo__side']}>
        
        {/* <p className={styles["photo__side-text"]}>Psycholog sportu </p>
        <p className={styles["photo__side-text"]}>Aleksandra Adamiec</p> */}
      </div>
    </section>
  );
};

export default MainPhoto;
