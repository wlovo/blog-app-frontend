import React, { useState } from 'react';
import { Card, Media } from 'react-bootstrap';
import get from 'lodash/get';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';

const SingleComment = (props) => {
  const stateDefaults = {
    currentUser: {},
    comment: { body: 'Words' },
  };

  const cardItem = get(props, 'cardItem', false);
  const [comment] = useState(get(props, 'comment', stateDefaults.comment));

  const {
    body,
    updatedAt,
    author = 'Anonymous',
  } = comment;

  const dateLastUpdated = formatDate(updatedAt);

  const commentMediaBody = (
    <>
      <img
        width={48}
        height={48}
        className="mr-3"
        src={userPhoto}
        alt="User pic"
      />
      <Media.Body>
        <h6>
          <em>
            {`Written by ${author} on ${dateLastUpdated}`}
          </em>
        </h6>
        <p>
          {body}
        </p>
      </Media.Body>
    </>
  );

  const commentItem = cardItem === true
    ? (
      <Card bg="dark" border="secondary" as="li">
        <Card.Body>
          <Media>
            {commentMediaBody}
          </Media>
        </Card.Body>
      </Card>
    )
    : (
      <Media as="li">
        {commentMediaBody}
      </Media>
    );

  return commentItem;
};

export default SingleComment;
