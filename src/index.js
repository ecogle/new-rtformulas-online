import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import * as bs from "bootstrap/dist/css/bootstrap.css";
import IdealBodyWeight from "./Pages/VentilatorManagement/IdealBodyWeight/IdealBodyWeight";
import DesiredFIO2 from "./Pages/VentilatorManagement/DesiredFIO2/DesiredFIO2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="idealbodyweight" element={<IdealBodyWeight />} />
        <Route path="desiredfio2" element={<DesiredFIO2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
