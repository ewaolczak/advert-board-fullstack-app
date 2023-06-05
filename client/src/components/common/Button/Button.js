import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonDefault = ({children}) => {
  return (
    <Button variant='primary'>
      {children}
    </Button>
  )
}

export default ButtonDefault
