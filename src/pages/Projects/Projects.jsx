import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import projects from "../../assets/data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="container-Projects">
        <div className="projects-items">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.name}
              desc={project.desc}
              img={project.img}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
