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
    <div>
      <Home
        title={'Visa Photo Online for only $7'}
        text={'Get your perfect biometric photo (compliance guaranteed)'}
        button={
          <a href='#document'>
            <Button>CHOOSE DOCUMENT</Button>
          </a>
        }
      />
      <HowWork
        button={
          <a href='#document'>
            <Button>CHOOSE DOCUMENT</Button>
          </a>
        }
      />
      <HowMakePhoto
        button={
          <a href='#document'>
            <Button>CHOOSE DOCUMENT</Button>
          </a>
        }
      />
      <VisaChoice />
      <Footer
        button={
          <a href='#document'>
            <Button>CHOOSE DOCUMENT</Button>
          </a>
        }
      />
    </div>
  );
};

export default HomePage;
