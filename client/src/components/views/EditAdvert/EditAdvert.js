import React, { useState } from 'react';
import styles from './EditAdvert.module.scss';
import { Alert, Button, Form, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../../../redux/usersRedux';
import { editAdvert, getAdvertById } from '../../../redux/advertsRedux';
import { API_URL } from '../../../config';

const EditAdvert = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const advert = useSelector((state) => getAdvertById(state, id));
  const user = useSelector(getUser);
  const [title, setTitle] = useState(advert.title || '');
  const [content, setContent] = useState(advert.content || '');
  const [date, setDate] = useState(advert.date || '');
  const [image, setImage] = useState(advert.image);
  const [price, setPrice] = useState(advert.price || '');
  const [localisation, setLocalisation] = useState(advert.localisation || '');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'EditAdvert',
      id,
      title,
      content,
      date,
      image,
      price,
      localisation,
      user
    );

    const fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    fd.append('date', date);
    fd.append('image', image);
    fd.append('price', price);
    fd.append('localisation', localisation);
    fd.append('userLogin', user.login);

    const options = {
      method: 'PUT',
      body: fd,
      credentials: 'include'
    };

    dispatch(editAdvert({ ...advert }));
    setStatus('loading');
    fetch(`${API_URL}/api/ads/`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus('success');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
          console.error();
        }
      })
      .catch((err) => {
        console.log('EditAdvert error: ', err);
        setStatus('serverError');
      });
  };

  const handleRemoveImage = async () => {
    try {
      const options = {
        method: 'PUT',
        credentials: 'include'
      };

      const res = await fetch(`${API_URL}/api/ads/${id}/remove-image`, options);
      // const res = await axios.put(`${API_URL}/api/ads/${id}/remove-image`);
    } catch (error) {
      console.log(error, error.response);
    }
    setImage(null);
  };

  return (
    <>
      <h3 className={styles.advert_form_header}>Edit an advert</h3>

      <div className='col-12 col-sm-6 mx-auto'>
        <Form onSubmit={handleSubmit} id='formAddAdvert'>
          {status === 'success' && (
            <Alert variant='success'>
              <Alert.Heading>Success!</Alert.Heading>
              <p>Your advert has been successfully added!</p>
              <p>You will be taken to the homepage in a moment</p>
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

          {status === 'loading' && (
            <Spinner
              animation='border'
              role='status'
              className='d-block mx-auto'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}

          <Form.Group className='mt-3' controlId='formTitle'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Title:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='type a title'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formDescription'>
            <Row>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Description:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  as='textarea'
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='type a description'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          {image ? (
            <Button variant='danger' onClick={handleRemoveImage}>
              Usuń
            </Button>
          ) : (
            <Form.Group className='mt-3' controlId='formImage'>
              <Row className='align-items-baseline'>
                <div className={`col-3 ${styles.form_label}`}>
                  <Form.Label>Image:</Form.Label>
                </div>
                <div className={`col-9 ${styles.form_label}`}>
                  <Form.Control
                    className={`${styles.form_placeholder}`}
                    type='file'
                    onChange={(e) =>
                      setImage(e.target.files[0])
                    }></Form.Control>
                </div>
              </Row>
            </Form.Group>
          )}
          <Form.Group className='mt-3' controlId='formPrice'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Price:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder='type a price'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formLocalisation'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Localisation:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={localisation}
                  onChange={(e) => setLocalisation(e.target.value)}
                  placeholder='type your localisation'></Form.Control>
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formDate'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Date:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='date'
                  onChange={(e) => setDate(e.target.value)}></Form.Control>
              </div>
            </Row>
          </Form.Group>
        </Form>
        <div className={styles.form_buttons_container}>
          <Button variant='primary' type='submit' form='formAddAdvert'>
            Add
          </Button>
        </div>
      </div>

      {/* <Row>
        <div className='col-12 col-sm-6 mx-auto'>
          <Form id='formAdvert'>
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
            <Button variant='primary' type='submit' form='formAdvert'>
              Save changes
            </Button>{' '}
          </div>
        </div>
      </Row> */}
    </>
  );
};

export default EditAdvert;
