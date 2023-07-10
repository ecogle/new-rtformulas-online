import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccordianLinkItem from "../AccordianLinkItem/AccordianLinkItem";

export default function VentilatorManagement(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>Ventilator Management</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <AccordianLinkItem
              displayName="Ideal Body Weight"
              linkTo="idealbodyweight"
            />
            <AccordianLinkItem displayName="Initial Tidal Volume" linkTo="/" />
            <AccordianLinkItem
              displayName="Desired FiO2"
              linkTo="desiredfio2"
            />
            <ListGroup.Item>
              <Link>
                Desired V<sub>E</sub>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>
                Desired V<sub>T</sub>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>Desired RR</Link>
            </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
