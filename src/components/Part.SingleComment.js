import React, { useState } from "react";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import formatDate from "../utils/format-date";
import userPhoto from "../images/user.svg";

const SingleComment = ({ cardItem, comment }) => {
  const [currentComment] = useState(comment);

  const { body, postId, updatedAt, author = "Anonymous" } = currentComment;

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
          <em>{`Written by ${author} on ${dateLastUpdated}`}</em>
        </h6>
        <p>{body}</p>
      </Media.Body>
    </>
  );

  const commentItem =
    cardItem === true ? (
      <Card bg="dark" border="secondary" as="li">
        <Card.Body>
          <Media>{commentMediaBody}</Media>
        </Card.Body>
        <Card.Footer as="h6">
          <Link to={`/view-post/${postId}`}>View Post</Link>
        </Card.Footer>
      </Card>
    ) : (
      <Media as="li">{commentMediaBody}</Media>
    );

  return commentItem;
};

SingleComment.propTypes = {
  cardItem: PropTypes.bool,
  comment: PropTypes.shape({
    body: PropTypes.string,
    postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    updatedAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }).isRequired,
};

SingleComment.defaultProps = {
  cardItem: false,
};

export default SingleComment;
