//!Visa choice

//*Import base
import React from 'react';
import { Link } from 'react-router-dom';

//*Import images
import usa from '../../assets/image/usaVisa.png';
import canada from '../../assets/image/canadaVisa.png';

//*Import styles
import styles from './visaChoice.module.scss';

const VisaChoice = () => {
  return (
    <section id='document' className={styles.visaChoice}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Choose a visa</h1>
        <div className={styles.content}>
          <Link to='/homePageUsa'>
            <div className={styles.container}>
              <img src={usa} alt={'USA'} />
              <div className={styles.text}>US Visa Photo</div>
            </div>
          </Link>
          <Link to='/homePageCanada'>
            <div className={styles.container}>
              <img src={canada} alt={'Canada'} />
              <div className={styles.text}>Canada Visa Photo</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaChoice;
