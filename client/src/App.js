import React from 'react';
import { Container } from 'react-bootstrap';

// components
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Footer/Footer';

// redux
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ads' element={<Home />}/>
        <Route path='/ads/addAdvert' />
        <Route path='/ads/:id' />
        <Route path='/ads/editAdvert/:id' />
        <Route path='/ads/search/:searchPhrase' />
        <Route path='/register' />
        <Route path='/login' />
        <Route path='/logout' />
      </Routes>
      <Footer></Footer>
    </Container>
  );
};

export default App;
