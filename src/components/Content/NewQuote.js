import React from 'react';
import styles from './NewQuote.module.css';

const NewQuote = () => {
  return (
    <div className={`${styles.quote} ${"text"}`}>
      <q className={styles["charm-regular"]}>„Cokolwiek umysł ludzki jest w stanie wymyślić i w co uwierzyć, może
      też osiągnąć”</q>
      <p className={styles["quote-author"]}>Napoleon Hill</p>
    </div>
  )
}

export default NewQuote
