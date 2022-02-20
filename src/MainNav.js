import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNav(){
  return (
    <Container fluid style={{
        margin: 0,
        padding: 0
    }}>
      <Navbar bg="light" variant="light" style={{
          paddingLeft: "10px",
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      }}>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/resume">
            <Nav.Link href="/">Resume</Nav.Link>
          </LinkContainer>
          <Nav.Link href='https://wiki.nrichman.dev'>Wiki</Nav.Link>
          <NavDropdown title="Work" id="navbarScrollingDropdown">
            <NavDropdown.Item href="https://gitlab.com/naterichman">Professional Gitlab</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com">Professional Github</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://git.nrichman.dev">Personal Gitlab</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default MainNav;
