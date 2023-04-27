import React from "react";
import SingleProject from "./SingleProject";

const projects: {
  smartphone: string;
  laptop: string;
  name: string;
  description: string;
  deployURL: string;
  codeURL: string;
}[] = [
  {
    name: "Portfolio",
    description:
      "Simple portfolio created to display my projects and a bit of information about myself, using framer-motion to give interaction and animation.",

    deployURL: "localhost:5173",
    codeURL: "",
    smartphone: "/assets/images/projects-svg/portfolio-smartphone.png",
    laptop: "/assets/images/projects-svg/portfolio-laptop.png",
  },
  {
    name: "DevBooks",
    description:
      "E-commerce React app, developed from scratch as an study project to challenge myself to create all parts from an usual e-store (authentication, shopping cart, payment processing).",
    deployURL: "https://devbooks-guguponce.vercel.app",
    codeURL: "https://github.com/guguponce/DevBooks",
    smartphone: "/assets/images/projects-svg/devbooks-smartphone.png",
    laptop: "/assets/images/projects-svg/devbooks-laptop.png",
  },
];
export default function Projects() {
  return (
    <div id="projects-container">
      <h2>Projects</h2>
    <div id="projects-box">
      {projects.map((project) => (
        <React.Fragment key={project.laptop}>
          <SingleProject
            laptopScreen={project.laptop}
            smartphoneScreen={project.smartphone}
            name={project.name}
            description={project.description}
            deployURL={project.deployURL}
codeURL={project.codeURL}
          />
        </React.Fragment>
      ))}
    </div>
    </div>
  );
}
