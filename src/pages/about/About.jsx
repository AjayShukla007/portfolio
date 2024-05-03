import { useRef } from 'react';
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
  useTransform,
  useVelocity
} from "framer-motion";

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
  
  const { data, isLoading, error } = useQuery("aboutData", fetcher);
  const aboutRef = useRef(null);
  
  const opac = opacity => `${opacity}`
  const { scrollY } = useScroll({
    target: aboutRef
  });
  
  const scrollVelocity = useVelocity(scrollY);
 
  let opacity = useTransform(
    scrollVelocity,
    [-2000, 0, 2000],
    [opac(0.5), opac(1), opac(0.5)]
  );


  if (error && !isLoading) {
    throw new Error(error)
  }
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
