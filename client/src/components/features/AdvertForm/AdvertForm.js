import React, { useState } from 'react';
import styles from './AdvertForm.module.scss';
import { Alert, Button, Form, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AdvertForm = ({ action, actionText, ...props }) => {
  let navigate = useNavigate();
  let newDate = new Date();
  const user = useSelector(getUser);

  const id = props.id;
  const [title, setTitle] = useState(props.title || '');
  const [content, setContent] = useState(props.content || '');
  const [date, setDate] = useState(props.date || newDate);
  const [image, setImage] = useState(props.image || '');
  const [price, setPrice] = useState(props.price || '');
  const [localisation, setLocalisation] = useState(props.localisation || '');
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();

  const handleSubmit = () => {
    console.log(
      'AddForm',
      title,
      content,
      date,
      image,
      price,
      localisation,
      user
    );

    if (title && content && date && image && price && localisation && user) {
      action(id, title, content, date, image, price, localisation, user);
    }
    navigate('/');
  };

  return (
    <>
      <div className='col-12 col-sm-6 mx-auto'>
        <Form onSubmit={validate(handleSubmit)} id='formAddAdvert'>
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
                  {...register('title', { required: true })}
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='type a title'></Form.Control>
                {errors.title && (
                  <small className='d-block form-text text-danger mt-2'>
                    This field is required and has to be between 10 to 50
                    characters long.
                  </small>
                )}
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formContent'>
            <Row>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>content:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  {...register('content', { required: true })}
                  className={`${styles.form_placeholder}`}
                  as='textarea'
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='type a content'></Form.Control>
                {errors.title && (
                  <small className='d-block form-text text-danger mt-2'>
                    This field is required and has to be between 20 to 1000
                    characters long.
                  </small>
                )}
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formImage'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Image:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  className={`${styles.form_placeholder}`}
                  type='file'
                  onChange={(e) => setImage(e.target.files[0])}></Form.Control>
                {errors.image && (
                  <small className='d-block form-text text-danger mt-2'>
                    Image field is required.
                  </small>
                )}
              </div>
            </Row>
          </Form.Group>
          <Form.Group className='mt-3' controlId='formPrice'>
            <Row className='align-items-baseline'>
              <div className={`col-3 ${styles.form_label}`}>
                <Form.Label>Price:</Form.Label>
              </div>
              <div className={`col-9 ${styles.form_label}`}>
                <Form.Control
                  {...register('price', { required: true })}
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder='type a price'></Form.Control>
                {errors.price && (
                  <small className='d-block form-text text-danger mt-2'>
                    This field is required and accept only numbers.
                  </small>
                )}
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
                  {...register('localisation', { required: true })}
                  className={`${styles.form_placeholder}`}
                  type='text'
                  value={localisation}
                  onChange={(e) => setLocalisation(e.target.value)}
                  placeholder='type your localisation'></Form.Control>
                {errors.localisation && (
                  <small className='d-block form-text text-danger mt-2'>
                    This field is required.
                  </small>
                )}
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
                  {...register('date', { required: true })}
                  className={`${styles.form_placeholder}`}
                  type='date'
                  onChange={(e) => setDate(e.target.value)}></Form.Control>
                {errors.date && (
                  <small className='d-block form-text text-danger mt-2'>
                    This field is required.
                  </small>
                )}
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
    </>
  );
};

export default AdvertForm;
