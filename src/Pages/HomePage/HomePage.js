import React from "react";

import VentilatorManagement from "../../components/VentilatorManagement/VentilatorManagement";
import Formulas from "../../components/Formulas/Formulas";

function HomePage() {
  return (
    <div className="homepage">
      <VentilatorManagement />
      <Formulas />
    </div>
  );
}

export default HomePage;
