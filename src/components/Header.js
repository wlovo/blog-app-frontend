import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="App-header">
      <Navbar.Brand href="/" className="d-flex align-items-center">Blog App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
