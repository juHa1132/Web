import React, { useState } from "react";
import styles from "./Where.module.css";
import useWindowSize from "../../hooks/useWindowSize";

const Where = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let width;
  const windowSize = useWindowSize();
  if(windowSize.width < 600) {
   width = windowSize.width - 100;
  } else if (windowSize.width > 600 && windowSize.width < 700) width = 500;
  else width= 600;



  return (
    <section className={styles.contact} >
      <h1  className={`${"title"} ${styles.title}`}>Gdzie możesz mnie znaleźć?</h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <table className="text">
            <tr>
              <td className={styles["column-1"]}>adresy: </td>
              <td className={styles["column-2"]}><span style={{fontWeight: "bold"}}>Kraków</span>, ul. Kielecka 24</td>
            </tr>
            <tr>
              <td className={styles["column-1"]}></td>
              <td className={styles["column-2"]}>
              <span style={{fontWeight: "bold"}}>Bielsko Biała i okolice</span> ul.Jutrzenki 5
              </td>
            </tr>
            <tr>
              <td className={styles["column-1"]}>tel:</td>
              <td className={styles["column-2"]}>695 773 011</td>
            </tr>
            <tr>
              <td className={styles["column-1"]}>skype:</td>
              <td className={styles["column-2"]}>
              <a href="skype:aleksandra.adamiec11?chat">aleksandra.adamiec11</a></td>
            </tr>
            <tr>
              <td className={styles["column-1"]}>poczta:</td>
              <td className={styles["column-2"]}>
              <a href="mailto:adamiecaleksandra@wp.pl">adamiecaleksandra@wp.pl</a></td>
            </tr>
          </table>
          <div className={` ${styles.icons} ${styles.iconFb}`}>
            <a
              className={styles.icon}
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/psychologsportAdamiec"
            >
              <svg
                className={styles.fb}
                xmlns="http://www.w3.org/2000/svg"
                height="56"
                width="24"
                viewBox="0 0 320 512"
                fill="#7a7d80"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a
              className={`${styles.icon} ${styles.iconIg}`}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/psycholog_sportu_aadamiec/"
            >
              <svg
                className={styles.ig}
                xmlns="http://www.w3.org/2000/svg"
                height="56"
                width="48"
                viewBox="0 0 448 512"               
                fill={isHovered ? "url(#gradient)" : "#7a7d80"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#f09433" />
                    <stop offset="25%" stop-color="#e6683c" />
                    <stop offset="50%" stop-color="#dc2743" />
                    <stop offset="75%" stop-color="#cc2366" />
                    <stop offset="100%" stop-color="#bc1888" />
                  </linearGradient>
                </defs>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.947398829432!2d19.957638387185693!3d50.06854674137052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b219ad840cf%3A0x8d6be6d29378bbf5!2sKielecka%2024%2C%2031-523%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1710963613323!5m2!1spl!2spl"
            width={width}
            height={450}
            style={{
              border: "0",
              allowFullscreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Where;
