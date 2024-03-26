import { useRef, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import { OverLay } from "./Intro.jsx";
import {EduPreLoad} from '../../components/PreLoaders/About.jsx';
const getEduUrl = import.meta.env.VITE_API_GET_EDU;

const fetchEdu = async () => {
  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(getEduUrl, {
      headers
    });
    return res.data;
  }
};
function Edu() {
  const { data, isLoading, error } = useQuery("eduData", fetchEdu);
  const eduName = useRef(null);
  const eduNameInView = useInView(eduName);


  // useEffect(() => {
  //   console.log(eduInView);
  // }, [eduInView]);
  return (
    <>
    <h1 ref={eduName} style={{
      margin:'0 0 0.5em 0',
      opacity:eduNameInView?1:0,
      transition: "1s linear all"
    }}>EDUCATION</h1>
      {data ? (
        data.map((element, index) => (
          <EduItems
            key={index}
            index={index}
            collage={element.collage}
            name={element.name}
            year={element.year}
            location={element.location}
          />
        ))
      ) : (
        <>
        <EduPreLoad/>
        <EduPreLoad/>
        </>
      )}
    </>
  );
}

const EduItems = props => {
  const dirArray = [-99, 99];
  
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, {
    margin: "-30px 0px -10px 0px"
  });
  
  const nameRef = useRef(null);
  const nameInView = useInView(nameRef, {
    margin: "-30px 0px -10px 0px"
  });

  return (
    <>
      <div
      ref={eduRef}
        style={{
          opacity: eduInView ? 1 : 0
        }}
        className="eduContainer"
      >
        <div
          className="collage"
          style={{
            opacity: nameInView ? 1 : 0
          }}
        >
          {props.collage}
        </div>
        <div
          className="year"
          style={{
            opacity: nameInView ? 1 : 0
          }}
        >
          {props.year}
        </div>
        <div
          ref={nameRef}
          style={{
            opacity: nameInView ? 1 : 0
          }}
          className="name"
        >
          {props.name}
        </div>
        <div
          className="location"
          style={{
            opacity: nameInView ? 1 : 0
          }}
        >
          {props.location}
        </div>
      </div>
      <OverLay inViewRef={nameInView} inView={eduInView} length={dirArray[props.index]} />
    </>
  );
};

export { EduItems };
export default Edu;
