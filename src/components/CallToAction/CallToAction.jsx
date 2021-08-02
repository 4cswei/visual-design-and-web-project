import React from "react";
import Button from "../Button/Button";
import "./CallToAction.css";

function CallToAction() {
  return (
    <div>
      <div className="container-CTA">
        <div className="CTA-wrapper">
          <h2 className="text-CTA">Want to get in touch?</h2>
          <Button btnLink="/contact" btnText="Contact Now"></Button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
