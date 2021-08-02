import React from "react";
import "./SectionTitle.css";

function SectionTitle({ heading, style }) {
  return (
    <div>
      <h1 className="heading" style={style}>
        {heading}
      </h1>
    </div>
  );
}

export default SectionTitle;
