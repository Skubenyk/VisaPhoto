//!HomePageCanada

//*Import base
import React from 'react';

//*Import components
import Home from '../components/Home/Home';
import HowWork from '../components/HowWork/HowWork';
import HowMakePhoto from '../components/HowMakePhoto/HowMakePhoto';
import Footer from '../components/Footer/Footer';
import PhotoUpload from '../components/PhotoUpload/PhotoUpload';

const HomePageCanada = () => {
  return (
    <div className='HomePage'>
      <Home
        title={'Get Canadian Visa Photos Online [In 3 Mins From Home]'}
        text={'Prepare a perfect biometric photo with guaranteed acceptance!'}
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageCanada/orderCanada'}
            url={'/api/upload/canada'}
          />
        }
      />
      <HowWork
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageCanada/orderCanada'}
            url={'/api/upload/canada'}
          />
        }
      />
      <HowMakePhoto
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageCanada/orderCanada'}
            url={'/api/upload/canada'}
          />
        }
      />
      <Footer
        button={
          <PhotoUpload
            textButton={'UPLOAD A PHOTO'}
            route={'/homePageCanada/orderCanada'}
            url={'/api/upload/canada'}
          />
        }
      />
    </div>
  );
};

export default HomePageCanada;
