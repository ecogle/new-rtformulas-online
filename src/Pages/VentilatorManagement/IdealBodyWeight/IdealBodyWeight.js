import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import "./IdealBodyWeight.css";
import {
  FloatingLabel,
  Form,
  ToggleButtonGroup,
  InputGroup,
  ToggleButton,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import InitialTidalVolume from "./InitialTidalVolume";

function IdealBodyWeight({ props }) {
  let tempAnswer = 0;
  const { id } = useParams();
  const [title, setTitle] = useState("Ideal Body Weight");
  const [ptSex, setPtSex] = useState();
  const [measurement, setMeasurement] = useState();
  const [height, setHeight] = useState(" ");
  const [answer, setAnswer] = useState("");
  const prevAnswer = useRef([answer]);
  const convertInches = (heightInInches) => {
    return Math.round(heightInInches * 2.54 * 100) / 100;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let varHeight = height.trim();
    let sexFactor = 45.5;
    if (measurement === "inches") {
      varHeight = convertInches(height);
    }
    if (ptSex === "male") {
      sexFactor = 50;
    }
    tempAnswer = Math.round(sexFactor + 0.91 * (varHeight - 152.4));
    setAnswer(tempAnswer);
  };

  const measurements = [
    { name: "inches", value: 1, displayName: "Inches" },
    { name: "centimeters", value: 2, displayName: "Centimeters" },
  ];

  const ptSexRadios = [
    { name: "male", value: 1, displayName: "Male" },
    { name: "female", value: 2, displayName: "Female" },
  ];
  useEffect(() => {
    if (answer !== "") {
      document.getElementById("ansKg").classList.remove("hidden");
      document.getElementById("ansLbs").classList.remove("hidden");
      document.getElementById("ansHr").classList.remove("hidden");
    } else {
      document.getElementById("ansKg").classList.add("hidden");
      document.getElementById("ansLbs").classList.add("hidden");
      document.getElementById("ansHr").classList.add("hidden");
    }
    if (id === "1") {
      setTitle("Initial Tidal Volume");
    }
    if (prevAnswer.current !== answer) {
    }
    prevAnswer.current = answer;
  }, [answer, id, title]);
  return (
    <>
      <NavBar />
      <div style={{ margin: "auto" }}>
        <h2 style={{ margin: "auto", textAlign: "center" }}>{title}</h2>
      </div>
      <Container className="form-area">
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <ToggleButtonGroup name="ptSex">
                        {ptSexRadios.map((ptSexRadio, idx) => (
                          <ToggleButton
                            key={idx}
                            id={`ptSexRadio-${idx}`}
                            type="radio"
                            style={{ width: "130px" }}
                            variant={"outline-primary"}
                            value={ptSexRadio.name}
                            checked={ptSex === ptSexRadio.name}
                            onChange={(e) => setPtSex(e.currentTarget.value)}
                          >
                            {ptSexRadio.displayName}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <ToggleButtonGroup type="radio" name="measurement">
                        {measurements.map((measurement, idx) => {
                          return (
                            <ToggleButton
                              key={idx}
                              id={`radio-${idx}`}
                              type="radio"
                              style={{ width: "130px" }}
                              variant={"outline-primary"}
                              value={measurement.name}
                              checked={measurement === measurement.name}
                              onChange={(e) =>
                                setMeasurement(e.currentTarget.value)
                              }
                            >
                              {measurement.displayName}
                            </ToggleButton>
                          );
                        })}
                      </ToggleButtonGroup>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="heightLabel"
                      label="Height"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        value={height}
                        style={{ width: "260px" }}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button onClick={handleSubmit}>Calculate</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>&nbsp;</Col>
                </Row>
                <Row>
                  <Col id="ansHr">
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button id="ansKg" className="btn-danger">
                      {answer} kg
                    </Button>
                    &nbsp;
                    <Button id="ansLbs" className="btn-danger">
                      {Math.round(answer * 2.2)} lbs
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h4>Formula</h4>
            <Row>
              <Col xs lg="2">
                Male:
              </Col>
              <Col>
                <div>0.91 * (height(cm) - 152.4) + 50</div>
              </Col>
            </Row>
            <Row>
              <Col xs lg="2">
                Female:
              </Col>
              <Col>0.91 * (height(cm) - 152.4) + 45.5</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {id === "1" && <InitialTidalVolume answer={answer} />}
    </>
  );
}

export default IdealBodyWeight;
