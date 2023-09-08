//!OrderPageUSA

//*Import base
import React, { useState } from 'react';

//*Import components
import Photo from '../components/Photo/Photo';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';
import PhotoUpload from '../components/PhotoUpload/PhotoUpload';

const OrderPageUSA = () => {
  const [photoData, setPhotoData] = useState({});
  return (
    <div className='OrderPage'>
      <Photo
        button={
          <PhotoUpload
            textButton={'RETAKE PHOTO'}
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
            photoData={setPhotoData} // Передаємо функцію для оновлення photoData
          />
        }
        photoData={photoData} // Передаємо photoData в Photo
      />
      <Payment />
      <Footer
        button={
          <PhotoUpload
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
            textButton={'RETAKE PHOTO'}
          />
        }
      />
    </div>
  );
};

export default OrderPageUSA;
