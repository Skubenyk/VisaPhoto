//!App

//*Import base
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//*Import components
import Header from './components/Header/Header';
import HomePageUSA from './pages/HomePageUSA';
import HomePageCanada from './pages/HomePageCanada';
import HomePage from './pages/HomePage';
import OrderPageUSA from './pages/OrderPageUSA';
import OrderPageCanada from './pages/OrderPageCanada';
import FormAppointment from './components/FormAppointment/FormAppointment';

//*Import styles
import './styles/index.scss';

const App = () => {
  const [modalActive, setmodalActive] = useState(false);
  return (
    <div className='App'>
      <Header setActive={setmodalActive} />
      <FormAppointment active={modalActive} setActive={setmodalActive} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/homePageUsa' element={<HomePageUSA />} />
        <Route path='/homePageCanada' element={<HomePageCanada />} />
        <Route path='/homePageUsa/orderUsa' element={<OrderPageUSA />} />
        <Route
          path='/homePageCanada/orderCanada'
          element={<OrderPageCanada />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
