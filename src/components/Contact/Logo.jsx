import { useEffect, useRef } from "react";
import Vara from "vara";
import PropTypes from 'prop-types';

function Logo({ text }) {
  const varaRef = useRef(null);

  useEffect(() => {
    if (!varaRef.current) {
      try{
      varaRef.current = new Vara(
        "#vara-container",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
            fontSize: 40,
            strokeWidth: 0.7,
            color: "#a7a7a7"
          }
        ]
      );
      }catch(e){
        console.log(e);
      }
    }
  }, []);

  return <div id="vara-container" className="z-[20] logo"></div>;
}
Logo.propTypes = {
  text: PropTypes.string
}
export default Logo;
