import React, { useState } from 'react';
import get from 'lodash/get';
import { Container, Button, Form } from 'react-bootstrap';

const PageEditPost = (props) => {
  const stateDefaults = {
    currentUser: {},
    post: { title: '', body: '' },
    author: 'Anonymous',
  };

  const [post, setPost] = useState(get(props, 'post', stateDefaults.post));
  const author = get(props, 'author', stateDefaults.author);

  return (
    <Container fluid className="p-0">
      <h1>Edit Post</h1>
      <Form className="mb-3">
        <Form.Group controlId="Form.Title">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Enter a title for your post" />
        </Form.Group>
        <Form.Group controlId="Form.Body">
          <Form.Label>Entry</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="Enter your thoughts here" />
        </Form.Group>
        <Form.Group>
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
          <Form.Label className="ml-2">
            <em>{`Submitting as ${author}`}</em>
          </Form.Label>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PageEditPost;
