import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageHome = () => (
  <Container fluid className="p-0">
    <h1>The Blog Spot</h1>
    <Row>
      <Col xs={12}>
        <h3>Most Recent Posts</h3>
      </Col>
      <Col xs={12}>
        <h3>Most Commented Posts</h3>
      </Col>
    </Row>
  </Container>
);

export default PageHome;
