import React from "react";
import "./MockupItem.css";

function MockupItem({ img, title, desc }) {
  // console.log(href);
  return (
    <div>
      <h2 className="mockupItem-desc">{desc}</h2>
      <img src={img} alt={title} className="mockupItem-img" />
    </div>
  );
}

export default MockupItem;
