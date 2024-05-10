import { motion } from "framer-motion";
// import { useDragControls } from "framer-motion";
import { TERipple } from "tw-elements-react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { useTitleData } from '../context/csContext.jsx'
import "./styles/navItems.css";

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
NavItems.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  tooltip: PropTypes.string,
}
export default NavItems;
