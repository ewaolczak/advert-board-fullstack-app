import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <>
      <h4 className='text-center'>Search an advert:</h4>
      <Form className='d-flex'>
        <Form.Control
          type='search'
          placeholder='Search...'
          className='me-2'
          aria-label='Search'
        />
        <Button variant='primary'>Search</Button>
      </Form>
    </>
  );
};

export default SearchBar;
