import { v4 as uuidv4 } from "uuid";

import HealthcareImg from "../../assets/images/ANDRD_MBL_102016-09.png";
import ColourDiffImg from "../../assets/images/car_painting.jpg";
import MatlabImg from "../../assets/images/coins.jpg";
import UxDImg from "../../assets/images/Home.png";
import VDWPImg from "../../assets/images/image_04.jpg";
import WDUXImg from "../../assets/images/WDUX.jpg";

const projects = [
  {
    // project 01
    id: uuidv4(),
    name: "Visual Design and Web Project",
    desc: "Four user interface mockups, a portfolio of six digital images, and an animated GIF.",
    img: VDWPImg,
    href: "/projects/VDWP",
  },
  {
    // project 02
    id: uuidv4(),
    name: "Web Development and User Experience",
    desc: "A responsive website using semantic HTML, CSS, and JavaScript.",
    img: WDUXImg,
    href: "/projects",
  },
  {
    // project 03
    id: uuidv4(),
    name: "User Experience Design",
    desc: "User experience research and design for a mobile application.",
    img: UxDImg,
    href: "/projects",
  },
  {
    // project 04
    id: uuidv4(),
    name: "Visually perceived colour differences",
    desc: "Car painting measurement and visually perceived colour differences.",
    img: ColourDiffImg,
    href: "/projects",
  },
  {
    // project 05
    id: uuidv4(),
    name: "Image processing with MATLAB",
    desc: "Calculation of the total sum of euro coins; image segmentation from carrot cross section images.",
    img: MatlabImg,
    href: "/projects",
  },
  {
    // project 06
    id: uuidv4(),
    name: "Healthcare hardware / software design",
    desc: "User-centred design in healthcare product development and workflow improvement.",
    img: HealthcareImg,
    href: "/projects",
  },
];

export default projects;
