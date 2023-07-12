import { Container, Row, Col } from "react-bootstrap";

export default function InitialTidalVolume(props) {
  const mls = [4, 5, 6, 7, 8];

  return (
    <>
      <Container>
        <Row>
          <Col>Tidal Volumes</Col>
        </Row>

        {mls.map((val, idx) => {
          return (
            <Row>
              <Col>{`${val}ml/kg : ${val * props.answer} ml`}</Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
