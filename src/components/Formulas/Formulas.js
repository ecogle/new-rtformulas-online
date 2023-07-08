import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import { Link } from "react-router-dom";

export default function Formulas() {
  return (
    <Accordion>
      <AccordionHeader>Formulas</AccordionHeader>
      <Accordion.Body>
        <ListGroup>
          <ListGroup.Item>
            <Link>Alveolar Air Equation</Link>
          </ListGroup.Item>

          <ListGroup.Item>
            <Link>
              P<sub>a</sub>O<sub>2</sub>/F<sub>i</sub>O<sub>2</sub>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link>
              O<sub>2</sub> Content
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link>Analyze ABG</Link>
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Body>
    </Accordion>
  );
}
