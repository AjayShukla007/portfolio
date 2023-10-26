import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  motionValue,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useViewportScroll
} from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

import "./styles/projects.css";
import ProjectItems from "./ProjectItems.jsx";
import projectData from "./ProjectData.jsx";

function Projects() {
  const mainRef = React.useRef(null);

  /*const scrollY = motionValue(0); // Create a MotionValue for scroll position

  const controls = useAnimation();
  const updateScrollY = () => {
      scrollY.set(-mainRef.current.getBoundingClientRect().top);
      console.log("hey ji");
    };
  // useEffect(() => {
  //   // Update scrollY value based on containerRef's top position
  //   const updateScrollY = () => {
  //     scrollY.set(-mainRef.current.getBoundingClientRect().top);
  //     console.log("hey ji");
  //   };

  //   mainRef.current.addEventListener('scroll', updateScrollY);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     mainRef.current.removeEventListener('scroll', updateScrollY);
  //   };
  // }, []);

  // Calculate the scroll position for the parallax effect
  const scrollPosition = useTransform(scrollY, (value) => {
    // Adjust this value as needed for the parallax effect
    return value * 0.5; // You can change this multiplier for stronger/weaker parallax
  });*/

  const { scrollY } = useScroll({
    target: mainRef.current
  });
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);


  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(mainRef.current);
  }, []);
  return (
      <div className="allProjects" ref={mainRef}>
        {projectData.map(data => (
          <ProjectItems
            key={data.key}
            image={data.image}
            title={data.title}
            deacription={data.deacription}
            link={data.link}
            lang={data.lang}
            y1={y2}
          />
        ))}
      </div>
  );
}

export default Projects;
