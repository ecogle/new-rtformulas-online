import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

let tempList = [];

export default function InitialTidalVolume(props) {
  useEffect(() => {
    debugger;
    if (props.ibw !== 0) {
      if (props.ibw !== "") {
        for (let i = 4; i < 9; i++) {
          let tempVal = i * props.ibw;
          tempList.push({ name: i, value: tempVal });
        }
      }
    }
  });

  return (
    <>
      <Container>
        {tempList.map((tempItem, idx) => (
          <Row>
            <Col>{`${tempItem.name}ml/kg = ${props.ibw * tempItem.value}`}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
}
