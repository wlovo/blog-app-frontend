import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => (
  <Navbar
    collapseOnSelect
    expand="md"
    variant="dark"
    sticky="top"
    className="App-header"
  >
    <Navbar.Brand>BlogApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav activeKey="/" className="mr-auto">
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" exact to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" exact to="/posts">
            All Posts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} activeClassName="active" exact to="/comments">
            All Comments
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Form inline className="mt-3 my-md-auto d-flex justify-content-center">
        <Button variant="outline-info" className="mx-auto">
          <NavLink activeClassName="active" exact to="/new-post">
            New Post
          </NavLink>
        </Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
