import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';

const NavBar = () => {
  const user = useSelector(getUser);
  console.log(user);

  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand className='ms-1'>AdvertBoard</Navbar.Brand>
          <Nav className='justify-content-end me-1 d-flex flex-row'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            {!user && (
              <Nav.Link className='ms-2' as={NavLink} to='/auth/register'>
                Register
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link className='ms-2' as={NavLink} to='/auth/login'>
                Log in
              </Nav.Link>
            )}
            {user && (
              <Nav.Link className='ms-2' as={NavLink} to='/auth/logout'>
                Log out
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
