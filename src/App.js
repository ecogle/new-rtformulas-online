import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Router, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
