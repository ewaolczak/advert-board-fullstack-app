import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AdvertBox from '../../features/AdvertBox/AdvertBox';
import { fetchAllAdverts } from '../../../redux/advertsRedux';
import SearchBar from '../../features/SearchBar/SearchBar';

const Home = () => {
  useEffect(() => {
    fetchAllAdverts();
  }, []);

  return (
    <>
      <Container className='ms-3'>
        <h3 className='text-center'>Welcome to simple advert board</h3>
        <div className='d-flex'>
          <div className='col-4'></div>
          <div className='col-4'>
            <SearchBar></SearchBar>
          </div>
          <div className='col-4'></div>
        </div>
        <div className='d-flex flex-row justify-content-between'>
          <AdvertBox></AdvertBox>
          {/* <AdvertBox></AdvertBox>
          <AdvertBox></AdvertBox> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
