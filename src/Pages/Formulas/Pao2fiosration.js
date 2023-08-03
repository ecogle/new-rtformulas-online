import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ValidateFiO2, ValidateNumber } from "../../Utilities/Utilities";
import Footer from "../../components/footer/footer";
import { PaO2, Fio2 } from "../../components/Subs/Subs";

export default function PaO2FiO2Ratio() {
  const [kpao2, setKpao2] = useState("");
  const [kfio2, setKfio2] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClear = (event) => {
    event.preventDefault();
    setKfio2("");
    setKpao2("");
    setAnswer("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempAnswer = kpao2 / ValidateFiO2(kfio2);
    setAnswer(Math.round(tempAnswer));
  };

  return (
    <>
      <NavBar />
      <PageTitle title="PaO2 / FiO2 Ratio" />

      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>
                    <PaO2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    name="kpao2"
                    onChange={(e) => ValidateNumber(e.target.value, setKpao2)}
                    value={kpao2}
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <Fio2 />
                  </Form.Label>
                  <Form.Control
                    type="input"
                    name="kfiow"
                    onChange={(e) => ValidateNumber(e.target.value, setKfio2)}
                    value={kfio2}
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button
                    type="button"
                    style={{ width: "100%" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="button"
                    style={{ width: "100%" }}
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button className="btn btn-danger" style={{ width: "100%" }}>
                    Ratio: {answer}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            Ratio = <PaO2 />/<Fio2 />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
