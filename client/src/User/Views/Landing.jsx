import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";

export default function Landing() {
  return (
    <Container fluid="lg" className="border border-2">
      <Row>
        <Col lg={12}>Col</Col>
        <Col lg={6} md={6}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, totam
          assumenda rerum in est inventore quam fuga atque, eum perferendis nam
          molestias debitis fugit? Praesentium officiis voluptate enim alias
          neque.
        </Col>
        <Col lg={6} md={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur
          perferendis molestias est laudantium eaque sapiente. Nihil soluta
          deserunt, facere dolor aliquid in, culpa voluptas temporibus sed
          dignissimos repellendus nemo?
        </Col>
        <Col lg={8}>Col</Col>
        <Col lg={10}>Col</Col>
        <Col>Col</Col>
      </Row>
    </Container>
  );
}
