import { v4 as uuidv4 } from "uuid";

import HomeImg from "../../assets/images/VD_mockup_home.png";
import AboutImg from "../../assets/images/VD_mockup_about.png";
import ProjectsImg from "../../assets/images/VD_mockup_projects.png";
import ContactImg from "../../assets/images/VD_mockup_contact.png";

const mockups = [
  {
    // mockup 01
    id: uuidv4(),
    name: "VD_mockup_home",
    desc: "Mockup 01: Home page",
    img: HomeImg,
  },
  {
    // mockup 02
    id: uuidv4(),
    name: "VD_mockup_about",
    desc: "Mockup 02: About page",
    img: AboutImg,
  },
  {
    // mockup 03
    id: uuidv4(),
    name: "VD_mockup_projects",
    desc: "Mockup 03: Projects page",
    img: ProjectsImg,
  },
  {
    // mockup 04
    id: uuidv4(),
    name: "VD_mockup_contact",
    desc: "Mockup 04: Contact page",
    img: ContactImg,
  },
];

export default mockups;
