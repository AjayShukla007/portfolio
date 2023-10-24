import React, { useRef, useState } from "react";
import { TERipple } from "tw-elements-react";

function ProjectItems() {

// const divRef = useRef<HTMLInputElement>(null);
//   const [isFocused, setIsFocused] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [opacity, setOpacity] = useState(0);

//   const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
//     if (!divRef.current || isFocused) return;

//     const div = divRef.current;
//     const rect = div.getBoundingClientRect();

//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//     setOpacity(1);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     setOpacity(0);
//   };

//   const handleMouseEnter = () => {
//     setOpacity(1);
//   };

//   const handleMouseLeave = () => {
//     setOpacity(0);
//   };
  
  return (
    <>
      <TERipple rippleColor="light" rippleRadius={25} className="teripplebg">
        <div className="ProjectContainer">
          <div className="projectImage">
            <img src="#" alt="projectImage" />
          </div>
          <div className="projectDetaills">
            <div className="projectTitle">
              <h1>project title</h1>
            </div>
            <div className="projectLang">
              <span>#ReactJS</span>
              <span>#NodeJS</span>
            </div>
            <div className="link">
              <div className="liveLink">live</div>
              <div className="sourceCode">source</div>
            </div>
          </div>
          <div className="projectDiscription">
            this is about practice and a nude girl
          </div>
        </div>
      </TERipple>
    </>
  );
}

export default ProjectItems;
