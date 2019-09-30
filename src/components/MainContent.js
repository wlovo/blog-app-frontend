import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Route from 'react-router-dom/Route';
import HomePage from './HomePage';
import SinglePost from './SinglePost';

class MainContent extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/comments">
          <h1>Comments</h1>
        </Route>
        <Route exact path="/posts">
          <h1>Posts</h1>
          <ul>
            <SinglePost />
          </ul>
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Container>
    );
  }
}

export default MainContent;
