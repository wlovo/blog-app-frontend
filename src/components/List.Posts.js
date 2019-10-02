import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import PartSinglePost from './Part.SinglePost';

const ListPosts = (props) => {
  const stateDefaults = {
    posts: [],
  };

  const [currPosts, setCurrPosts] = useState([]);
  const posts = get(props, 'posts', stateDefaults.posts);

  useEffect(() => {
    setCurrPosts(posts);
  }, [posts]);

  const postArray = currPosts.map((post) => (
    <PartSinglePost key={post.id} post={post} />
  ));

  return (
    <ul>
      {postArray}
    </ul>
  );
};

export default ListPosts;
