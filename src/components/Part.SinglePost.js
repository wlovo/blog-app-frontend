import React, { useState } from 'react';
import Media from 'react-bootstrap/Media';
import get from 'lodash/get';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';
import PartCommentList from './Part.CommentList';

const SinglePost = (props) => {
  const stateDefaults = {
    currentUser: {},
    post: { title: 'Title', body: 'Words', comments: [] },
  };

  const [post] = useState(get(props, 'post', stateDefaults.post));

  const {
    body,
    title,
    updatedAt,
    comments,
    author = 'Anonymous',
  } = post;

  const dateLastUpdated = formatDate(updatedAt);

  return (
    <>
      <Media as="li">
        <img width={64} height={64} className="mr-3" src={userPhoto} alt="User pic" />
        <Media.Body>
          <h5>{title}</h5>
          <h6>
            <em>{`Written by ${author} on ${dateLastUpdated}`}</em>
          </h6>
          <p>{body}</p>
          <PartCommentList comments={comments} />
        </Media.Body>
      </Media>
    </>
  );
};

export default SinglePost;
