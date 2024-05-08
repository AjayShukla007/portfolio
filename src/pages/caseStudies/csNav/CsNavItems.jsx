import { useRef } from "react";
import PropTypes from 'prop-types';

import { useTitleData } from "../../../components/context/csContext.jsx";

function CsNavItems(props) {
  const csNavItemsRef = useRef(null);
  const { title,setTitle } = useTitleData();

  const handleIdClick = async () => {
    await setTitle(csNavItemsRef.current.id);
  };

  return (
    <>
      <div
        ref={csNavItemsRef}
        className="CsNavItems"
        id={props.innerData}
        onClick={handleIdClick}
        style={{
          background: props.innerData == title ? 'rgb(139, 139, 139)' : 'transparent',
          color: props.innerData == title ? 'white' : '#b6b6b6'
        }}
      >
        <span>{props.id + 1}: </span>
        <span>{props.innerData}</span>

      </div>
    </>
  );
}
CsNavItems.propTypes = {
  innerData: PropTypes.string,
  id: PropTypes.number,
}
export default CsNavItems;
