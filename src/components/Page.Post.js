import React from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import ListPosts from './List.Posts';

const PagePost = ({ posts }) => (
  <Container fluid className="p-0">
    <h1>Posts</h1>
    <ListPosts posts={posts} />
  </Container>
);

PagePost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PagePost.defaultProps = {
  posts: [],
};

export default PagePost;
