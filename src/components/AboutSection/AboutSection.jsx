import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PText from "../PText/PText";
import Button from "../Button/Button";
import Portrait from "../../assets/images/portrait.jpg";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div>
      <div className="container-AboutSection">
        <div className="aboutLeft">
          <SectionTitle heading="About me" />
          <PText>
            I am currently studying for a MA in Digital Media Design at
            Birkbeck, University of London. I specialise in user study, user
            experience design, usability, and web development.
          </PText>
          <div className="aboutSection-btn">
            <Button btnLink="/projects" btnText="Projects" />
            <Button btnLink="/about" btnText="Read More" />
          </div>
        </div>
        <div className="aboutRight">
          <img src={Portrait} alt="portrait" className="portrait" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
