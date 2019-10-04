import React from 'react';
import Container from 'react-bootstrap/Container';
import get from 'lodash/get';
import SinglePost from './Part.SinglePost';

const PageViewPost = (props) => {
  const post = get(props, 'post', []);
  return (
    <Container fluid className="p-0">
      <h1>View Post</h1>
      <SinglePost key={post.id} post={post} />
    </Container>
  );
};

export default PageViewPost;
