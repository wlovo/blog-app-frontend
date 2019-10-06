import React, { useState } from 'react';
import get from 'lodash/get';
import {
  Accordion, Badge, Button, Card, Media, Row, Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';
import ListComments from './List.Comments';
import AddComment from '../containers/Part.AddComment';

const SinglePost = (props) => {
  const stateDefaults = {
    currentUser: {},
    post: { title: 'Title', body: 'Words', comments: [] },
  };

  const [post] = useState(get(props, 'post', stateDefaults.post));

  const {
    id,
    body,
    title,
    updatedAt,
    comments,
    author = 'Anonymous',
  } = post;

  const cardItem = get(props, 'cardItem', false);
  const deletePost = get(props, 'deletePost');

  const dateLastUpdated = formatDate(updatedAt);
  const numComments = get(comments, 'length', '');
  const commentCardBody = <ListComments comments={comments} />;
  const commentSection = cardItem
    ? (
      <Card bg="dark">
        <Card.Header>
          {'Comments'}
        </Card.Header>
        <Card.Body>
          <AddComment postId={id} />
          {numComments
            ? commentCardBody
            : 'No comments'}
        </Card.Body>
      </Card>
    ) : (
      <Accordion>
        <Card bg="dark">
          <Accordion.Toggle as={Card.Header} eventKey={id} className="Card-header-toggle">
            {'Comments'}
            <Badge variant="secondary" className="ml-1">{numComments}</Badge>
          </Accordion.Toggle>
          {!!numComments && (
          <Accordion.Collapse eventKey={id}>
            <Card.Body>
              {commentCardBody}
            </Card.Body>
          </Accordion.Collapse>
          )}
        </Card>
      </Accordion>
    );

  return (
    <>
      <Card bg="dark" border="secondary" as="li">
        <Card.Body>
          <Media>
            <img width={64} height={64} className="mr-3" src={userPhoto} alt="User pic" />
            <Media.Body>
              <Row noGutters>
                <Col xs={12} md>
                  <h5>{cardItem ? title : <Link to={`/view-post/${id}`}>{title}</Link>}</h5>
                </Col>
                <Col xs="auto" md="auto" className="my-1 mx-1 my-md-auto">
                  {cardItem && <Button onClick={deletePost}>Delete</Button>}
                </Col>
              </Row>
              <h6>
                <em>{`Written by ${author} on ${dateLastUpdated}`}</em>
              </h6>
              <p>{body}</p>
            </Media.Body>
          </Media>
          {commentSection}
        </Card.Body>
      </Card>
    </>
  );
};

export default SinglePost;
