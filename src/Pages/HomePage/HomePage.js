import React from "react";

import VentilatorManagement from "../../components/VentilatorManagement/VentilatorManagement";
import Formulas from "../../components/Formulas/Formulas";

function HomePage() {
  return (
    <div className="homepage">
      <VentilatorManagement eventKey="0" />
      <Formulas eventKey="1" />
    </div>
  );
}

export default HomePage;
