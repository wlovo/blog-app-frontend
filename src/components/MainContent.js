import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';
import PageHome from './Page.Home';
import PagePost from '../containers/Page.Post';
import PageComments from '../containers/Page.Comment';
import PageNewPost from '../containers/Page.NewPost';
import PageViewPost from './Page.ViewPost';

const MainContent = () => (
  <Container>
    <Route exact path="/comments">
      <PageComments />
    </Route>
    <Route exact path="/posts">
      <PagePost />
    </Route>
    <Route exact path="/view-post/:id">
      <PageViewPost />
    </Route>
    <Route exact path="/new-post">
      <PageNewPost />
    </Route>
    <Route exact path="/">
      <PageHome />
    </Route>
  </Container>
);

export default MainContent;
