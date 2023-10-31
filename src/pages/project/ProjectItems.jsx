import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useTransform,
  useInView,
  useSpring,
  MotionValue,
  motionValue,
  useMotionValueEvent
} from "framer-motion";
import { TERipple } from "tw-elements-react";
import { Parallax } from 'react-scroll-parallax';
// const {SourceLink, LiveLink} = lazy(() => import('../../assets/Icons.jsx'));
// const LiveLink = lazy(() => import('../../assets/Icons.jsx'));
import {SourceLink, LiveLink} from '../../assets/Icons.jsx';

function ProjectItems(props) {
  
  const divRef = useRef(null);
  const divSapRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [opacity2, setOpacity2] = useState(0);


  const titleRef = useRef(null);
  const isInView = useInView(titleRef);

  const tagSpan = useRef(null);
  const spanInView = useInView(tagSpan, {
    once: true
  });
  useEffect(() => {
    if (spanInView) {
      tagSpan.current.classList.add("tagEnter");
      
      console.log(tagSpan.current.children[0].textContent)
    } else {
      tagSpan.current.classList.remove("tagEnter");
    }
  }, [spanInView]);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleMouseMove2 = e => {
    if (!divSapRef.current || isFocused2) return;

    const div2 = divSapRef.current;
    const rect2 = div2.getBoundingClientRect();

    setPosition2({ x: e.clientX - rect2.left, y: e.clientY - rect2.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };
  const handleFocus2 = () => {
    setIsFocused2(true);
    setOpacity2(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };
  const handleBlur2 = () => {
    setIsFocused2(false);
    setOpacity2(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };
  const handleMouseEnter2 = () => {
    setOpacity2(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const handleMouseLeave2 = () => {
    setOpacity2(0);
  };
  
  const containerRef = useRef(null);

  const containerView = useInView(containerRef,{
    margin: "0px 0px -70% 0px"
  });
  
const conOnclick = ()=>{
  if(containerView){
    console.log("in view");
  }else{
    console.log("not in view");
    containerRef.current.scrollIntoView({behavior:"smooth", block: "center", inline:"nearest"});
  }
}

  return (
    <>
      <TERipple rippleColor="light" rippleRadius={25} className="teripplebg" >
        <motion.div
          className="ProjectContainer base-input"
          style={{
            visibility:!containerView?'none':'visible',
            filter:containerView?'blur(0px)':'blur(2px)',
            transition:'1s ease all'
          }}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          onClick={()=>conOnclick()}
        >
       {/* <Parallax speed={-20} translateY={20}
        targetElement={targetElement}
          animate={controls}
        >*/}
          <motion.div style={{y:containerView?'0px':'-100px', transition:'0.5s ease all' }} className="projectImage" 
          animate={{ y: props.scrollPosition }}
          >
            <img src={props.image} alt="projectImage"/>
          </motion.div>
      {/*</Parallax>*/}
          <div className="projectDetaills">
            <div
              ref={titleRef}
              className="projectTitle"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "2s ease all"
              }}
            >
              <h1>{props.title}</h1>
            </div>
            <motion.div
              className="projectLang"
              animation={{
                x: ["0px", "-10px", "0px"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div className="langScroll" ref={tagSpan}>
                {props.lang.map((tags,index) => (
                  <span key={index} className="tagSpan">{tags}</span>
                ))}
              </motion.div>
            </motion.div>
            <div className="link">
              <div className="liveLink">
              <a target='_blank' id='live' href={props.live}>
              live
              <LiveLink/>
              </a>
              </div>
              <div className="sourceCode">
             {/* <Suspense fallback={<span>...</span>}>*/}
             <a target='_blank' href={props.source}>
              source
              <SourceLink/>
              </a>
             {/* </Suspense>*/}
              </div>
            </div>
          </div>
          <div className="projectDiscription">
            <div className="middleLines">
              <div
                className="saparatorLine base-input2"
                onMouseMove={handleMouseMove2}
                onFocus={handleFocus2}
                onBlur={handleBlur2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              ></div>
              <div
                ref={divSapRef}
                style={{
                  border: "1px solid rgb(228, 115, 32)",
                  opacity2,
                  WebkitMaskImage: `radial-gradient(30% 30px at ${position2.x}px ${position2.y}px, black 45%, transparent)`
                }}
                aria-hidden="true"
                className="overlay-input2"
              ></div>
            </div>
            <div className="deacriptionText">
              {props.deacription}
            </div>
            <div className="nextItem">
              case studies
            </div>
          </div>
        </motion.div>
        <div
          ref={divRef}
          style={{
            border: "1px solid rgb(228, 115, 32)",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`
          }}
          aria-hidden="true"
          className="overlay-input"
        ></div>
      </TERipple>
    </>
  );
}

export default ProjectItems;
