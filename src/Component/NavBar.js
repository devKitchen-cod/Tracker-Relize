import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, Navbar, Container} from 'react-bootstrap/'
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function NavBar(){

  const email = useSelector((state) => state.setEmail.email)
  console.log('===' + email)
  const history = useHistory();
  return(
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand onClick = {() => history.push('/')}>startUP!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick ={()=> history.push('/project')}></Nav.Link>
      <Nav.Link onClick ={()=> history.push('/tracker')}></Nav.Link>
      <Nav.Link onClick ={()=> history.push('/')}></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick ={()=> history.push('/login')}>Sign in</Nav.Link>
      <Nav.Link onClick ={()=> history.push('/auth')}>Sign up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}