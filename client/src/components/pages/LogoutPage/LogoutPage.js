// import React from 'react';
// import styles from './LogoutPage.module.scss';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../config';
import { logOut } from '../../../redux/usersRedux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'DELETE',
      credentials: 'include'
    };

    fetch(`${API_URL}/auth/logout`, options)
      .then(() => {
        dispatch(logOut());
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, navigate]);

  return null;
};

export default LogoutPage;
