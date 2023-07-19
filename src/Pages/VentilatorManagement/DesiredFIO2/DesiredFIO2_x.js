import React from "react";
import DesiredTemplate from "../DesiredTemplate/DesiredTemplate";

export default function DesiredFIO2x() {
  const vars = {
    title: "Desired Ve",
    label1: "Known Ve",
    label2: "Known PaCO2",
    label3: "Desired PaCO2",
    desiredResultLabel: "Ve",
  };
  return <DesiredTemplate vars={vars} />;
}
