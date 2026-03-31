import React from 'react';
import styles from  './Quote.module.css';

const Quote = () => {
  return (
    <section className={styles.top}>
    <div className={styles.quotes}>
    <q className={styles['quote-top']}>
    „Cokolwiek umysł ludzki jest w stanie wymyślić i w co uwierzyć, może
      też osiągnąć”
    </q>
    <p className={styles['quote-author']}>Napoleon Hill</p>
  </div>
  </section>
  )
}

export default Quote;
