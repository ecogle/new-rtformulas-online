import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import * as bs from "bootstrap/dist/css/bootstrap.css";
import IdealBodyWeight from "./Pages/VentilatorManagement/IdealBodyWeight/IdealBodyWeight";
import DesiredFIO2 from "./Pages/VentilatorManagement/DesiredFIO2/DesiredFIO2";
import DesiredVe from "./Pages/VentilatorManagement/DesiredVe/DesiredVe";
import DesiredTidalVolume from "./Pages/VentilatorManagement/DesiredTidalVolume/DesiredTidalVolume";
import DesiredRR from "./Pages/VentilatorManagement/DesiredRR/DesiredRR";
import AlveolarAirEquation from "./Pages/Formulas/AlveolarAirEquation";
import PaO2FiO2Ratio from "./Pages/Formulas/Pao2fiosration";
import OxygenContent from "./Pages/Formulas/OxygenContent";
import ABGs from "./Pages/ABGs/ABGs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/idealbodyweight" element={<IdealBodyWeight />} />
        <Route path="/desiredfio2" element={<DesiredFIO2 />} />
        <Route path="/idealbodyweight/:id" element={<IdealBodyWeight />} />
        <Route path="/desiredve" element={<DesiredVe />} />
        <Route path="/desiredvt" element={<DesiredTidalVolume />} />
        <Route path="/desiredrr" element={<DesiredRR />} />
        <Route path="/alveolarairequation" element={<AlveolarAirEquation />} />
        <Route path="/pao2fio2ratio" element={<PaO2FiO2Ratio />} />
        <Route path="/oxygencontent" element={<OxygenContent />} />
        <Route path="/analyzeabg" element={<ABGs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
