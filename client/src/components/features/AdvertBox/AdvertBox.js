import React from 'react';
import styles from './AdvertBox.module.scss';
import { Card } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';

const AdvertBox = () => {
  return (
    <>
      <Card className={`mt-3 md-3 ${styles.card_wrapper}`}>
        <Card.Img variant='top' src={ IMAGES_URL + `/candle_img.jpg`}></Card.Img>
      </Card>
    </>
  );
};

export default AdvertBox;
