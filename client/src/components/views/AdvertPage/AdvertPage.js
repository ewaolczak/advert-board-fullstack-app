import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdvertById } from '../../../redux/advertsRedux';
import { Button, Card } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';
import { getUserById } from '../../../redux/userRedux';
import { getUser } from '../../../redux/usersRedux';

const AdvertPage = () => {
  const advertId = useParams();
  const id = advertId.id;
  const advert = useSelector((state) => getAdvertById(state, id));
  // const user = useSelector(getUser);
  const userId = useSelector(getUserById);
  console.log(userId);

  return (
    <div className='d-flex justify-content-center'>
      <Card className='w-50'>
        <Card.Title>{advert.title}:</Card.Title>
        <Card.Img
          // src={`${IMAGES_URL}/${advert.user}/${advert.image}`}></Card.Img> {/* final code */}
          src={`${IMAGES_URL}/${advert.image}`}></Card.Img> {/* code for tests */}
        <Card.Body>
          <Card.Text>{advert.content}</Card.Text>
          <Card.Text>Localisation: {advert.localisation}</Card.Text>
          <Card.Text>Published: {advert.date}</Card.Text>
          {/* <Card.Text>Seller: {advert.user.login}</Card.Text> */}
          <Card.Text>Seller: {advert.user}</Card.Text>
          <Button variant='outline-primary'>edit</Button>
          <Button variant='outline-danger'>delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdvertPage;
