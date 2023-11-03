import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  motionValue,
  useTransform,
  useVelocity,
  useSpring,
  useScroll,
  useMotionValueEvent,
  useViewportScroll,
  useMotionValue
} from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { useQuery } from "react-query";
import axios from "axios";

import "./styles/projects.css";
import ProjectItems from "./ProjectItems.jsx";
import projectData from "./ProjectData.jsx";
import useElementScrollVelocity from "../../hook/ScrollVelocity.jsx";
const getProjectUrl = import.meta.env.VITE_API_GET_Projects;

const fetcher = async () => {
  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(getProjectUrl, { headers });
    return res.data.sort((a, b) => {
      if (a.grade < b.grade) return -1;
      if (a.grade > b.grade) return 1;
      return 0;
    });
  }
};

function Projects() {

  const { data, isLoading, error } = useQuery("projectsData", fetcher);

  const mainRef = React.useRef(null);
  const pink = saturation => `hsl(327, ${saturation}%, 50%)`;
  const blur = blur => `blur(${blur || 0}px)`;
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
    target: mainRef
  });
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  /* const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(mainRef.current);
  }, []);
  */

  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const y = useMotionValue(0);

  const ySmooth = useSpring(y, { damping: 50, stiffness: 400 });
  // const yVelocity = useVelocity(scrollY);
  const yVelocity = useElementScrollVelocity(mainRef);
  const scale = useTransform(yVelocity, [-3000, 0, 3000], [2, 1, 2], {
    clamp: false
  });

  const backgroundColor = useTransform(
    yVelocity,
    [-2000, 0, 2000],
    [pink(100), pink(0), pink(100)]
  );
  let filter = useTransform(
    yVelocity,
    [-2000, 0, 2000],
    [blur(50), blur(0), blur(50)]
  );

  useMotionValueEvent(scrollY, "change", latest => {
    console.log("hhh " + latest);
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  // console.log(data);
  /*drag="y"
      dragElastic={1}
      dragConstraints={{ left: -200, right: 200 }}
      style={{ x, scale, backgroundColor }}*/
  return (
    <motion.div
      className="allProjects"
      ref={mainRef}
      style={{ filter, trasition: "1s ease all" }}
    >
      {data?data.map(data => {
        const langKey = data.tags.split(' ').map(tags => {
          const tag = tags.split("");
          return (
            <>
              <span style={{ color: "red", margin: 0 }}>{tag[0]}</span>
              <span>{tag.slice(1).join("")}</span>
            </>
          );
        });
        return (
          <ProjectItems
            key={data.title}
            image={data.image}
            title={data.title}
            description={data.description}
            link={data.link}
            source={data.source}
            lang={langKey}
            y1={y2}
          />
        );
      }):"..."}
    </motion.div>
  );
}

export default Projects;
