import React from 'react';
import styles from './RegisterForm.module.scss';
import { Form, Row } from 'react-bootstrap';

const RegisterForm = () => {
  return (
    <>
      <Row>
        <div className='col-3'></div>
        <div className='col-6'>
          <Form>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>username</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='text'
                    placeholder='type your username'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>password</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='password'
                    placeholder='type your password'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>phone</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='text'
                    placeholder='type your phone number'></Form.Control>
                </div>
              </Row>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>avatar</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.file_placeholder}`}
                    type='file'
                    placeholder='chose your avatar image'></Form.Control>
                </div>
              </Row>
            </Form.Group>
          </Form>
        </div>
        <div className='col-3'></div>
      </Row>
    </>
  );
};

export default RegisterForm;
