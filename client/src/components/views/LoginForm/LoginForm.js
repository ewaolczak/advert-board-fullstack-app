import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
import { Alert, Button, Form, Row, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/usersRedux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'serverError', 'clientError'
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password }),
      credentials: 'include'
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus('success');
          dispatch(logIn({ login }));
          navigate('/auth/logged');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <>
      <div className='col-12 col-sm-6 mx-auto'>
        <Form onSubmit={handleSubmit} id='formLogin'>
          {status === 'success' && (
            <Alert variant='success'>
              <Alert.Heading>Success!</Alert.Heading>
              <p>You have been successfully logged in!</p>
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
              <Alert.Heading>Incorrect data</Alert.Heading>
              <p>Login or password are incorrect...</p>
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

          <Form.Group className='mt-3' controlId='formLogin'>
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
        </Form>
        <div className={styles.form_buttons_container}>
          <Button variant='primary' type='submit' form='formLogin'>
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
