import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Container, Row, Col, Form } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import "../../Utilities/Utilities";
import "../../index.css";
import { ValidateNumber } from "../../Utilities/Utilities";
import PaCO2 from "../../components/Subs/Paco2";
import PaO2 from "../../components/Subs/Pao2";

export default function ABGs() {
  const [pH, setPh] = useState("");
  const [paco2, setPaco2] = useState("");
  const [pao2, setpao2] = useState("");
  const [sao2, setSao2] = useState("");
  const [hco, setHco] = useState("");
  const [be, setBe] = useState("");
  const [fio2, setFio2] = useState("");
  const [hgb, setHgb] = useState("");
  const [answer, setAnswer] = useState("---");
  const normalPh = 7.4;
  const normalPaO2 = 90;
  const normalPaCO2 = 40;
  const normalSaO2 = 100;

  const analyzeABG = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClear = (event) => {
    event.preventDefault();
    setPaco2("");
    setpao2("");
    setPh("");
    setSao2("");
    setHco("");
    setBe("");
    setFio2("");
    setHgb("");
    setAnswer("---");
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Analyze ABG" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Ph</Form.Label>
                  <Form.Control
                    type="input"
                    value={pH}
                    onChange={(e) => ValidateNumber(e.target.value, setPh)}
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
                  <Form.Label>
                    <PaO2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    value={pao2}
                    onChange={(e) => ValidateNumber(e.target.value, setpao2)}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <Row>
              <Col>Interpretation</Col>
            </Row>
            <Row>
              <Col>{answer}</Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
