import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='fixed-bottom'>
      <Container>
      <Card style={{ border: 'none' }}>
      <Card.Body className='align-self-center text-muted'>
        Copyright &copy; Advert Board App 2023
      </Card.Body>
    </Card>
      </Container>
    </div>
  );
};

export default Footer;
