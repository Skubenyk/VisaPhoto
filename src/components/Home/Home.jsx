//!Home

//*Import base
import React from 'react';

//*Import images
import home from '../../assets/image/home.png';

//*Import styles
import styles from './home.module.scss';

const Home = ({ button, title, text }) => {
  return (
    <section className={styles.home}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.text}>{text}</div>
          <div className={styles.button}>{button}</div>
          <div className={styles.wrapperNumber}>
            <div className={styles.id}>
              <div className={styles.numberId}>1M+</div>
              <div className={styles.textId}>
                Approved
                <br />
                <b>ID photos</b>
              </div>
            </div>
            <div className={styles.guarantee}>
              <div className={styles.numberGuarantee}>100%</div>
              <div className={styles.textGuarantee}>
                <b>Guarantee</b>
                <br />
                of acceptance
              </div>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={home} alt={'home'} />
        </div>
      </div>
    </section>
  );
};

export default Home;
