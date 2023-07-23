import React from "react";
import { useState, useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/footer/footer";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function DesiredTidalVolume() {
  const [kvt, setkvt] = useState("");
  const [kpaco2, setkpaco2] = useState("");
  const [dpaco2, setdpaco2] = useState("");

  const [dvt, setdvt] = useState("0");

  const dpaco2Input = useRef();
  const kpaco2Input = useRef();
  const kvtInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let answer = (kvt * kpaco2) / dpaco2;
    isNaN(answer) ? setdvt("0") : setdvt(Math.round(answer));
  };
  const handleClearForm = (event) => {
    debugger;
    event.preventDefault();
    setdpaco2("");
    setdvt("0");
    setkpaco2("");
    setkvt("");
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
      } else if (e.target.name === "kvt") {
        setkvt(e.target.value);
      }
    }
  };
  return (
    <>
      <NavBar />
      <div style={{ margin: "auto" }}>
        <h2 style={{ margin: "auto", textAlign: "center" }}>
          Desired Tidal Volume
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
                  <Form.Label>Known VT</Form.Label>
                  <Form.Control
                    ref={kvtInput}
                    name="kvt"
                    id="kvt"
                    value={kvt}
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
                    Tidal Volume: {dvt}ml
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            <Row>
              <Col>Desired VT = (kvt * kPaCO2)/dPaCO2</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DesiredTidalVolume;
