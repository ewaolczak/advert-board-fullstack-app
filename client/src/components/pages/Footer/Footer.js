import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
      <Card style={{ border: 'none' }}>
      <Card.Body className='align-self-center text-muted'>
        Copyright &copy; Advert Board App 2023
      </Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Footer;
