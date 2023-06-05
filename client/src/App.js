import React from 'react';
import { Container } from 'react-bootstrap';

//* components
import Header from './components/views/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/views/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <Header>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        </Container>
      </Header>
      <Footer></Footer>
    </Container>
  );
};

export default App;
