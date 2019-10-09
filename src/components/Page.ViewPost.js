import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import SinglePost from './Part.SinglePost';

const PageViewPost = ({
  post,
  deletePost,
}) => (
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

PageViewPost.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

PageViewPost.defaultProps = {};

export default PageViewPost;
