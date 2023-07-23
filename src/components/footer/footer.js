import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <h5>
        Disclaimer: Intended for educational use only. Not intended for use in
        place of professional judgement. Please refer to
        <Link to="http://www.ardsnet.org">www.ardsnet.org</Link> for updated
        information of ARDSNet protocols and inclusion criteria
      </h5>
    </div>
  );
}
