import React from 'react';
import styles from './AdvertBox.module.scss';
import { Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';

const AdvertBox = ({ image }) => {
  return (
    <>
      <div className={`d-flex flex-column ${styles.card_wrapper}`}>
        <Card className={`mt-3 md-3 `}>
          <Card.Img
            className={styles.card_image}
            variant='top'
            src={IMAGES_URL + `/candle_img.jpg`}></Card.Img>
        </Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Example title</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Seller: <span className='fw-normal'>John Doe</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>2023-06-07</span>
          </Card.Subtitle>
          <div className='mt-auto'>
            <Button variant='primary'>more</Button>
            {/* <Link to={`/advert/${_id}`}>
              </Link> */}
          </div>
        </Card.Body>
      </div>
      <div className={`d-flex flex-column ${styles.card_wrapper}`}>
        <Card className={`mt-3 md-3 `}>
          <Card.Img
            className={styles.card_image}
            variant='top'
            src={IMAGES_URL + `/potted_flower_img.jpg`}></Card.Img>
        </Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Example title</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Seller: <span className='fw-normal'>John Doe</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>2023-06-07</span>
          </Card.Subtitle>
          <div className='mt-auto'>
            <Button variant='primary'>more</Button>
            {/* <Link to={`/advert/${_id}`}>
              </Link> */}
          </div>
        </Card.Body>
      </div>
      <div className={`d-flex flex-column ${styles.card_wrapper}`}>
        <Card className={`mt-3 md-3 `}>
          <Card.Img
            className={styles.card_image}
            variant='top'
            src={IMAGES_URL + `/mug_img.jpg`}></Card.Img>
        </Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Example title</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Seller: <span className='fw-normal'>John Doe</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>2023-06-07</span>
          </Card.Subtitle>
          <div className='mt-auto'>
            <Button variant='primary'>more</Button>
            {/* <Link to={`/advert/${_id}`}>
              </Link> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default AdvertBox;
