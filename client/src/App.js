import React from 'react';
import { Container } from 'react-bootstrap';

// components
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import AddAdvert from './components/views/AddAdvert/AddAdvert';
import EditAdvert from './components/views/EditAdvert/EditAdvert';
import Footer from './components/pages/Footer/Footer';

// redux
import { Route, Routes } from 'react-router-dom';
import AdvertPage from './components/views/AdvertPage/AdvertPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import LoggedPage from './components/pages/LoggedPage/LoggedPage';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import LogoutPage from './components/pages/LogoutPage/LogoutPage';

const App = () => {
  return (
    <Container>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api' element={<Home />} />
        <Route path='/api/ads' element={<Home />} />
        <Route path='/api/ads/addAdvert' element={<AddAdvert />} />
        <Route path='/api/ads/:id' element={<AdvertPage />} />
        <Route path='/api/ads/editAdvert/:id' element={<EditAdvert />} />
        <Route path='/api/ads/search/:searchPhrase' />
        <Route path='/auth/register' element={<RegisterPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/logged' element={<LoggedPage />} />
        <Route path='/auth/logout' element={<LogoutPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </Container>
  );
};

export default App;
