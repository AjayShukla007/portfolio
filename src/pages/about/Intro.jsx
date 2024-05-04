import { useState, useRef } from "react";
import {
  useInView
} from "framer-motion";
import PropTypes from 'prop-types';

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

  const handleBlur = => {
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
OverLay.propTypes = {
  introRef: PropTypes.node,
  inViewRef: PropTypes.node,
  length: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  index: PropTypes.number,
}
export { OverLay };
export default Intro;
