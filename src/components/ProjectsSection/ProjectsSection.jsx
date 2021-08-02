import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import projects from "../../assets/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "../ProjectItem/ProjectItem";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./ProjectsSection.css";

SwiperCore.use([Navigation]);

function ProjectsSection() {
  return (
    <div>
      <div className="container-ProjectsSection">
        <SectionTitle
          heading="Projects"
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "0",
          }}
        />
        <div className="projectItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // screen size 640
              640: { slidesPerView: 1 },
              // screen size 768
              768: { slidesPerView: 2 },
              // screen size 1200
              1200: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 6) return null;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    desc={project.desc}
                    img={project.img}
                    href={project.href}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
