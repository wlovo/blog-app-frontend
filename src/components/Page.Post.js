import React from 'react';
import get from 'lodash/get';
import ListPosts from './List.Posts';

const PagePost = (props) => {
  const posts = get(props, 'posts', []);
  return (
    <div>
      <ListPosts posts={posts} />
    </div>
  );
};

export default PagePost;
