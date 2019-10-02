import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import PartSingleComment from './Part.SingleComment';

const ListComments = (props) => {
  const stateDefaults = {
    comments: [],
  };

  const [currComments, setCurrComments] = useState([]);
  const comments = get(props, 'comments', stateDefaults.comments);

  useEffect(() => {
    setCurrComments(comments);
  }, [comments]);

  const commentArray = currComments.map((comment) => (
    <PartSingleComment key={comment.id} comment={comment} />
  ));

  return (
    <ul>
      {commentArray}
    </ul>
  );
};

export default ListComments;
