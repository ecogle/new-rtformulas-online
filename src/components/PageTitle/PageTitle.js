import React from "react";

export default function PageTitle(props) {
  const pageTitle = props.title;
  return (
    <>
      <div style={{ margin: "auto" }}>
        <h2
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          {pageTitle}
        </h2>
        <hr />
      </div>
    </>
  );
}
