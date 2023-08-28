//!OrderPageUSA

//*Import base
import React from 'react';

//*Import components
import Photo from '../components/Photo/Photo';
import YourDetails from '../components/YourDetails/YourDetails';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';
import PhotoUpload from '../components/PhotoUpload/PhotoUpload';

const OrderPageUSA = () => {
  return (
    <div className='OrderPage'>
      <Photo />
      <YourDetails />
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