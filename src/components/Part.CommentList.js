import React, { useState } from 'react';
import get from 'lodash/get';
import Container from 'react-bootstrap/Container';
import PartSingleComment from './Part.SingleComment';

const PartCommentList = (props) => {
  const stateDefaults = {
    comments: [],
  };

  const [comments] = useState(get(props, 'comments', stateDefaults.comments));
  const commentArray = comments.map((comment) => (
    <PartSingleComment key={comment.id} comment={comment} />
  ));

  return (
    <Container>
      <ul>
        {commentArray}
      </ul>
    </Container>
  );
};

export default PartCommentList;
