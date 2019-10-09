import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PartSinglePost from './Part.SinglePost';

const ListPosts = ({
  posts,
}) => {
  const [currentPosts, setCurrentPosts] = useState(posts);

  useEffect(() => {
    setCurrentPosts(posts);
  }, [posts]);

  const postArray = currentPosts.map((post) => (
    <PartSinglePost key={post.id} post={post} />
  ));

  return (
    <ul>
      {postArray}
    </ul>
  );
};

ListPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

ListPosts.defaultProps = {
  posts: [],
};

export default ListPosts;
