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
  useMotionValue
} from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";

import "./styles/projects.css";
import ProjectItems from "./ProjectItems.jsx";
import projectData from "./ProjectData.jsx";
import useElementScrollVelocity from "../../hook/ScrollVelocity.jsx";
import ProjectsPreload from '../../components/PreLoaders/ProjectsPreload.jsx';
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
  const blur = blur => `blur(${0 || blur}px)`;

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
    [blur(50), blur(0), blur(10)]
  );

  return (
    <motion.div
      className="allProjects"
      ref={mainRef}
      style={{ filter, transition: "1s linear all" }}
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
            live={data.live}
            source={data.source}
            lang={langKey}
            y1={y2}
          />
        );
      }):(<>
      <ProjectsPreload/>
      <ProjectsPreload/>
      <ProjectsPreload/>
      </>)}
    </motion.div>
  );
}

export default Projects;
