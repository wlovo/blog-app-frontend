import React, { useState } from 'react';
import get from 'lodash/get';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import formatDate from '../utils/format-date';
import userPhoto from '../images/user.svg';
import PartCommentList from './Part.CommentList';

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

  const dateLastUpdated = formatDate(updatedAt);

  return (
    <>
      <Card bg="dark" border="secondary" as="li">
        <Card.Body>
          <Media>
            <img width={64} height={64} className="mr-3" src={userPhoto} alt="User pic" />
            <Media.Body>
              <h5>{title}</h5>
              <h6>
                <em>{`Written by ${author} on ${dateLastUpdated}`}</em>
              </h6>
              <p>{body}</p>
              <Accordion>
                <Card bg="dark">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="dark" eventKey={id}>
                      {'Comments'}
                      <Badge variant="secondary" className="ml-1">{get(comments, 'length', '')}</Badge>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={id}>
                    <Card.Body>
                      <PartCommentList comments={comments} />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

              </Accordion>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </>
  );
};

export default SinglePost;
