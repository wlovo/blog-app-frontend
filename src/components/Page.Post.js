import React from 'react';
import PropTypes from 'prop-types';
import PartSinglePost from './Part.SinglePost';

const PagePost = ({ posts }) => (
  <div>
    <ul>
      {posts.map(post => (
        <PartSinglePost key={post.id} post={post} />
      ))}
    </ul>
  </div>
);

PagePost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PagePost.defaultProps = {
  posts: [],
};

export default PagePost;
