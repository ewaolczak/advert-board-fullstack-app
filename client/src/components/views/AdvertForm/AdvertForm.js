import React from 'react';
import styles from './AdvertForm.module.scss';
import { Button, Form, Row } from 'react-bootstrap';

const AdvertForm = () => {
  return (
    <>
      <h3 className={styles.advert_form_header}>Add an advert</h3>
      <Row>
        <div className='col-3'></div>
        <div className='col-6'>
          <Form>
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
            <Button>Add</Button> {/* when adding an advert */}
            <Button>Save changes</Button> {/* when editing an advert */}
          </div>
        </div>
        <div className='col-3'></div>
      </Row>
    </>
  );
};

export default AdvertForm;
