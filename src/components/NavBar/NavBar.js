import React from "react";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="large" className="nav-bar">
      <Container>
        <Navbar.Brand>RT Formulas Online</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
