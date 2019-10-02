import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';
import PageHome from './Page.Home';
import PagePost from '../containers/Page.Post';

const MainContent = () => (
  <Container>
    <Route exact path="/comments">
      <h1>Comments</h1>
    </Route>
    <Route exact path="/posts">
      <h1>Posts</h1>
      <PagePost />
    </Route>
    <Route exact path="/">
      <PageHome />
    </Route>
  </Container>
);

export default MainContent;
