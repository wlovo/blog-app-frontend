import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecentPosts from "../containers/Part.RecentPosts";

const PageHome = () => (
  <Container fluid className="p-0">
    <h1>The Blog Spot</h1>
    <Row>
      <Col xs={12}>
        <h3>Most Recent Posts</h3>
        <RecentPosts />
      </Col>
    </Row>
  </Container>
);

export default PageHome;
