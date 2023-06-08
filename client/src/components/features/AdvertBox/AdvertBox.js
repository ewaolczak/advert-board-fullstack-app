import React from 'react';
import styles from './AdvertBox.module.scss';
import { Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';

const AdvertBox = ({ _id, title, date, image, user }) => {
  return (
    <>
      <div className={`d-flex flex-column ${styles.card_wrapper}`}>
        <Card className={`mt-3 md-3 `}>
          <Card.Img
            className={styles.card_image}
            variant='top'
            src={`${IMAGES_URL}/${image}`}></Card.Img>
        </Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className='fw-bold mt-3'>
            Seller: <span className='fw-normal'>{user}</span>
          </Card.Subtitle>
          <Card.Subtitle className='fw-bold mt-2'>
            Published: <span className='fw-normal'>{date}</span>
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
