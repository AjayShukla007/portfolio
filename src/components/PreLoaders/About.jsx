import { useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
function IntroPreload() {
  return (
    <>
      <motion.div
        style={{
          background: "#808080",
          borderRadius: "20px",
          height: "1.3em",
          width: "80%",
          margin: "1em 1rem"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      ></motion.div>
      <motion.div
        style={{
          background: "#808080",
          borderRadius: "20px",
          height: "1.3em",
          width: "80%",
          margin: "1em 1.2rem"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 3,
          repeat: Infinity
        }}
      ></motion.div>
      <motion.div
        style={{
          background: "#808080",
          borderRadius: "20px",
          height: "1.3em",
          width: "25%",
          opacity: 1,
          margin: "1em 1.2rem",
          display: "inline-block"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 3.5,
          repeat: Infinity
        }}
      ></motion.div>
    </>
  );
}
function SkillsPreLoad() {
  return (
    <div style={{
      cursor: 'pointer',
      marginLeft: 0,
      marginTop: '100px',
      marginBottom: '100px',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      height:'60vh',
    }}>
      
    </div>
    )
}
function CertPreload() {
  return (
    <motion.div
      className="snap-center shrink-0"
      style={{
        position: "relative",
        background: "#808080",
        borderRadius: "20px",
        width: "20em",
        // minWidth:'20em',
        height: "15em",
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <motion.div
        style={{
          background: "#5f5f5f",
          width: "100%",
          height: "30%"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          delay: 1.5,
          duration: 2.5,
          repeat: Infinity
        }}
      ></motion.div>
      <div
        style={{
          // background:'#5f5f5f',
          width: "100%",
          height: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          position: "relative"
        }}
      >
        <motion.div
          style={{
            background: "#5f5f5f",
            width: "50%",
            height: "10.5%",
            borderRadius: "20px"
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            ease: "linear",
            delay: 2.5,
            duration: 2.5,
            repeat: Infinity
          }}
        ></motion.div>
        <motion.div
          style={{
            background: "#5f5f5f",
            width: "25%",
            height: "9%",
            borderRadius: "20px"
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            ease: "linear",
            delay: 3.5,
            duration: 2.5,
            repeat: Infinity
          }}
        ></motion.div>
        <motion.div
          style={{
            background: "#5f5f5f",
            width: "28%",
            height: "12.5%",
            borderRadius: "20px",
            position: "absolute",
            top: "5px",
            right: 0
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            ease: "linear",
            delay: 2.5,
            duration: 2.5,
            repeat: Infinity
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
function EduPreLoad() {
  return (
    <>
      <div
        style={{
          // background: "#808080",
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '0.8fr 1fr',
          textAlign: 'center',
          borderTop: '1px solid #808080',
          fontSize: '1.4em',
          padding:'0.5% 1%',
          margin: '0.3em 0',
          overflow: 'hidden',
          width: '100%',
          gap:'2px'
        }}
      >
        <motion.div
          style={{
            width:'70%',
            height:'0.6em',
            background: "#808080",
            textAlign: 'left',
            margin: '0 0 0 0.2em',
            borderRadius: '20px',
          }}
          animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          delay: 1.5,
          duration: 2.5,
          repeat: Infinity
        }}
        ></motion.div>
        <motion.div
          style={{
            // position:'absolute',
            // right:'0',
            width:'10%',
            margin:'0 0 0 90%',
            borderRadius: '20px',
            background: "#808080",
          }}
          animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          delay: 1.5,
          duration: 2.5,
          repeat: Infinity
        }}
        ></motion.div>
        <motion.div
          style={{
            background: "#808080",
            margin: '0 0 0 0.6em',
            borderRadius: '20px',
          }}
          animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          delay: 2.5,
          duration: 2.5,
          repeat: Infinity
        }}
        ></motion.div>
        <motion.div
          style={{
            width:'15%',
            margin:'0 0 0 85%',
            background: "#808080",
            borderRadius: '20px',
          }}
          animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          delay: 2.5,
          duration: 2.5,
          repeat: Infinity
        }}
        ></motion.div>
      </div>
    </>
  );
}

export { CertPreload, EduPreLoad, SkillsPreLoad };
export default IntroPreload;
