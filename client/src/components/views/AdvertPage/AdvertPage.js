import React, { useState } from 'react';
import styles from './AdvertPage.module.scss';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAdvertById, updateAdverts } from '../../../redux/advertsRedux';
import { Button, Card } from 'react-bootstrap';
import { API_URL, IMAGES_URL } from '../../../config';
import { getUser } from '../../../redux/usersRedux';
import ModalDelete from '../../features/ModalDelete/ModalDelete';

const AdvertPage = () => {
  const advertId = useParams();
  const id = advertId.id;
  const advert = useSelector((state) => getAdvertById(state, id));
  const navigate = useNavigate();
  const user = useSelector(getUser);
  console.log('AdvertPage user: ', user);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDelete = (e) => {
    e.preventDefault();
    const options = {
      method: 'DELETE',
      credentials: 'include'
    };
    fetch(`${API_URL}/api/ads/`, options);
    updateAdverts();
    navigate('/');
  };

  return (
    <div className={`${styles.card_wrapper} d-flex justify-content-center`}>
      {showModal && (
        <ModalDelete
          showModal={showModal}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      )}
      <Card className='border-0 d-flex flex-row'>
        <Card.Img
          variant='left'
          className={`w-50 ${styles.advert_image}`}
          src={`${IMAGES_URL}/${advert.user._id}/${advert.image}`}></Card.Img>{' '}
        <Card.Body>
          <Card.Title>{advert.title}</Card.Title>
          <Card.Text>{advert.content}</Card.Text>
          <Card.Text>Localisation: {advert.localisation}</Card.Text>
          <Card.Text>Published: {advert.date}</Card.Text>
          <Card.Text>Seller: {advert.user.login}</Card.Text>
          <Card.Img
            className={`${styles.avatar_img}`}
            src={`${IMAGES_URL}/${advert.user._id}/${advert.user.avatar}`}></Card.Img>
          <Card.Text>Phone: {advert.user.phone}</Card.Text>
          {user.login === advert.user.login && (
            <Button
              variant='outline-primary'
              as={Link}
              to='/api/ads/editAdvert/:id'>
              edit
            </Button>
          )}
          {user.login === advert.user.login && (
            <Button variant='outline-danger' onClick={handleShow}>
              delete
            </Button>
          )}
          <Button variant='primary' as={Link} to='/'>
            back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdvertPage;
