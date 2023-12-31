import React, { useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Footer from "../../../components/footer/footer";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { ValidateNumber, ValidateFiO2 } from "../../../Utilities/Utilities";
import "../../../index.css";
import { Fio2, PaO2 } from "../../../components/Subs/Subs";

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
    let tempFio2 = ValidateFiO2(kfio2);
    let answer = dpao2 * (tempFio2 / kpao2);
    setDfio2(answer.toFixed(2));
  };

  const handleClearForm = (event) => {
    event.preventDefault();
    setKfio2("");
    setDfio2("");
    setDpao2("");
    setkpao2("");
  };

  return (
    <>
      <NavBar />
      <PageTitle title="Desired FiO2" />
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>
                    Desired <PaO2 />
                  </Form.Label>
                  <Form.Control
                    ref={dpao2Input}
                    name="dpao2"
                    id="dpao2"
                    value={dpao2}
                    onChange={(e) => ValidateNumber(e.target.value, setDpao2)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    Known <Fio2 />
                  </Form.Label>
                  <Form.Control
                    ref={kfio2Input}
                    id="kfio2"
                    name="kfio2"
                    value={kfio2}
                    onChange={(e) => {
                      ValidateNumber(e.target.value, setKfio2);
                    }}
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    Known <PaO2 />
                  </Form.Label>
                  <Form.Control
                    ref={kpao2Input}
                    name="kpao2"
                    id="kpao2"
                    value={kpao2}
                    onChange={(e) => ValidateNumber(e.target.value, setkpao2)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="row-padding">
                    <Col>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        style={{ width: "100%" }}
                      >
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="button"
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
                    <Fio2 />: {dfio2}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            <Row>
              <Col>
                D<Fio2 /> = D<PaO2 /> * (K
                <Fio2 /> / K<PaO2 />)
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DesiredFIO2;
