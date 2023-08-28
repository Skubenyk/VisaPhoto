//!How work

//*Import base
import React from 'react';

//*Import components
import CardHowWork from '../CardHowWork/CardHowWork';

//*Import images
import f1 from '../../assets/image/f1.png';
import f2 from '../../assets/image/f2.png';
import f3 from '../../assets/image/f3.png';
import f4 from '../../assets/image/f4.png';

//*Import styles
import styles from './howWork.module.scss';

const HowWork = ({ button }) => {
  return (
    <section className={styles.howWork}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>How does it work?</h1>
        <div className={styles.text}>
          <b>Get the perfect biometric photo in 3 minutes or less.</b>
          <br />
          Check out just how simple it is!
        </div>
        <div className={styles.wrapperCard}>
          <CardHowWork
            imageCard={f1}
            imageCardText={'uploadPhoto'}
            titleCard={'Snap or upload a photo'}
            textCard={
              'That is the only thing you need to do. Snap or upload a photo - we will take care of the rest.'
            }
          />
          <CardHowWork
            imageCard={f2}
            imageCardText={'ai'}
            titleCard={'AI prepares the photo'}
            textCard={
              'Artificial Intelligence will check your photo, crop it to the right size and remove the background.'
            }
          />
          <CardHowWork
            imageCard={f3}
            imageCardText={'verification'}
            titleCard={'Expert verification'}
            textCard={
              'Our Photo Expert will make additional verification to check if your photo meets the official requirements.'
            }
          />
          <CardHowWork
            imageCard={f4}
            imageCardText={'digitalPhotos'}
            titleCard={'Digital photos'}
            textCard={'You can download a digital version.'}
          />
        </div>
      </div>
      <div className={styles.button}>{button}</div>
    </section>
  );
};

export default HowWork;
