import React from "react";
import "./PText.css";

function PText({ children, style }) {
  return (
    <div>
      <p className="para" style={style}>
        {children}
      </p>
    </div>
  );
}

export default PText;
