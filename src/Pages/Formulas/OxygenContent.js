import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PaCO2 from "../../components/Subs/Paco2";
import SaO2 from "../../components/Subs/SaO2";
import CaO2 from "../../components/Subs/CaO2";

export default function OxygenContent() {
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
                  <Form.Control type="input" />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <SaO2 />
                  </Form.Label>
                  <Form.Control type="input" />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Form.Label>
                    <PaCO2 />
                  </Form.Label>

                  <Form.Control type="input" />
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button style={{ width: "100%" }}>Submit</Button>
                </Col>
                <Col>
                  <Button style={{ width: "100%" }}>Clear</Button>
                </Col>
              </Row>
              <Row className="row-padding">
                <Col>
                  <Button className="btn btn-danger" style={{ width: "100%" }}>
                    <CaO2 />:
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
                <CaO2 /> = 1.34 * Hgb *&nbsp;
                <SaO2 />
                + (0.003 *&nbsp;
                <PaCO2 />)
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
