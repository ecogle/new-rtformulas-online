import React, { useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function DesiredFIO2({ props }) {
  const [dpao2, setDpao2] = useState("");
  const [kfio2, setKfio2] = useState("");
  const [kpao2, setkpao2] = useState("");

  const [dfio2, setDfio2] = useState("");

  const kpao2Input = useRef();
  const kfio2Input = useRef();
  const dpao2Input = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let answer = (dpao2 * kfio2) / kpao2;
    setDfio2(answer);
  };
  const handleClearForm = (event) => {
    debugger;
    event.preventDefault();
    kpao2Input.current.value = "";
    dpao2Input.current.value = "";
    kfio2Input.current.value = "";
    setDfio2(21);
  };

  return (
    <>
      <NavBar />
      <h2>Desired FiO2</h2>
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
              <Form.Control
                ref={dpao2Input}
                name="dpao2"
                id="dpao2"
                value={dpao2}
                onChange={(e) => setDpao2(e.target.value)}
                type="text"
              ></Form.Control>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <Form.Label>Known FiO2</Form.Label>
              <Form.Control
                ref={kfio2Input}
                id="kfio2"
                name="kfio2"
                value={kfio2}
                onChange={(e) => setKfio2(e.target.value)}
                type="text"
              ></Form.Control>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <Form.Label>Known PaO2</Form.Label>
              <Form.Control
                ref={kpao2Input}
                name="kpao2"
                id="kpao2"
                value={kpao2}
                onChange={(e) => setkpao2(e.target.value)}
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
                  <Button onClick={handleClearForm} style={{ width: "100%" }}>
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
                FiO2: {(dfio2 / 100).toFixed(2)}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default DesiredFIO2;
