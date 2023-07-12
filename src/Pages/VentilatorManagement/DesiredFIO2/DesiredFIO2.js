import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function DesiredFIO2({ props }) {
  return (
    <>
      <NavBar />

      <Container
        md="5"
        style={{
          width: "25%",
          marginTop: "15px",
          borderRadius: "10px",
          marginLeft: "10px",
        }}
      >
        <Form>
          <Row>
            <Col>
              <Form.Label>Desired PaO2</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <Form.Label>Known FiO2</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <Form.Label>Known PaO2</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row style={{ paddingTop: "5px" }}>
                <Col>
                  <Button style={{ width: "100%" }}>Submit</Button>
                </Col>
                <Col>
                  <Button style={{ width: "100%" }}>Clear</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default DesiredFIO2;
