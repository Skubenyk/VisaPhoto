//!Preloader

//*Import base
import React from 'react';

//*Import styles
import styles from './preloader.module.scss';

const Preloader = () => (
  <div className={styles.preloaderContainer}>
    <div className={styles.preloader}></div>
  </div>
);

export default Preloader;
