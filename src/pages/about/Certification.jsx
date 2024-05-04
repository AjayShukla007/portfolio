import { useRef, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  motion,
  useInView
} from "framer-motion";
import PropTypes from 'prop-types';

import { CertPreload } from '../../components/PreLoaders/About.jsx';
const getCertUrl = import.meta.env.VITE_API_GET_CERT;

const fetchCert = async () => {
  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(getCertUrl, {
      headers
    });
    return res.data;
  }
};

function Cert() {
  const { data, isLoading, error } = useQuery("certData", fetchCert);
  // const cl = (message, color) => {
  //   console.log(`%c${message}`, `color:${color}`);
  // };

  const certContainerRef = useRef(null);
  const certContainerInView = useInView(certContainerRef);

  const [isHovered, setIsHovered] = useState(false);
  const autoplayInterval = 3000;

  function handleScroll() {
    if (
      certContainerRef.current.scrollLeft +
      certContainerRef.current.clientWidth >=
      certContainerRef.current.scrollWidth
    ) {
      setTimeout(() => {
        certContainerRef.current.scrollLeft = "0";
      }, 2000);

      // cl("works","green")
      // cl(data.length,'blue')
    }
  }
  useEffect(() => {
    if (data && data.length > 0) {
      const interval = setInterval(() => {
        if (!isHovered) {
          certContainerRef.current.scrollLeft =
            certContainerRef.current.scrollLeft + 308;
        }
      }, autoplayInterval);

      return () => clearInterval(interval);
    }
  }, [data, autoplayInterval, isHovered]);
  // this is for certContainer
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // this is for info text

  const [infoHovered, setInfoHovered] = useState(false);
  const infoMouseEnter = () => {
    setInfoHovered(true);
  };
  const infoMouseLeave = () => {
    setInfoHovered(false);
  };

  const text = {
    shortText:
      "These certificates are replicas and do not display original certifications for data privacy.",
    text: "Please note that while these certificates contain all essential details, they are replicas and not indicative of the original certifications for data privacy. The purpose is to showcase necessary information without disclosing sensitive or proprietary data."
  };
  let tempArr = [];
  (() => {
    let i = 0;
    while (i <= 10) {
      tempArr.push(i);
      i++
    }
  })()

  if (error && !isLoading) {
    throw new Error(error)
  }
  
  return (
    <>
      <h1
        style={{
          opacity: certContainerInView ? 1 : 0,
          transition: "1s linear all"
        }}
      >
        CERTIFICATE
      </h1>
      <div className="certInfo">
        <div
          className="certInfoBall"
          onMouseEnter={infoMouseEnter}
          onMouseLeave={infoMouseLeave}
        >
          <span className="certInfoIcon">i</span>
          <motion.span
            className="certInfoIcon"
            animate={{
              filter: infoHovered ? "blur(1px)" : "blur(5px)"
            }}
            transition={{
              duration: 2.5
            }}
          >
            i
          </motion.span>
        </div>
        <div
          className="certInfoText"
          style={{
            opacity: certContainerInView ? 1 : 0,
            transition: "0.6s linear all"
          }}
        >
          <span className="certInfoTextShort">{text.shortText}</span>
          <span
            className="certInfoTextFuLl"
            style={{
              opacity: infoHovered ? 1 : 0
            }}
          >
            {text.text}
          </span>
        </div>
      </div>
      <motion.div
        className="certContainer snap-x snap-mandatory"
        ref={certContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
        {data ? (
          data.map((element, i) => {
            return (
              <CertItem
                certContainerRef={certContainerRef}
                key={i}
                type={element.type}
                name={element.name}
                description={element.description}
                date={element.date}
                provider={element.provider}
                learned={element.learned}
              />
            );
          })
        ) : (
          tempArr.map((index) => (

            <CertPreload key={index} />

          ))
        )}
      </motion.div>
    </>
  );
}

const CertItem = props => {
  const certRef = useRef(null);
  const certInView = useInView(certRef, {
    margin: "0% -25% 0px -25%",
    root: props.certContainerRef
  });
  const variants1 = {
    inView: {
      opacity: 1
    },
    outView: {
      opacity: 0.5
    }
  };

  // CERTIFICATE
  return (
    <motion.div
      className="certItem snap-center shrink-0"
      ref={certRef}
      style={{
        // scale:certInView?1:0.8,
        color: certInView ? "#ebd789" : "#454545",
        transition: "1s linear transform",
        // transform:certInView?'scale(1)':'scale(0.8)'
        filter:
          props.type == "Certification"
            ? "hue-rotate(0deg)"
            : "hue-rotate(120deg)"
      }}
      animate={certInView ? "inView" : "outView"}
      variants={variants1}
    >
      <div
        className="type"
        style={{
          color: certInView ? "#655136" : "#454545",
          transition: "0.3s ease color"
        }}
      >
        {props.type}
      </div>
      <div className="certname">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="certLine"></div>
      <div className="date">{props.date}</div>
      <div className="provider">{props.provider}</div>
      <div className="learned">{props.learned}</div>
      <div className="curves">
        <div className="curveLeft"></div>
        <div className="curveRight"></div>
      </div>
      <div className="bgCurve"></div>
    </motion.div>
  );
};
CertItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  provider: PropTypes.string,
  learned: PropTypes.string,
  date: PropTypes.string,
  certContainerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
  ]),
}
export { CertItem };
export default Cert;
