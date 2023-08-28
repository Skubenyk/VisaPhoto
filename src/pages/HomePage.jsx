//!HomePage

//*Import base
import React from 'react';

//*Import components
import Home from '../components/Home/Home';
import HowWork from '../components/HowWork/HowWork';
import HowMakePhoto from '../components/HowMakePhoto/HowMakePhoto';
import Footer from '../components/Footer/Footer';
import Button from '../components/UI/Button/Button';
import VisaChoice from '../components/VisaChoice/VisaChoice';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Home
        title={'Visa Photo Online for only $7'}
        text={'Get your perfect biometric photo (compliance guaranteed)'}
        button={
          <Button>
            <a href='#document'>CHOOSE DOCUMENT</a>
          </Button>
        }
      />
      <HowWork
        button={
          <Button>
            <a href='#document'>CHOOSE DOCUMENT</a>
          </Button>
        }
      />
      <HowMakePhoto
        button={
          <Button>
            <a href='#document'>CHOOSE DOCUMENT</a>
          </Button>
        }
      />
      <VisaChoice />
      <Footer
        button={
          <Button>
            <a href='#document'>CHOOSE DOCUMENT</a>
          </Button>
        }
      />
    </div>
  );
};

export default HomePage;
