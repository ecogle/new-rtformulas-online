import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function VentilatorManagement() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ventilator Management</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <ListGroup.Item>
              <Link>Ideal Body Weight</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>
                Initial V<sub>T</sub>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link>
                Desired FiO<sub>2</sub>
              </Link>
            </ListGroup.Item>
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
