import React, { useState } from 'react';
import get from 'lodash/get';
import {
  Accordion, Badge, Card, Media,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';
import ListComments from './List.Comments';

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

  const dateLastUpdated = formatDate(updatedAt);
  const numComments = get(comments, 'length', '');
  const commentCardBody = <ListComments comments={comments} />;
  const commentSection = cardItem
    ? (
      <Card bg="dark">
        <Card.Header>
          {'Comments'}
          <Card.Link href="#" className="ml-2">Add a comment</Card.Link>
        </Card.Header>
        <Card.Body>
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
              <h5>{cardItem ? title : <Link to={`/view-post/${id}`}>{title}</Link>}</h5>
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
