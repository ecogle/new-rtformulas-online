import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import { ValidateNumber, ValidateFiO2 } from "../../Utilities/Utilities";
import Fio2 from "../../components/Subs/Fio2";
import PaCO2 from "../../components/Subs/Paco2";
import PageTitle from "../../components/PageTitle/PageTitle";
import PAO2 from "../../components/Subs/PAlvO2";
import Pb from "../../components/Subs/Pb";
import PH2O from "../../components/Subs/PH2O";
import "../../index.css";
import Footer from "../../components/footer/footer";

export default function AlveolarAirEquation() {
  const [kfio2, setKfio2] = useState("");
  const [kpaco2, setKpaco2] = useState("");
  const [kpb, setKpb] = useState("760");
  const [kph2o, setKph2o] = useState("47");
  const [krq, setRq] = useState("0.8");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    let temp = ValidateFiO2(kfio2) * (kpb - kph2o) - kpaco2 / krq;
    setAnswer(Math.round(temp));
  };

  const handleClear = (event) => {
    setKfio2("");
    setKpaco2("");
    setKpb("760");
    setKph2o("47");
    setRq("0.8");
    setAnswer("");
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Alveolar Air Equation" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>
                    Known <Fio2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    name="kfio2"
                    value={kfio2}
                    onChange={(e) => ValidateNumber(e.target.value, setKfio2)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    Known <PaCO2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    name="kpaco2"
                    value={kpaco2}
                    onChange={(e) => ValidateNumber(e.target.value, setKpaco2)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>Barametric Pressue (mmHg)</Form.Label>
                  <Form.Control
                    type="input"
                    name="kpb"
                    value={kpb}
                    onChange={(e) => ValidateNumber(e.target.value, setKpb)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>Water Vapor Pressure</Form.Label>
                  <Form.Control
                    type="input"
                    name="kph2o"
                    value={kph2o}
                    onChange={(e) => ValidateNumber(e.target.value, setKph2o)}
                  />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>Respiratory Quotient</Form.Label>
                  <Form.Control
                    type="input"
                    name="krq"
                    value={krq}
                    onChange={(e) => ValidateNumber(e.target.value, setRq)}
                  ></Form.Control>
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
                  <Button style={{ width: "100%" }} className="btn btn-danger">
                    <PAO2 />: {answer} mmHg
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col style={{ width: "25%" }}>
            <Row>
              <Col>
                <h3>Formula</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <PAO2 /> = <Fio2 /> * (<Pb /> - <PH2O />) - <PaCO2 /> / RQ
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
