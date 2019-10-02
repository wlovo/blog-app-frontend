import React from 'react';
import get from 'lodash/get';
import Container from 'react-bootstrap/Container';
import ListComments from './List.Comments';

const PageComments = (props) => {
  const comments = get(props, 'comments', []);
  return (
    <Container fluid className="p-0">
      <h1>Comments</h1>
      <ListComments comments={comments} cardItem />
    </Container>
  );
};

export default PageComments;
