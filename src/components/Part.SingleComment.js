import React, { useState } from 'react';
import Media from 'react-bootstrap/Media';
import get from 'lodash/get';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';

const SingleComment = (props) => {
  const stateDefaults = {
    currentUser: {},
    comment: { body: 'Words' },
  };

  const [comment] = useState(get(props, 'comment', stateDefaults.comment));

  const {
    body,
    updatedAt,
    author = 'Anonymous',
  } = comment;

  const dateLastUpdated = formatDate(updatedAt);

  return (
    <>
      <Media as="li">
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
      </Media>
    </>
  );
};

export default SingleComment;
