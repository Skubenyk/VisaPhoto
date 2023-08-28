//!HomePageUSA

//*Import base
import React from 'react';

//*Import components
import Home from '../components/Home/Home';
import HowWork from '../components/HowWork/HowWork';
import HowMakePhoto from '../components/HowMakePhoto/HowMakePhoto';
import Footer from '../components/Footer/Footer';
import PhotoUpload from '../components/PhotoUpload/PhotoUpload';

const HomePageUSA = () => {
  return (
    <div className='HomePage'>
      <Home
        title={
          'US Visa Photo: Specifications and Guidelines [And a Hassle-Free Visa Photo Tool]'
        }
        text={'Prepare a perfect biometric photo with guaranteed acceptance!'}
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
          />
        }
      />
      <HowWork
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
          />
        }
      />
      <HowMakePhoto
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
          />
        }
      />
      <Footer
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageUsa/orderUsa'}
            url={'/api/upload/usa'}
          />
        }
      />
    </div>
  );
};

export default HomePageUSA;
