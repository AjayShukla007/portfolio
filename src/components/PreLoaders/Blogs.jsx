import { useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

function BlogsPreload() {
  return (
    <>
      <motion.div
        style={{
          background: "#303030",
          borderRadius: "20px",
          scrollSnapAlign: "start",
          width: "100%",
          height: '20rm',
          // borderTop: "0.5px solid grey",
          display: "flex",
          flexDirection: "column",
          padding: "5%",
          gap: "2em",
          color: "#fff",
          position: "relative",
          overflow: "scroll",
          scrollbarWidth: "none"
        }}
      >
      <motion.div
        style={{
          background: "#808080",
          borderRadius: "20px",
          width: "100%",
          height: '2em',          
          padding: "5%",
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 1.5,
          repeat: Infinity
        }}
      >
      
      </motion.div>
      <motion.div
        style={{
          background: "#808080",
          width: "100%",
          height: '6em',
          borderRadius: '5px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      
      </motion.div>
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'1em'
      }}>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
        <motion.div
        style={{
          background: "#808080",
          width: "10%",
          height: '1.2em',
          borderRadius: '15px',
          padding: '0.5em',
          fontSize: '1.1em',
          scrollbarWidth: "none"
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          ease: "linear",
          duration: 2.5,
          repeat: Infinity
        }}
      >
      </motion.div>
      </div>
      </motion.div>
    </>
  );
}

export default BlogsPreload;
