import React from "react";
import Button from "../../components/Button/Button";
import PText from "../../components/PText/PText";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Portrait from "../../assets/images/portrait.jpg";
import "./About.css";
import AboutInfoItem from "../../components/AboutInfoItem/AboutInfoItem";
import CallToAction from "../../components/CallToAction/CallToAction";

function About() {
  return (
    <div>
      <div className="container-About">
        <div className="bio-section">
          <div className="bio-left">
            <PText>Hi, I am Chen-Shuang Wei,</PText>
            <SectionTitle heading="User Experience Researcher/Designer" />
            <PText>
              I am studying in London for a MA in Digital Media Design which
              focuses on web and app design. I have experience of working at a
              large company and a startup as a User Experience Researcher to
              develop hardware and software and to improve workflow in
              healthcare facilities. I am capable of working on several projects
              efficiently and effectively at the same time in a fast-paced work
              environment and of mentoring junior user researchers.
            </PText>
            <Button
              btnLink={{
                pathname: "https://www.linkedin.com/in/chen-shuang-wei",
              }}
              btnText="LinkedIn"
            />
          </div>
          <div className="bio-right">
            <img src={Portrait} alt="portrait" className="portrait" />
          </div>
        </div>
        <div className="about-info-items">
          {/* work experience section */}
          <div className="about-info-item">
            <SectionTitle heading="Work Experience" />
            <AboutInfoItem title="2019 - 2020" items={["UX Freelancer"]} />
            <AboutInfoItem title="2019 - 2019" items={["Research Intern"]} />
            <AboutInfoItem
              title="2015 - 2017"
              items={["User Experience Researcher"]}
            />
            <AboutInfoItem
              title="2014 - 2015"
              items={["Project Coordinator"]}
            />
            <AboutInfoItem
              title="2012 - 2014"
              items={["User Experience Researcher"]}
            />
            <AboutInfoItem
              title="2011 - 2012"
              items={["Quality Assurance Engineer"]}
            />
          </div>
          {/* technical skills section */}
          <div className="about-info-item">
            <SectionTitle heading="Technical Skills" />
            <AboutInfoItem
              title="Front-end"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem
              title="Design"
              items={["Adobe Illustrator", "Adobe XD", "Adobe Photoshop"]}
            />
            <AboutInfoItem
              title="Programming"
              items={["MATLAB", "R", "Python"]}
            />
          </div>
          {/* education section */}
          <div className="about-info-item">
            <SectionTitle heading="Education" />
            <AboutInfoItem
              title="Master's degrees"
              items={[
                "Digital Media Design",
                "Colour Science",
                "Industrial Engineering",
              ]}
            />
            <AboutInfoItem
              title="Bachelor's degrees"
              items={["Psychology", "Chemical Engineering"]}
            />
          </div>
        </div>
        <CallToAction />
      </div>
    </div>
  );
}

export default About;
