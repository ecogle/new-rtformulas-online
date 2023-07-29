import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordianLinkItem from "../AccordianLinkItem/AccordianLinkItem";

export default function Formulas(props) {
  return (
    <Accordion>
      <AccordionItem eventKey={props.eventKey}>
        <AccordionHeader>Formulas</AccordionHeader>
        <Accordion.Body>
          <ListGroup>
            <AccordianLinkItem
              displayName="Alveolar Air Equation"
              linkTo="alveolarairequation"
            />

            <AccordianLinkItem displayName="P/F Ratio" linkTo="pao2fio2ratio" />
            <AccordianLinkItem displayName="Oxygen Content" linkTo="/" />
            <AccordianLinkItem
              displayName="Analyze Arterial Blood Gas"
              linkTo="/"
            />
          </ListGroup>
        </Accordion.Body>
      </AccordionItem>
    </Accordion>
  );
}
