//!Footer

//*Import base
import React from 'react';

//*Import styles
import styles from './footer.module.scss';

const Footer = ({ button }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>{button}</div>
    </footer>
  );
};

export default Footer;
