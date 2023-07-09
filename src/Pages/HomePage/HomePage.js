import React from "react";

import VentilatorManagement from "../../components/VentilatorManagement/VentilatorManagement";
import Formulas from "../../components/Formulas/Formulas";
import NavBar from "../../components/NavBar/NavBar";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <VentilatorManagement eventKey="0" />
      <Formulas eventKey="1" />
    </div>
  );
}

export default HomePage;
