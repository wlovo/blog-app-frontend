import React, { useState } from 'react';
import get from 'lodash/get';
import PartSingleComment from './Part.SingleComment';

const ListComments = (props) => {
  const stateDefaults = {
    comments: [],
  };

  const [comments] = useState(get(props, 'comments', stateDefaults.comments));
  const commentArray = comments.map((comment) => (
    <PartSingleComment key={comment.id} comment={comment} />
  ));

  return (
    <ul>
      {commentArray}
    </ul>
  );
};

export default ListComments;
