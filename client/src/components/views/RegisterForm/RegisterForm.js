import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import { Button, Form, Row } from 'react-bootstrap';

const RegisterForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(login, password, phone, avatar);
  };

  return (
    <>
      {/* <Row> */}
      {/* <div className='col-3'></div> */}
      <div className='col-12 col-sm-6 mx-auto'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mt-3 controlId' controlId='formLogin'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>username</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  placeholder='type your username'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formPassword'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>password</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='type your password'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formPhone'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>phone</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='tel'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='type your phone number'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formFile'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>avatar</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.file_placeholder}`}
                  type='file'
                  onChange={(e) => setAvatar(e.target.files[0])}></Form.Control>
              </div>
            </Row>
          </Form.Group>
        </Form>
        <div className={styles.form_buttons_container}>
          <Button variant='primary' type='submit'>
            Register
          </Button>
        </div>
      </div>
      {/* <div className='col-3'></div> */}
      {/* </Row> */}
    </>
  );
};

export default RegisterForm;
