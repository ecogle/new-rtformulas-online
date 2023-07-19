import React, { useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function DesiredVe({ props }) {
  const [kve, setkve] = useState("");
  const [kpaco2, setkpaco2] = useState("");
  const [dpaco2, setdpaco2] = useState("");

  const [dve, setdve] = useState("");

  const dpaco2Input = useRef();
  const kpaco2Input = useRef();
  const kveInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let answer = (kve * kpaco2) / dpaco2;
    setdve(answer);
  };
  const handleClearForm = (event) => {
    debugger;
    event.preventDefault();
    dpaco2Input.current.value = "";
    kveInput.current.value = "";
    kpaco2Input.current.value = "";
    setdve(21);
  };

  return (
    <>
      <NavBar />
      <div style={{ margin: "auto" }}>
        <h2 style={{ margin: "auto", textAlign: "center" }}>
          Desired Minute Volume
        </h2>
      </div>
      <Container
        style={{
          width: "100%",
          marginTop: "15px",
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col
            style={{
              width: "25%",
            }}
          >
            <Form>
              <Row>
                <Col>
                  <Form.Label>Known VE</Form.Label>
                  <Form.Control
                    ref={kveInput}
                    name="kve"
                    id="kve"
                    value={kve}
                    onChange={(e) => setkve(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <Form.Label>Known PaCO2</Form.Label>
                  <Form.Control
                    ref={kpaco2Input}
                    id="kpaco2"
                    name="kpaco2"
                    value={kpaco2}
                    onChange={(e) => setkpaco2(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <Form.Label>Desired PaCO2</Form.Label>
                  <Form.Control
                    ref={dpaco2Input}
                    name="dpaco2"
                    id="dpaco2"
                    value={dpaco2}
                    onChange={(e) => setdpaco2(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row style={{ paddingTop: "5px" }}>
                    <Col>
                      <Button onClick={handleSubmit} style={{ width: "100%" }}>
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onClick={handleClearForm}
                        style={{ width: "100%" }}
                      >
                        Clear
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="btn btn-danger" style={{ width: "100%" }}>
                    FiO2: {dve}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            <Row>
              <Col>Desired VE = (kVE * kPaCO2)/dPaCO2</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DesiredVe;
