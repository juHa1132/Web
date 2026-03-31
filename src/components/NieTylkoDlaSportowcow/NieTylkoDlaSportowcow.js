import React from "react";
import styles from "./NieTylkoDlaSportowcow.module.css";
import WhyCard from "../Content/WhyCard";
// import WhyCard from "../Content/WhyCard";
// import How from "../Content/How";

const NieTylkoDlaSortowcow = () => {

 
  return (
    <div className={styles.offer}>
      <h1 className={`${"title"} ${styles.title}`}>Nie tylko dla sportowców</h1>

      <div className={styles.container}>
        <div  className={styles["info"]} >
        <p>
          Kto powiedział, że stres, brak motywacji czy trudności z koncentracją
          dotyczą tylko sportowców? Psychologia sportu nastawia się na
          zdobywanie umiejętności potrzebnych do osiągnięcia sukcesu, ale nie
          dotyczy to tylko i wyłącznie sukcesu w sporcie!
        </p>
        </div>
        <div className={styles.who}>
          <h3 className={`${"title"} ${styles.title}`}>Trening matnalny jest dla Ciebie jeśli jesteś:</h3>
          <ul className={styles["who-list"]}>
            <WhyCard><span className="text">muzykiem</span></WhyCard>
            <WhyCard><span className="text">biznesmanem</span></WhyCard>
            <WhyCard><span className="text">uczniem</span></WhyCard>
            <WhyCard><span className="text">rodzicem</span></WhyCard>
          </ul>
          <h3 style={{paddingTop: "1rem"}}  className={`${"title"} ${styles.title}`}>lub po prostu osobą, która:</h3>
          <ul className={styles["who-list"]} style={{maxWidth: "400px", textAlign: "center", margin: "0 auto"}}>
            <WhyCard><span className="text">szuka sposobu na poradzenie sobie ze swoimi trudnościami</span></WhyCard>
            <WhyCard><span className="text">chce rozwijać siebie, by osiągać jak najlepsze wyniki w swojej dziedzinie</span></WhyCard>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NieTylkoDlaSortowcow;
