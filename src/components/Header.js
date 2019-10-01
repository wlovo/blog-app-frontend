import React, { Component } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="App-header">
        <Navbar.Brand href="/">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav onClick={this.handleSelect} className="mr-auto">
            <Nav.Item>
              <Nav.Link as="div" href="/" eventKey="/">
                <NavLink activeClassName="active" to="/">
                  Home
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="div" href="/posts" eventKey="/posts">
                <NavLink activeClassName="active" to="/posts">
                  All Posts
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="div" href="/comments" eventKey="/comments">
                <NavLink activeClassName="active" to="/comments">
                  All Comments
                </NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline className="mt-3 mt-md-auto d-flex justify-content-center">
            <Button variant="outline-info">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
