import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import { Link } from "react-router-dom";

export default function Formulas() {
  return (
    <Accordion defaultActiveKey={0}>
      <AccordionHeader eventKey="0">Formulas</AccordionHeader>
      <Accordion.Body>
        <ListGroup>
          <Link>
            <ListGroup.Item>Alveolar Air Equation</ListGroup.Item>
          </Link>
          <ListGroup.Item>
            <Link>
              P<sub>a</sub>O<sub>2</sub>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Body>
    </Accordion>
  );
}
