import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../Utilities/Utilities";
import { ValidateNumber } from "../../Utilities/Utilities";
import { SaO2, PaCO2, CaO2 } from "../../components/Subs/Subs";
import Footer from "../../components/footer/footer";

export default function OxygenContent() {
  const [hgb, setHgb] = useState("");
  const [sao2, setSao2] = useState("");
  const [paco2, setPaco2] = useState("");
  const [answer, setAnswer] = useState("--");

  const handleClear = (event) => {
    event.preventDefault();
    setHgb("");
    setSao2("");
    setPaco2("");
    setAnswer("--");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = 0;

    temp = 1.36 * hgb * (sao2 / 100) + 0.003 * paco2;
    setAnswer(Math.round(temp * 10) / 10);
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Oxygen Content" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Hgb</Form.Label>
                  <Form.Control
                    type="input"
                    value={hgb}
                    onChange={(e) => ValidateNumber(e.target.value, setHgb)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <SaO2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    value={sao2}
                    onChange={(e) => ValidateNumber(e.target.value, setSao2)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <PaCO2 />
                  </Form.Label>

                  <Form.Control
                    type="input"
                    value={paco2}
                    onChange={(e) => ValidateNumber(e.target.value, setPaco2)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button style={{ width: "100%" }} onClick={handleSubmit}>
                    Submit
                  </Button>
                </Col>
                <Col>
                  <Button style={{ width: "100%" }} onClick={handleClear}>
                    Clear
                  </Button>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button className="btn btn-danger" style={{ width: "100%" }}>
                    <CaO2 />: {answer}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <Row>
              <Col>
                <h3>Formula</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <CaO2 /> = 1.36 * Hgb *&nbsp; (<SaO2 />
                /100) + (0.003 *&nbsp;
                <PaCO2 />)
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
