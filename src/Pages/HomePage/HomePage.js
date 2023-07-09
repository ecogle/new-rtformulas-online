import React from "react";

import VentilatorManagement from "../../components/VentilatorManagement/VentilatorManagement";
import Formulas from "../../components/Formulas/Formulas";
import NavBar from "../../components/NavBar/NavBar";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <VentilatorManagement />
      <Formulas />
    </div>
  );
}

export default HomePage;
