import { useState, useEffect, useRef } from "react";
import { useTitleData } from "../../../components/context/csContext.jsx";

function CsNavItems(props) {
  const csNavItemsRef = useRef(null);
  const { title,setTitle } = useTitleData();

  const handleIdClick = async () => {
    await setTitle(csNavItemsRef.current.id);
    // if (!csNavItemsRef.current.classList.contains("csNavActive")) {
    //   csNavItemsRef.current.classList.add("csNavActive");
    // } else {
    //   csNavItemsRef.current.classList.remove("csNavActive");
    // }
    // setTimeout(() => {
      //   csNavItemsRef.current.classList.remove("csNavActive");
      // }, 1200);
      
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

export default CsNavItems;
