import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import "../../Utilities/Utilities";
import "../../index.css";
import {
  AlveolarAirEquation,
  HendersonHasselback,
  OxygenContent,
  PFRatio,
  ValidateBaseExcess,
  ValidateNumber,
} from "../../Utilities/Utilities";
import {
  PaO2,
  PaCO2,
  SaO2,
  Fio2,
  PAO2,
  CaO2,
  Pb,
  PH2O,
} from "../../components/Subs/Subs";

export default function ABGs() {
  const [pH, setPh] = useState("");
  const [paco2, setPaco2] = useState("");
  const [pao2, setpao2] = useState("");
  const [sao2, setSao2] = useState("");
  const [hco, setHco] = useState("");
  const [be, setBe] = useState("");
  const [fio2, setFio2] = useState("");
  const [hgb, setHgb] = useState("");
  const [mhh, setMhh] = useState("");
  const [o2content, setO2content] = useState("");
  const [aaa, setAaa] = useState("");
  const [pfratio, setpfratio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMhh(HendersonHasselback(paco2, hco));
    setO2content(OxygenContent(hgb, sao2, paco2));
    setAaa(AlveolarAirEquation(fio2, paco2));
    setpfratio(PFRatio(pao2, fio2));
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
    setMhh("");
    setO2content("");
    setAaa("");
    setpfratio("");
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Analyze ABG" />
      <Container>
        <Form>
          <Row>
            <Col>
              <Row>
                <Col></Col>
                <Col></Col>
              </Row>
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
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Label>HCO</Form.Label>
                  <Form.Control
                    type="input"
                    value={hco}
                    onChange={(e) => ValidateNumber(e.target.value, setHco)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>BE</Form.Label>
                  <Form.Control
                    type="input"
                    value={be}
                    onChange={(e) => setBe(e.target.value)}
                    onBlur={(e) => ValidateBaseExcess(e.target.value, setBe)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <Fio2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    value={fio2}
                    onChange={(e) => ValidateNumber(e.target.value, setFio2)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>Hgb</Form.Label>
                  <Form.Control
                    type="input"
                    value={hgb}
                    onChange={(e) => ValidateNumber(e.target.value, setHgb)}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h3>Analysis:</h3>
                </Col>
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <Col>Henderson/Hasselback:</Col>
                <Col>
                  <span style={{ textDecoration: "underline" }}>{mhh}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CaO2 />:
                </Col>
                <Col>
                  <span style={{ textDecoration: "underline" }}>
                    {o2content}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PAO2 />
                  <sup>**</sup>:
                </Col>
                <Col>
                  <span style={{ textDecoration: "underline" }}>{aaa}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PaO2 />/<Fio2 />:
                </Col>
                <Col>
                  <span style={{ textDecoration: "underline" }}>{pfratio}</span>
                </Col>
              </Row>
              <Row>
                <Col>&nbsp;</Col>
              </Row>

              <Row>
                <Col>&nbsp;</Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ fontSize: "9pt" }}>
                    **
                    <Pb />
                    =760, <PH2O />
                    =47, RQ=0.8
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Footer />
        </Form>
      </Container>
    </>
  );
}
