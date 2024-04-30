import { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView
} from "framer-motion";
import { TERipple } from "tw-elements-react";
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import { SourceLink, LiveLink } from '../../assets/Icons.jsx';

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

      // console.log(tagSpan.current.children[0].textContent)
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

  const containerView = useInView(containerRef, {
    margin: "0px 0px -50% 0px"
  });
  const image = props.image;
  const cleanImage = DOMPurify.sanitize(image);
  const conOnclick = () => {
    if (containerView) {
      // console.log("in view");
    } else {
      // console.log("not in view");
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
  }

  return (
    <>
      <TERipple rippleColor="light" rippleRadius={25} className="teripplebg" >
        <motion.div
          className="ProjectContainer base-input"
          style={{
            visibility: !containerView ? 'none' : 'visible',
            filter: containerView ? 'blur(0px)' : 'blur(2px)',
            transition: '1s ease all'
          }}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          onClick={() => conOnclick()}
        >
          <motion.div style={{
            y: containerView ? '0px' : '-100px',
            transition: '0.5s ease all',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center'
          }} className="projectImage"
            animate={{ y: props.scrollPosition }}
          >
            <div dangerouslySetInnerHTML={{ __html: cleanImage }} />
          </motion.div>
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
                {props.lang.map((tags, index) => (
                  <span key={index} className="tagSpan">{tags}</span>
                ))}
              </motion.div>
            </motion.div>
            <div className="link">
              {props.live !== '$' && (<div className="liveLink">
                <a target='_blank' id='live' href={props.live} rel="noreferrer">
                  live
                  <LiveLink />
                </a>
              </div>)}
              <div className="sourceCode">
                {/* <Suspense fallback={<span>...</span>}>*/}
                <a target='_blank' href={props.source} rel="noreferrer">
                  source
                  <SourceLink />
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
              {props.description}
            </div>
          </div>
        </motion.div>
        <div
          ref={divRef}
          style={{
            border: "1px solid rgb(228, 115, 32)",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
            filter: containerView ? 'blur(0px)' : 'blur(20px)',
          }}
          aria-hidden="true"
          className="overlay-input"
        ></div>
      </TERipple>
    </>
  );
}

ProjectItems.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  live: PropTypes.string,
  lang: PropTypes.array,
  scrollPosition: PropTypes.number
}

export default ProjectItems;
