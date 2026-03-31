import React from "react";
import styles from "./Cv.module.css";
import useWindowSize from "../../hooks/useWindowSize";

const Cv = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1000;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {!isMobile && (
          <div className={styles["photos-wrapper"]}>
            <div className={styles["wrapper-photo-helper"]}>
              <div className={styles["wrapper-inside"]}>
                <h1 className={styles.title}>O mnie</h1>
                <div className={styles.photo}>
                  <img src="/images/fot (1).jpg" alt="Aleksandra Adamiec" />
                </div>
                <div className={styles["photo-bottom"]}>
                  <img src="/images/fot (10).jpg" alt="Aleksandra Adamiec" />
                </div>
              </div>
            </div>
          </div>
        )}
        {isMobile && <h1 className={styles.title}>O mnie</h1>}
        <div className={`${styles.block} ${styles.block1}`}>
          <div className={styles["text-area"]}>
            <p className="text">
              Nazywam się Aleksandra Adamiec. Ukończyłam Psychologię Stosowaną
              na Uniwersytecie Jagiellońskim w Krakowie. W 2011 r. na Akademii
              Wychowania Fizycznego w Krakowie zrobiłam specjalizację z zakresu
              psychologii sportu. Jestem certyfikowanym psychologiem sportu
              Polskiego Towarzystwa Psychologicznego II klasy.
            </p>
          </div>
        </div>
        {isMobile && (
          <div className={styles.photo}>
            <img src="/images/fot (1).jpg" alt="Aleksandra Adamiec" />
          </div>
        )}
      </div>
      <div className={styles.wrapper2}>
        <div className={`${styles.block} ${styles.block2}`}>
          <div className={styles.empty}></div>
          <div className={styles["text-area"]}>
            <p className="text">
              Od 2011 do 2013 roku współpracowałam z drużyną kobiecej siatkówki
              – AGH GALECO WISŁA KRAKÓW. Prowadziłam szkolenia i konsultacje
              m.in. dla Polskiego Związku Muay Thai oraz Polskiego Związku
              Sportu Osób Niepełnosprawnych. Współpracuję z wieloma zawodnikami
              - zarówno ze sportów indywidualnych (m.in. tenis, lekkoatletyka,
              sporty motorowe, sporty walki, pływanie), jak i sportów
              drużynowych (piłka nożna, siatkówka) oraz z muzykami. W
              poprzednich sezonach współpracowałam z dwiema drużynami
              siatkarskimi, z polską kadrą w biegach narciarskich oraz z
              ektraklasową drużyną w piłce nożnej - Wisłą Kraków. Byłam
              członkiem sztabu kadry kobiet w kajak-polo, która w tym roku
              zdobyła II miejsce na Mistrzostwach Świata. Pracowałam także jako
              psycholog sportu i koordynator działu psychologii sportu w
              Akademii Piłkarskiej Wisła Kraków.
            </p>
          </div>
        </div>
        {isMobile && (
          <div className={styles.photo}>
                  <img src="/images/fot (10).jpg" alt="Aleksandra Adamiec" />
                  </div>
        )}
      </div>
      <div className={styles.wrapper} style={{background: "#fff3de"}}>
        <div className={styles.empty}></div>
        <div className={`${styles.block} ${styles.block3}`}>
          <div className={styles.empty2}></div>
          <div className={styles["text-area"]} style={{paddingTop: 0}}>
            <p  className="text">
              W życiu prywatnym sport także ma dla mnie ogromne znaczenie. Lubię
              aktywnie spędzać czas, a dodatkowo od dziecka, z licznymi
              sukcesami, trenuję karate, co dało mi możliwość poznania procesu
              treningowego z perspektywy sportowca oraz trenera.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className={styles.container}>
    // <div className={styles.photos}>
    //   <img src="/images/fot (5).jpg" alt="Aleksandra Adamiec " />
    //   <img src="/images/fot (10).jpg" alt="Aleksandra Adamiec " />
    // </div>
    //   <h1 className={styles.title}>O mnie</h1>
    //   <div className={styles.wrapper}>

    //   <div className={`${styles.block} ${styles.block1}`}>

    //     <div className={styles["text-area"]}>
    //       <p>
    //         Nazywam się Aleksandra Adamiec. Ukończyłam Psychologię Stosowaną
    //         na Uniwersytecie Jagiellońskim w Krakowie. W 2011 r. na Akademii
    //         Wychowania Fizycznego w Krakowie zrobiłam specjalizację z zakresu
    //         psychologii sportu. Jestem certyfikowanym psychologiem sportu
    //         Polskiego Towarzystwa Psychologicznego II klasy.
    //       </p>
    //     </div>
    //     <div className={styles.photo}>
    //       <img src="/images/fot (5).jpg" alt="Aleksandra Adamiec" />
    //     </div>
    //   </div>
    //   </div>
    //   <div className={styles.wrapper2}>
    //   <div className={`${styles.block} ${styles.block2}`}>
    //     <div className={styles["text-area"]}>
    //       <p>
    //         Od 2011 do 2013 roku współpracowałam z drużyną kobiecej siatkówki
    //         – AGH GALECO WISŁA KRAKÓW. Prowadziłam szkolenia i konsultacje
    //         m.in. dla Polskiego Związku Muay Thai oraz Polskiego Związku
    //         Sportu Osób Niepełnosprawnych. Współpracuję z wieloma zawodnikami
    //         - zarówno ze sportów indywidualnych (m.in. tenis, lekkoatletyka,
    //         sporty motorowe, sporty walki, pływanie), jak i sportów
    //         drużynowych (piłka nożna, siatkówka) oraz z muzykami. W
    //         poprzednich sezonach współpracowałam z dwiema drużynami
    //         siatkarskimi, z polską kadrą w biegach narciarskich oraz z
    //         ektraklasową drużyną w piłce nożnej - Wisłą Kraków. Byłam
    //         członkiem sztabu kadry kobiet w kajak-polo, która w tym roku
    //         zdobyła II miejsce na Mistrzostwach Świata. Pracowałam także jako
    //         psycholog sportu i koordynator działu psychologii sportu w
    //         Akademii Piłkarskiej Wisła Kraków.
    //       </p>
    //     </div>
    //     <div className={styles.photo}></div>
    //   </div>
    //   </div>
    //   <div className={`${styles.block} ${styles.block3}`}>
    //     <div className={styles.photo}></div>
    //     <div className={styles["text-area"]}>
    //       <p>
    //         W życiu prywatnym sport także ma dla mnie ogromne znaczenie. Lubię
    //         aktywnie spędzać czas, a dodatkowo od dziecka, z licznymi
    //         sukcesami, trenuję karate, co dało mi możliwość poznania procesu
    //         treningowego z perspektywy sportowca oraz trenera.{" "}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cv;
