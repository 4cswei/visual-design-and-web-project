import React from "react";
import Landing from "../../components/Landing/Landing";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import CallToAction from "../../components/CallToAction/CallToAction";

function Home() {
  return (
    <div>
      <Landing />
      <AboutSection />
      <ProjectsSection />
      <CallToAction />
    </div>
  );
}

export default Home;
