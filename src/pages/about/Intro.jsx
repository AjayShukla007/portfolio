import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useTransform,
  useInView,
  useSpring
} from "framer-motion";

function Intro(props) {
  const intros = props.intro.split("$");
  const introOne = intros[0];
  const introTwo = intros[1];
  const introThree = intros[2];

  const introOneRef = useRef(null);
  const introOneInView = useInView(introOneRef, {
    margin: "-15% 0px -30% 0px"
  });
  const introTwoRef = useRef(null);
  const introTwoInView = useInView(introTwoRef, {
    margin: "-15% 0px -30% 0px"
  });
  const introThreeRef = useRef(null);
  const introThreeInView = useInView(introThreeRef, {
    margin: "-15% 0px -30% 0px"
  });

  const introRef = useRef(null);
  const introInViewOnce = useInView(introRef, {
    once: true
  });

  return (
    <>
      <div className="intros" ref={introRef}>
        <h4
          ref={introOneRef}
          className="introOne"
          style={{
            opacity: introInViewOnce ? 1 : 0,
            transitionDelay: "0s"
          }}
        >
          {introOne}
          <OverLay
            inViewRef={introOneInView}
            inView={introInViewOnce}
            length={99}
          />
        </h4>
        <h4
          ref={introTwoRef}
          className="introTwo"
          style={{
            opacity: introInViewOnce ? 1 : 0,
            transitionDelay: "0.7s"
          }}
        >
          {introTwo}
          <OverLay
            inViewRef={introTwoInView}
            inView={introInViewOnce}
            length={-99}
          />
        </h4>
        <h4
          ref={introThreeRef}
          className="introThree"
          style={{
            opacity: introInViewOnce ? 1 : 0,
            transitionDelay: "1.5s"
          }}
        >
          {introThree}
          <OverLay
            inViewRef={introThreeInView}
            inView={introInViewOnce}
            length={99}
          />
        </h4>
      </div>
    </>
  );
}

const OverLay = props => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = e => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <div
        className="baseLine line"
        style={{
          opacity: props.inView ? 1 : 0,
          transform: props.inViewRef
            ? "translateX(0%)"
            : `translateX(${props.length}%)`
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        ref={divRef}
        style={{
          border: "1px solid #c7c7c7",
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          transform: props.inViewRef
            ? "translate(0%, -200%)"
            : `translate(${props.length}%, -200%)`
        }}
        aria-hidden="true"
        className="overlayLine"
      />
    </>
  );
};

export { OverLay };
export default Intro;
// return (
// <>
//   <h4 className="introOne">
//     Hey there, I'm Ajay Shukla! When it comes to tech and creating awesome things online, I’m all in. I’ve dabbled in different languages and tech tools, weaving them together to build digital experiences that stand out.
//   </h4>
//   <h4 className="introTwo">
//     But it's not just about the code. though. Being a part of real-world projects and internships has been a blast. I've learned heaps about teamwork, problem-solving, and making tech work for people. I’m all about that ‘aha’ moment when everything just clicks together.
//   </h4>
//   <h4 className="introThree">
//     So, if you're looking for someone who's passionate about crafting awesome web solutions and enjoys the journey just as much as the destination, I'm your person! Let's team up and make some digital wonders happen!
//   </h4>
// </>
// )
