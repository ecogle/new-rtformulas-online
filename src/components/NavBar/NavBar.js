import React from "react";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="nav-bar">
      <Container>
        <div>RT Formulas Online</div>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
