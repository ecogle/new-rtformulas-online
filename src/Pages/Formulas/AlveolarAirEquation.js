import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import { useAsyncError } from "react-router-dom";

export default function AlveolarAirEquation() {
  const [kfio2, setKfio2] = useState("");
  const [kpaco2, setKpaco2] = useState("");
  const [kpb, setKpb] = useState("");
  const [kpho2, setKpho2] = useState("");
  const [krq, setRq] = useState("");

  return (
    <>
      <NavBar />
      <Container
        style={{
          width: "100%",
          marginTop: "15px",
          borderRadius: "10px",
        }}
      >
        <Form>
          <Row>
            <Col style={{ width: "25%" }}>
              <Form.Label>Known FiO2</Form.Label>
              <Form.Control
                type="input"
                name="kfio2"
                value={kfio2}
                onChange={(e) => setKfio2(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Known PaCO2</Form.Label>
              <Form.Control
                type="input"
                name="kpaco2"
                value={kpaco2}
                onChange={(e) => setKpaco2(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Barametric Pressue (mmHg)</Form.Label>
              <Form.Control
                type="input"
                name="kpb"
                value={kpb}
                onChange={(e) => setKpb(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Water Vapor Pressure</Form.Label>
              <Form.Control
                type="input"
                name="kph2o"
                value={kpho2}
                onChange={(e) => setKpho2(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Respiratory Quotient</Form.Label>
              <Form.Control type="input"></Form.Control>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
