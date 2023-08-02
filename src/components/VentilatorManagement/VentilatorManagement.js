import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import AccordianLinkItem from "../AccordianLinkItem/AccordianLinkItem";

export default function VentilatorManagement(props) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey={props.eventKey}>
          <Accordion.Header>Ventilator Management</Accordion.Header>
          <Accordion.Body>
            <ListGroup style={{ backgroundColor: "gray" }}>
              <AccordianLinkItem
                displayName="Ideal Body Weight"
                linkTo="idealbodyweight"
              />
              <AccordianLinkItem
                displayName="Initial Tidal Volume"
                linkTo="idealbodyweight/1"
              />
              <AccordianLinkItem
                displayName="Desired FiO2"
                linkTo="desiredfio2"
              />
              <AccordianLinkItem
                displayName="Desired Minute Volume"
                linkTo="desiredve"
              />
              <AccordianLinkItem
                displayName="Desired Tidal Volume"
                linkTo="desiredvt"
              />
              <AccordianLinkItem
                displayName="Desired Respiratory Rate"
                linkTo="desiredrr"
              />
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
