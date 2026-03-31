import React from 'react';
import styles from './Map.module.css';
import useWindowSize from '../../hooks/useWindowSize';

const Map = ({ isSelector } ) => {

  let width;
  const windowSize = useWindowSize();
  if(windowSize.width < 600) {
   width = windowSize.width - 100;
  } else if (windowSize.width > 600 && windowSize.width < 700) width = 500;
  else width= 600;

  return (
    <div className={isSelector ? styles.map : styles.mapCentered}>
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
  )
}

export default Map;
