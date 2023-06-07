import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import AdvertBox from '../../features/AdvertBox/AdvertBox'

const Home = () => {
  return (
    <>
      <Container className="ms-3">
        <h3 className="text-center">Welcome to simple advert board</h3>
        <div className="d-flex">
          <div className="col-4"></div>
          <div className="col-4">
            <h4 className="text-center">Search an advert:</h4>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant='primary'>
                  Search
                </Button>
              </Form>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <AdvertBox></AdvertBox>
          {/* <AdvertBox></AdvertBox>
          <AdvertBox></AdvertBox> */}
        </div>
      </Container>
    </>
  )
}

export default Home
