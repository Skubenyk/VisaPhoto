//!Card how work

//*Import base
import React from 'react';

//*Import styles
import styles from './cardHowWork.module.scss';

const CardHowWork = ({ imageCard, imageCardText, titleCard, textCard }) => {
  return (
    <div className={styles.cardHowWork}>
      <img src={imageCard} alt={imageCardText} />
      <div className={styles.titleText}>
        <h3 className={styles.title}>{titleCard}</h3>
        <div className={styles.text}>{textCard}</div>
      </div>
    </div>
  );
};

export default CardHowWork;
