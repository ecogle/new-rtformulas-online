import React from "react";

import VentilatorManagement from "../../components/VentilatorManagement/VentilatorManagement";
import Formulas from "../../components/Formulas/Formulas";
import ABGs from "../../components/ABGs/ABGs";

function HomePage() {
  return (
    <div className="homepage">
      <VentilatorManagement eventKey="0" />
      <Formulas eventKey="1" />
      <ABGs eventKey="2" />
    </div>
  );
}

export default HomePage;
