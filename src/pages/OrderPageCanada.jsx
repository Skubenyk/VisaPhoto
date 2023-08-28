//!OrderPageCanada

//*Import base
import React from 'react';

//*Import components
import Photo from '../components/Photo/Photo';
import YourDetails from '../components/YourDetails/YourDetails';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';
import PhotoUpload from '../components/PhotoUpload/PhotoUpload';

const OrderPageCanada = () => {
  return (
    <div className='OrderPage'>
      <Photo />
      <YourDetails />
      <Payment />
      <Footer
        button={
          <PhotoUpload
            textButton={'RETAKE PHOTO'}
            route={'/homePageCanada/orderCanada'}
            url={'/api/upload/canada'}
          />
        }
      />
    </div>
  );
};

export default OrderPageCanada;
