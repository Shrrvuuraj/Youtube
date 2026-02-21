import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/Video";
import Catagoriesbar from "../components/Catagoriesbar"

const HomeScreen = () => {
  return (
    <Container>
      <Catagoriesbar/>
      <Row>
        {[...new Array(20)].map((_,index) => (
          <Col lg={3}md={4} key={index}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
