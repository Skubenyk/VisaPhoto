//!Header

//*Import base
import React from 'react';

//*Import components
import Button from '../UI/Button/Button';

//*Import styles
import styles from './header.module.scss';

const Header = ({ setActive }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href='#'>
          <div className={styles.logo}>
            <div className={styles.logoImage}>LOGO</div>
            <div className={styles.logoText}>Documents-Photo-Maker</div>
          </div>
        </a>
        <Button onClick={() => setActive(true)} className={styles.button}>
          СONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
