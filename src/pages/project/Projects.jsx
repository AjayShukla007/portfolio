import React from "react";
import {
  motion,
  useTransform,
  useScroll
} from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";

import "./styles/projects.css";
import ProjectItems from "./ProjectItems.jsx";
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
  // const pink = saturation => `hsl(327, ${saturation}%, 50%)`;
  const blur = blur => `blur(${0 || blur}px)`;

  const { scrollY } = useScroll({
    target: mainRef
  });
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const yVelocity = useElementScrollVelocity(mainRef);

  let filter = useTransform(
    yVelocity,
    [-2000, 0, 2000],
    [blur(50), blur(0), blur(10)]
  );
if (isLoading) {
  console.log("project still loading");
}
  return (
    <motion.div
      className="allProjects"
      ref={mainRef}
      style={{ filter, transition: "1s linear all" }}
    >
      {data ? data.map(data => {
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
      }) : (<>
        <ProjectsPreload />
        <ProjectsPreload />
        <ProjectsPreload />
      </>)}
    </motion.div>
  );
}

export default Projects;
