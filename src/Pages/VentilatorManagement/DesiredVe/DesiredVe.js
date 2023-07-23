import React, { useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Footer from "../../../components/footer/footer";
import PageTitle from "../../../components/PageTitle/PageTitle";

function DesiredVe() {
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
    setdve(Math.round(answer * 10) / 10);
  };
  const handleClearForm = (event) => {
    debugger;
    event.preventDefault();
    setdpaco2("");
    setdve("");
    setkpaco2("");
    setkve("");
  };

  const validateNumber = (e) => {
    debugger;
    if (isNaN(e.target.value)) {
      alert("Only numbers are allowed.");
    } else {
      if (e.target.name === "kpaco2") {
        setkpaco2(e.target.value);
      } else if (e.target.name === "dpaco2") {
        setdpaco2(e.target.value);
      } else if (e.target.name === "kve") {
        setkve(e.target.value);
      }
    }
  };
  return (
    <>
      <NavBar />
      <PageTitle title="Desired Minute Volume" />
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
                    onChange={(e) => validateNumber(e)}
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
                    onChange={(e) => validateNumber(e)}
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
                    onChange={(e) => validateNumber(e)}
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
      <Footer />
    </>
  );
}

export default DesiredVe;
