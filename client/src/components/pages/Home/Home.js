import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import AdvertBox from '../../features/AdvertBox/AdvertBox';
import { fetchAllAdverts, getAllAdverts } from '../../../redux/advertsRedux';
import SearchBar from '../../features/SearchBar/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAllAdverts);
  // console.log(adverts);

  // useEffect(() => {
  //   fetchAllAdverts();
  //   dispatch(updateAdvert(adverts));
  // }, [dispatch, adverts]);

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

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
        <Row className='d-flex flex-row justify-content-between'>
          {adverts.map((advert) => (
            <Col key={advert._id}>
              <AdvertBox {...advert} />
            </Col>
          ))}
          {/* <AdvertBox></AdvertBox>
          <AdvertBox></AdvertBox> */}
        </Row>
      </Container>
    </>
  );
};

export default Home;
