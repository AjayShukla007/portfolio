import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  MotionValue,
  useMotionValueEvent
} from "framer-motion";
import { TERipple } from "tw-elements-react";
import { Parallax } from 'react-scroll-parallax';

export function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
// export function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }
// export function Image({ id }: { id: number }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section>
//       <div ref={ref}>
//         <img src={`/${id}.jpg`} alt="A London skyscraper" style={{ y }} />
//       </div>
//     </section>
//   );
// }

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
  // const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  // const y1 = useParallax(scrollYProgress, 300);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  
  // const { scrollY } = useScroll({
  //   target: containerRef
  // });
  // const y1 = useTransform(scrollY, [0, 1], [0, 300]);
  
useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest)
  })
// useEffect(() => {
  
// }, [scrollYProgress]);
  return (
    <>
      <TERipple rippleColor="light" rippleRadius={25} className="teripplebg" >
        <motion.div
          className="ProjectContainer base-input"
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          
        >
        <Parallax speed={-20}>
          <motion.div ref={paraRef.ref} style={{ transition:'5s ease all' }} className="projectImage" >
            <img src={props.image} alt="projectImage"/>
          </motion.div>
      </Parallax>
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
              <div className="liveLink">{props.link.live}</div>
              <div className="sourceCode">{props.link.source}</div>
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
            {props.deacription}
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
