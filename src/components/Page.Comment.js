import React from "react";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import ListComments from "./List.Comments";

const PageComments = ({ comments }) => (
  <Container fluid className="p-0">
    <h1>Comments</h1>
    <ListComments comments={comments} cardItem />
  </Container>
);

PageComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

PageComments.defaultProps = {
  comments: [],
};

export default PageComments;
