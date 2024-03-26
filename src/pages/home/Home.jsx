import {useEffect} from 'react';
import { TypeAnimation } from "react-type-animation";
import "./styles/home.css";
import {Name} from "./Name.jsx";
import Icon from './Icons.jsx';
import Motivation from './Motivation.jsx';
import QuotesHome from '../../components/Quotes/Quotes1.jsx';

function Home() {
useEffect(() => {
  // const vivus = new Vivus('my-svg', { 
  //   type: "scenario-sync",
  //     duration: 11,
  //     delay: 3,
  //     forceRender: false,
  //     animTimingFunction: Vivus.EASE
  // });
}, []);
  return (
    <div className="home">
      <Name />
    {/*<div className="motivation">
      <Motivation/>
    </div>*/}
      <div className="work">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I am a MERN Stack Developer",
            1000,
            "I am a ReactJS Developer",
            1000,
            "I am a MERN Stack Developer",
            1000
          ]}
          speed={30}
          style={{ fontSize: "2em" }}
        /> 
      </div>
      <div className="icons">
        <Icon/>
      </div>
      <div className="quote1">
        <QuotesHome/>
      </div>
      <div className="homeBackground">
      </div>
    </div>
  );
}

export default Home;

// repeat={Infinity}