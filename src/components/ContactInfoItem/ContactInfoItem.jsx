import React from "react";
import PText from "../PText/PText";
import { MdPlace } from "react-icons/md";
import "./ContactInfoItem.css";

function ContactInfoItem({ icon = <MdPlace />, text = "info" }) {
  return (
    <div>
      <div className="container-CII">
        <div className="contactInfo-icon">{icon}</div>
        <div className="contactInfo-text">
          <PText>{text}</PText>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoItem;
