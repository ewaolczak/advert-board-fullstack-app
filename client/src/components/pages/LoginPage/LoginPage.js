import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from '../../views/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <h3 className={styles.login_header}>Welcome to login page</h3>
      <LoginForm />
    </>
  );
};

export default LoginPage;
