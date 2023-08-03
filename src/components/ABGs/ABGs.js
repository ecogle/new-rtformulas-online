import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordianLinkItem from "../AccordianLinkItem/AccordianLinkItem";

export default function ABGs(props) {
  return (
    <Accordion>
      <AccordionItem eventKey={props.eventKey}>
        <AccordionHeader>ABGs</AccordionHeader>
        <Accordion.Body>
          <ListGroup>
            <AccordianLinkItem
              displayName="Analyze Arterial Blood Gas"
              linkTo="/analyzeabg"
              disabled="true"
            />
          </ListGroup>
        </Accordion.Body>
      </AccordionItem>
    </Accordion>
  );
}
