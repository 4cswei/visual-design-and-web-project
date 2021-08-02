import React from "react";
import PText from "../PText/PText";
import { FaLinkedin, FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="footer-row">
          <div className="footer-col1">
            <h2 className="footer-col1-title">ABOUT</h2>
          </div>
          <div className="footer-col2">
            <PText>
              This is a web project for the module "Visual Design and Web
              Project". The objective is to utilise ReactJS to develop a
              website.
            </PText>
          </div>
          <div className="footer-col3">
            <div className="footer-social">
              <FaLinkedin />
              <FaFacebook />
              <FaInstagram />
            </div>
            <PText>
              Made with <FaHeart /> by Chen-Shuang Wei
            </PText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
