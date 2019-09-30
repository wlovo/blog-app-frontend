import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Route from 'react-router-dom/Route';
import PageHome from './Page.Home';
import SinglePost from './Part.SinglePost';

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
          <PageHome />
        </Route>
      </Container>
    );
  }
}

export default MainContent;
