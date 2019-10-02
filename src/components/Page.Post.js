import React from 'react';
import Container from 'react-bootstrap/Container';
import get from 'lodash/get';
import ListPosts from './List.Posts';

const PagePost = (props) => {
  const posts = get(props, 'posts', []);
  return (
    <Container fluid className="p-0">
      <h1>Posts</h1>
      <ListPosts posts={posts} />
    </Container>
  );
};

export default PagePost;
