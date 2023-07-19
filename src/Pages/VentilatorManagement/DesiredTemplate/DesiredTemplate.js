import React, { useRef } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function DesiredTemplate(props) {
  debugger;
  const [known1, setknown1] = useState("");
  const [known2, setknown2] = useState("");
  const [desired1, setdesired1] = useState("");

  const [desiredResult, setdesiredResult] = useState("");

  const desired1Input = useRef();
  const known2Input = useRef();
  const known1Input = useRef();
  const { title, label1, label2, label3, desiredResultLabel } = props.vars;

  const handleSubmit = (event) => {
    event.preventDefault();
    let answer = (known1 * known2) / desired1;
    setdesiredResult(answer);
  };
  const handleClearForm = (event) => {
    debugger;
    event.preventDefault();
    desired1Input.current.value = "";
    known1Input.current.value = "";
    known2Input.current.value = "";
    setdesiredResult(21);
  };

  return (
    <>
      <NavBar />
      <div style={{ margin: "auto" }}>
        <h2 style={{ margin: "auto", textAlign: "center" }}>{title}</h2>
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
                  <Form.Label>{label1}</Form.Label>
                  <Form.Control
                    ref={known1Input}
                    name="known1"
                    id="known1"
                    value={known1}
                    onChange={(e) => setknown1(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <Form.Label>{label2}</Form.Label>
                  <Form.Control
                    ref={known2Input}
                    id="known2"
                    name="known2"
                    value={known2}
                    onChange={(e) => setknown2(e.target.value)}
                    type="text"
                  ></Form.Control>
                </Col>
              </Row>
              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <Form.Label>{label3}</Form.Label>
                  <Form.Control
                    ref={desired1Input}
                    name="desired1"
                    id="desired1"
                    value={desired1}
                    onChange={(e) => setdesired1(e.target.value)}
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
                    {desiredResultLabel}: {desiredResult}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            <Row>
              <Col>
                {title} = ({label1} * {label2})/{label3}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DesiredTemplate;
