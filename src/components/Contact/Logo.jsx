import { useEffect, useRef } from "react";
import Vara from "vara";

function Logo({ text }) {
  const varaRef = useRef(null);

  useEffect(() => {
    if (!varaRef.current) {
      varaRef.current = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
            fontSize: 40,
            strokeWidth: 0.7,
            color: "#a7a7a7"
          }
        ]
      );
    }
  }, []);

  return <div id="vara-container" className="z-[20] logo"></div>;
}

export default Logo;
