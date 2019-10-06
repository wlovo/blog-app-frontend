import React from 'react';
import Container from 'react-bootstrap/Container';
import get from 'lodash/get';
import SinglePost from './Part.SinglePost';

const PageViewPost = (props) => {
  const post = get(props, 'post', []);
  const deletePost = get(props, 'deletePost');
  return (
    <Container fluid className="p-0">
      <h1>View Post</h1>
      <SinglePost
        key={post.id}
        post={post}
        deletePost={deletePost}
        cardItem
      />
    </Container>
  );
};

export default PageViewPost;
