import { useRef, useEffect, useState } from 'react';
import Intro from "./Intro.jsx";
import Skills from "./Skills.jsx";
import Edu from "./Education.jsx";
import Cert from './Certification.jsx';
import Mail from './MailMe.jsx';
import { useQuery } from "react-query";
import axios from "axios";
import {
  motion,
  useScroll,
  useAnimation,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValueEvent,
  useMotionValue
} from "framer-motion";
import useElementScrollVelocity from "../../hook/ScrollVelocity.jsx";

import IntroPreload, {SkillsPreLoad} from '../../components/PreLoaders/About.jsx';
import {QuotesAbout, QuotesEdu, QuotesCert} from '../../components/Quotes/Quotes2.jsx';

import "./styles/about.css";
const getAboutUrl = import.meta.env.VITE_API_GET_ABOUT;

const fetcher = async () => {
  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(getAboutUrl, { headers });
    // return res.data.reverse();
    return res.data;
  }
};
function About() {
  
  /* const tempFunc = async ()=>{
    try{
      const data = await axios.get("https://dev.to/dev-ajayshukla/how-to-create-a-ripple-effect-with-tailwind-elements-react-2338");
      console.log(data);
    }catch(err){
      console.log(err);
    }
  } */
  // tempFunc()
  const { data, isLoading, error } = useQuery("aboutData", fetcher);
  const aboutRef = useRef(null);
  
  const pink = saturation => `hsl(327, ${saturation}%, 50%)`;
  const blur = blur => `blur(${blur || 0}px)`;
  const opac = opacity => `${opacity}`
  const { scrollY } = useScroll({
    target: aboutRef
  });
  
  const scrollVelocity = useVelocity(scrollY);
  // const yVelocity = useElementScrollVelocity(mainRef);

/*
  
  
  // const { scrollY } = useScroll();
  const scrollYMotionValue = useMotionValue(0);
  scrollYMotionValue.set(scrollY);
  const scrollVelocity = useVelocity(scrollYMotionValue);

  
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400
  // });
  // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  //   clamp: false
  // });

 */ 
  const scale = useTransform(scrollVelocity, [-3000, 0, 3000], [2, 1, 2], {
    clamp: false
  });
  const backgroundColor = useTransform(scrollVelocity,
    [-2000, 0, 2000],
    [pink(100), pink(0), pink(100)]
  );
  let filter = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [blur(50), blur(0), blur(50)]
  );
  let opacity = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [opac(0.5), opac(1), opac(0.5)]
  );
  
  useMotionValueEvent(scrollY, "change", latest => {
    // console.log(scale);
  });
  return (
    <motion.div className="aboutContainer" 
    ref={aboutRef}
    style={{
      opacity,
      transition: "0.3s linear all"
    }}
    >
      <h3>About page</h3>

      {data ? (
        data.map((element, i) => (
          <div key={i} className="hero">
            <Intro intro={element.intro} />
            <div className="quote2">
            <QuotesAbout/>
            </div>
            <Skills color={element.color} skills={element.skills} />
          </div>
        ))
      ) : (
        <>
        <IntroPreload/>
        <IntroPreload/>
        <IntroPreload/>
        <SkillsPreLoad/>
        </>
      )}

      <Edu />
      <div className="quote2">
      <QuotesEdu/>
      </div>
      <Cert/>
      <div className="quote2 quote2Temp">
      <QuotesCert/>
      </div>
      <Mail/>
    </motion.div>
  );
}

export default About;
