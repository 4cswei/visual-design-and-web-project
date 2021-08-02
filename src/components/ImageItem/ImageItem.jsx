import React from "react";
import PText from "../PText/PText";
import "./ImageItem.css";

function ImageItem({
  title,
  format,
  formatOri01,
  formatOri02,
  objective,
  step01,
  step02,
  step03,
  step04,
  step05,
  step06,
  step07,
  img,
  imgOri,
}) {
  // console.log(optimisation[0]);
  return (
    <div>
      <div className="container-images">
        <div className="imageItem-left">
          <div className="imageItem-info">
            <h2 className="imageItem-title">{title}</h2>
            <div className="imageItem-desc">
              <PText>{format}</PText>
              <PText>{formatOri01}</PText>
              <PText>{formatOri02}</PText>
              <PText>{objective}</PText>
              <PText>{step01}</PText>
              <PText>{step02}</PText>
              <PText>{step03}</PText>
              <PText>{step04}</PText>
              <PText>{step05}</PText>
              <PText>{step06}</PText>
              <PText>{step07}</PText>
            </div>
          </div>
        </div>
        <div className="imageItem-right">
          <div className="imageItem-img">
            <PText>Before</PText>
            <img src={imgOri} alt={title} />
            <PText>After</PText>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageItem;
