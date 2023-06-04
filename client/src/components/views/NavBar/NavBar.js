import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand className='ms-1'>AdvertBoard</Navbar.Brand>
          <Nav className='justify-content-end me-1'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
