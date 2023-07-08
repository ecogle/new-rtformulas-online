import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h1>RT Formulas Online</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
