import React from "react";
import PText from "../PText/PText";
import "./AboutInfoItem.css";

function AboutInfoItem({ title = "this is title", items = ["HTML", "CSS"] }) {
  return (
    <div>
      <div className="container-AII">
        <div className="title">
          <PText>{title}</PText>
        </div>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutInfoItem;
