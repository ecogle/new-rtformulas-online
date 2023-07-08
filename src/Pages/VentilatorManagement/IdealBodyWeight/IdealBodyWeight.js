import React, { useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";

function IdealBodyWeight({ props }) {
  const [ptSex, setPtSex] = useState();
  const [measurement, setMeasurement] = useState();
  const [height, setHeight] = useState(" ");

  return (
    <div>
      <NavBar />
      <form>
        <div className="ptSex">
          <label>
            <input
              type="radio"
              name="ptSex"
              value="male"
              checked={ptSex === "male"}
              onChange={(e) => setPtSex(e.target.value)}
            ></input>
            Male
          </label>
          <label>
            <input
              type="radio"
              name="ptSex"
              value="female"
              checked={ptSex === "female"}
              onChange={(e) => setPtSex(e.target.value)}
            ></input>
            Female
          </label>
        </div>
        <div className="measurement">
          <label>
            <input
              type="radio"
              name="measurement"
              value="inches"
              checked={measurement === "inches"}
              onChange={(e) => setMeasurement(e.target.value)}
            ></input>
            Inches
          </label>
          <label>
            <input
              type="radio"
              name="measurement"
              value="centimeters"
              checked={measurement === "centimeters"}
              onChange={(e) => setMeasurement(e.target.value)}
            ></input>
            Centimeters
          </label>
        </div>

        <div>
          <label>height</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>{ptSex}</div>
        <div>{measurement}</div>
      </form>
    </div>
  );
}

export default IdealBodyWeight;
