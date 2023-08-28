//!How make photo

//*Import base
import React from 'react';

//*Import images
import passportPhotoRequirements from '../../assets/image/passportPhotoRequirements.jpg';

//*Import styles
import styles from './howMakePhoto.module.scss';

const HowMakePhoto = ({ button }) => {
  return (
    <section className={styles.howMakePhoto}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>How to take a photo?</h1>
        <img
          src={passportPhotoRequirements}
          alt={'passportPhotoRequirements'}
        />
      </div>
      <div className={styles.button}>{button}</div>
    </section>
  );
};

export default HowMakePhoto;
