import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap/'
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function NavBarF() {

  const email = useSelector((state) => state.setEmail.email)
  console.log('===' + email)

  const history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => history.push('/startp')}>startUP!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => history.push('/project')}>Projects</Nav.Link>
              <Nav.Link onClick={() => history.push('/tracker')}>Tracker</Nav.Link>
              <Nav.Link onClick={() => history.push('/create')}>Create</Nav.Link>
            </Nav>
            <Nav>
            </Nav>
            <NavDropdown title={email} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => history.push('/project')}>Projects</NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push('/tracker')}>Tracker</NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push('/create')}>Create</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => window.location.replace("/")}>Logout</NavDropdown.Item>
            </NavDropdown>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}