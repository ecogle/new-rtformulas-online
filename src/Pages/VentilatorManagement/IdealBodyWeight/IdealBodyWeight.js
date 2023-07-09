import React, { useState } from "react";
import NavBar from "../../../components/NavBar/NavBar";

function IdealBodyWeight({ props }) {
  const [ptSex, setPtSex] = useState();
  const [measurement, setMeasurement] = useState();
  const [height, setHeight] = useState(" ");
  const [answer, setAnswer] = useState("");

  const convertInches = (heightInInches) => {
    return heightInInches * 2.54;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempAnswer = 0;
    let varHeight = height.trim();
    let sexFactor = 45.5;
    if (measurement === "inches") {
      varHeight = convertInches(height);
    }
    if (ptSex === "male") {
      sexFactor = 50;
    }
    tempAnswer = Math.round(sexFactor + 0.91 * (varHeight - 152.4));
    setAnswer(tempAnswer);
  };

  return (
    <div>
      <NavBar />
      <form>
        <div className="ptSex" onSubmit={handleSubmit}>
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
        <button onClick={handleSubmit}>Calculate</button>
        <div id="answer">{answer}</div>
      </form>
    </div>
  );
}

export default IdealBodyWeight;
