import React from "react";
import { Link } from "react-router-dom";
import PText from "../PText/PText";
import "./ProjectItem.css";

function ProjectItem({ img, title, desc, href }) {
  // console.log(href);
  return (
    <div>
      <Link to={`${href}`} className="projectItem-img">
        <img src={img} alt={title} />
      </Link>
      <div className="projectItem-info">
        <h2 className="projectItem-title">{title}</h2>
        <PText className="projectItem-desc">{desc}</PText>
      </div>
    </div>
  );
}

export default ProjectItem;
