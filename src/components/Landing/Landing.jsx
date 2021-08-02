import React from "react";
import Logo from "../../assets/images/logo_150.gif";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="intro">
        <div className="greeting">
          <p>Hello. This is</p>
          <h1 className="greeting-name">Chen-Shuang Wei</h1>
          <p>Welcome to my portfolio page</p>
        </div>
        <div className="logo">
          <img src={Logo} alt="name-gif" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
