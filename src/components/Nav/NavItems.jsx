import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useDragControls } from "framer-motion";
import { TERipple } from "tw-elements-react";
import { useLocation, NavLink } from "react-router-dom";
import { useTitleData } from '../context/csContext.jsx'
import "./styles/navItems.css";
const variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  },
  tap: {
    scale: 0.9
  }
};

function NavItems(props) {
  
  const { mailTo, setMailTo } = useTitleData();

  return (
    <div className="mainContainer ">
      {/*<NavLink to={props.link} className="navbar-logo rounded-full focus:outline-none" activeClassName="active" >*/}
      <NavLink onClick={mailTo && setMailTo(false)} to={props.link} className={`navbar-logo rounded-full focus:outline-none ${({ isActive }) => isActive? "active": ''}`} >
        <TERipple
          rippleColor="light"
          rippleRadius={50}
          className="teripplebg"
          rippleDuration={1000}
        >
          <motion.div
            className="navIcon rounded-full tooltip"
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            {props.icon}
            <span className="tooltiptext">{props.tooltip}</span>
          </motion.div>
        </TERipple>
        </NavLink>
    </div>
  );
}

export default NavItems;
// drag
//             dragConstraints={{
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0
//             }}
/* ₹ūñŪŚĀḌḌṆṁṇ,ṁḷ̥
  const dragControls = useDragControls();

  // Use animations for div one and div two
  const divOneAnimation = useAnimation();
  const divTwoAnimation = useAnimation();

  // Function to update animations based on div three's drag position
  const updateAnimations = (x,y) => {
    // Calculate the drag length
    const dragLengthX = x;
    const dragLengthY = y;
  // console.log("x: "+x+" "+"y: "+y);
    // Update animations for div two and div one
    divTwoAnimation.start({
      x: dragLengthX / 2,
      y: dragLengthY / 2
    });
    divOneAnimation.start({
      x: dragLengthX / 3,
      y: dragLengthY / 3,
    });
  };

  return (
    <>
      <motion.div className="mainContainer" animate={divOneAnimation}>
        <motion.div className="itemNavItems" animate={divTwoAnimation}>
          <motion.div
            className="navIcon"
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            dragControls={dragControls}
            onDrag={(e, info) => {
              // Update animations on drag
              // updateAnimations(info.point.x, info.point.y);
              updateAnimations(info.delta.x, info.delta.y);
              //console.log(info);
            }}
            onDragEnd={() => {
          // Reset animations when drag is released
          divTwoAnimation.start({ x: 0,y:0 });
          divOneAnimation.start({ x: 0,y:0 });
          // You can also reset div three's position if needed
          // dragControls.start({ x: 0 });
        }}
          >
            {props.icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );*/
