import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import { Alert, Button, Form, Row, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';

const RegisterForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'serverError', 'clientError', 'loginError'

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(login, password, phone, avatar);

    const fd = new FormData();
    fd.append('login', login);
    fd.append('password', password);
    fd.append('phone', phone);
    fd.append('avatar', avatar);

    const options = {
      method: 'POST',
      body: fd
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 409) {
          setStatus('loginError');
        } 
        else {
          setStatus('serverError');
        }
      })
      .catch(( err) => {
        setStatus('serverError')
        console.log(err);
      });
  };

  return (
    <>
      <div className='col-12 col-sm-6 mx-auto'>
        <Form onSubmit={handleSubmit} id='formRegister'>
          {status === 'success' && (
            <Alert variant='success'>
              <Alert.Heading>Success!</Alert.Heading>
              <p>You have been successfully registered! You can now log in.</p>
            </Alert>
          )}

          {status === 'serverError' && (
            <Alert variant='danger'>
              <Alert.Heading>Something went wrong!</Alert.Heading>
              <p>Unexpected error.. Please try again!</p>
            </Alert>
          )}

          {status === 'clientError' && (
            <Alert variant='danger'>
              <Alert.Heading>Not enough data</Alert.Heading>
              <p>You have to fill all the fields.</p>
            </Alert>
          )}

          {status === 'loginError' && (
            <Alert variant='warning'>
              <Alert.Heading>Login already in use</Alert.Heading>
              <p>You have to use other login.</p>
            </Alert>
          )}

          {status === 'loading' && (
            <Spinner
              animation='border'
              role='status'
              className='d-block mx-auto'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

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
          <Button variant='primary' type='submit' form='formRegister'>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
