import React from 'react';
import styles from './RegisterPage.module.scss';
import RegisterForm from '../../views/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <h3 className={styles.register_header}>Welcome to register page</h3>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
