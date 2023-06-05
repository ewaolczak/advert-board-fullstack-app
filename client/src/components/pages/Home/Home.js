import React from 'react'
import { Container, Form } from 'react-bootstrap'
import ButtonDefault from '../../common/Button/Button'

const Home = () => {
  return (
    <>
      <Container className="ms-3">
        <h3 className="text-center">Welcome to simple advert board</h3>
        <h4 className="text-center">Search an advert:</h4>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <ButtonDefault>
              Search
            </ButtonDefault>
          </Form>
      </Container>
    </>
  )
}

export default Home
