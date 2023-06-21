import React from 'react';
import styles from './EditAdvert.module.scss';
import { Button, Form, Row } from 'react-bootstrap';

const EditAdvert = () => {
  return (
    <>
      <h3 className={styles.advert_form_header}>Add an advert</h3>
      <Row>
        <div className='col-12 col-sm-6 mx-auto'>
          <Form id='formAdvert'>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>Title:</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='text'
                    placeholder='type a title'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>Description:</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    as='textarea'
                    rows={5}
                    placeholder='type a description'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>Date:</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='date'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>Localisation:</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='text'
                    placeholder='type your localisation'></Form.Control>
                </div>
              </Row>
            </Form.Group>
          </Form>
          <div className={styles.form_buttons_container}>
            <Button variant='primary' type='submit' form='formAdvert'>
              Save changes
            </Button>{' '}
          </div>
        </div>
      </Row>
    </>
  );
};

export default EditAdvert;
