import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import React from 'react'

const Layout = (props) => {
  return (
    <div>
      <NavMenu />
        <Container>
          {props.children}
        </Container>
    </div>
  )
}

export default Layout
