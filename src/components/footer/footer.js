import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <hr />
      </div>
      <div
        style={{
          paddingTop: "10px",
          paddingLeft: "30px",
          width: "30%",
        }}
      >
        <h5
          style={{
            fontSize: "10pt",
            fontStyle: "italic",
          }}
        >
          * Disclaimer: Intended for educational use only. Not intended for use
          in place of professional judgement. Please refer to &nbsp;
          <Link to="http://www.ardsnet.org">www.ardsnet.org</Link> for updated
          information of ARDSNet protocols and inclusion criteria
        </h5>
      </div>
    </>
  );
}
