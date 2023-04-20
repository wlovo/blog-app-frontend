import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PartSingleComment from "./Part.SingleComment";

const ListComments = ({ cardItem, comments }) => {
  const [currentComments, setCurrentComments] = useState(comments);

  useEffect(() => {
    setCurrentComments(comments);
  }, [comments]);

  const commentArray = currentComments.map((comment) => (
    <PartSingleComment key={comment.id} comment={comment} cardItem={cardItem} />
  ));

  return <ul>{commentArray}</ul>;
};

ListComments.propTypes = {
  cardItem: PropTypes.bool,
  comments: PropTypes.arrayOf(PropTypes.object),
};

ListComments.defaultProps = {
  cardItem: false,
  comments: [],
};

export default ListComments;
