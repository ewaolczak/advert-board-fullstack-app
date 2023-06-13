import React from 'react';
import { Container } from 'react-bootstrap';

// components
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import AdvertForm from './components/views/AdvertForm/AdvertForm';
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
        <Route path='/ads' element={<Home />} />
        <Route path='/ads/addAdvert' element={<AdvertForm />} />
        <Route path='/ads/:id' element={<AdvertPage />} />
        <Route path='/ads/editAdvert/:id' element={<AdvertForm />} />
        <Route path='/ads/search/:searchPhrase' />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logged' element={<LoggedPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </Container>
  );
};

export default App;
