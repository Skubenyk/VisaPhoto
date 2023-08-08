//!App

//*Import base
import React from 'react';

//*Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//*Import styles
import './styles/index.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <h1>App worked</h1>
      <Footer />
    </div>
  );
};

export default App;
