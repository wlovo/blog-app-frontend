import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';
import PageHome from './Page.Home';
import PagePost from '../containers/Page.Post';
import PageComments from '../containers/Page.Comment';

const MainContent = () => (
  <Container>
    <Route exact path="/comments">
      <PageComments />
    </Route>
    <Route exact path="/posts">
      <PagePost />
    </Route>
    <Route exact path="/">
      <PageHome />
    </Route>
  </Container>
);

export default MainContent;
