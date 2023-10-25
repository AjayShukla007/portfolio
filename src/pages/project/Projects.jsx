import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ParallaxProvider } from 'react-scroll-parallax';

import "./styles/projects.css";
import ProjectItems from "./ProjectItems.jsx";
import projectData from "./ProjectData.jsx";

function Projects() {
  return (
    <ParallaxProvider>
    <div className="allProjects">
      {projectData.map(data => (
        <ProjectItems
          key={data.key}
          image={data.image}
          title={data.title}
          deacription={data.deacription}
          link={data.link}
          lang={data.lang}
        />
      ))}
    </div>
    </ParallaxProvider>
  );
}

export default Projects;
