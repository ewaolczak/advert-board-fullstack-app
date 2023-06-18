import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand className='ms-1'>AdvertBoard</Navbar.Brand>
          <Nav className='justify-content-end me-1 d-flex flex-row'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link className='ms-2' as={NavLink} to='/auth/register'>
              Register
            </Nav.Link>
            <Nav.Link className='ms-2' as={NavLink} to='/auth/login'>
              Log in
            </Nav.Link>
            <Nav.Link className='ms-2' as={NavLink} to='/auth/logout'>
              Log out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
