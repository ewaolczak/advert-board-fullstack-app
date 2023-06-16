import React from 'react';
import styles from './AdvertBox.module.scss';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';

const AdvertBox = ({ _id, title, localisation, image, user }) => {
  return (
    <>
      <div className={`d-flex flex-column ${styles.card_wrapper}`}>
        <Card className={`mt-3 md-3 `}>
          <Card.Img
            className={styles.card_image}
            variant='top'
            // src={`${IMAGES_URL}/${user}/${image}`}></Card.Img> {/* final code */}
            src={`${IMAGES_URL}/${image}`}></Card.Img> {/* for tests */}
        </Card>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className='fw-bold mt-1'>
            Localisation: <span className='fw-normal'>{localisation}</span>
          </Card.Subtitle>
          <div className='mt-3 d-flex justify-content-end'>
            <Link to={`api/ads/${_id}`}>
            <Button variant='primary'>more details</Button>
              </Link>
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export default AdvertBox;
