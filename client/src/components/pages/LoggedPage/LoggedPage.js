import React from 'react';
import styles from './LoggedPage.module.scss'

const LoggedPage = () => {
  return (
    <>
      <h3 className={styles.login_header}>You have been successfully logged in</h3>
      <p>You will be taken to the homepage in a moment</p>
    </>
  );
};

export default LoggedPage;
