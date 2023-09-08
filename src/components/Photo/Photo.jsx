//!Photo

//*Import base
import React from 'react';

//*Import images
import visaPhoto1 from '../../assets/image/visaPhoto1.jpg';
import visaPhotoCheck from '../../assets/image/visaPhotoCheck.jpg';

//*Import styles
import styles from './photo.module.scss';

// const Photo = ({ button, photoData }) => {
//   const { visaPhoto, visaPhotoCheсk } = photoData;
//   return (
//     <section className={styles.photo}>
//       <div className={styles.wrapper}>
//         <h1 className={styles.title}>Place your order</h1>
//         <div className={styles.contentVisaPhoto}>
//           <div className={styles.visaPhoto}>{visaPhoto}</div>
//           <div className={styles.visaPhotoCheсk}>{visaPhotoCheсk}</div>
//           <div className={styles.button}>{button}</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Photo;

const Photo = ({ button, photoData }) => {
  const { visaPhoto, visaPhotoCheсk } = photoData || {};
  return (
    <section className={styles.photo}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Place your order</h1>
        <div className={styles.contentVisaPhoto}>
          {visaPhoto ? (
            <div className={styles.visaPhoto}>{visaPhoto}</div>
          ) : (
            <div className={styles.visaPhoto}>
              <img src={visaPhoto1} alt={'Visa photo'} />
            </div>
          )}

          {visaPhotoCheсk ? (
            <div className={styles.visaPhotoCheсk}>{visaPhotoCheсk}</div>
          ) : (
            <div className={styles.visaPhotoCheсk}>
              <img src={visaPhotoCheck} alt={'Visa photo cheсk'} />
            </div>
          )}

          <div className={styles.button}>{button}</div>
        </div>
      </div>
    </section>
  );
};

export default Photo;
