import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TERipple } from "tw-elements-react";

function ProjectsPreload() {
  const containerRef = useRef(null);
  const containerView = useInView(containerRef, {
    margin: "0px 0px -70% 0px"
  });

  const conOnclick = () => {
    if (containerView) {
      console.log("in view");
    } else {
      console.log("not in view");
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  };

  return (
    <>
      <TERipple rippleColor="light" rippleRadius={25} className="teripplebg">
        <motion.div
          className="ProjectContainer base-input-project"
          ref={containerRef}
          onClick={() => conOnclick()}
          style={{
            visibility: !containerView ? "none" : "visible",
            filter: containerView ? "blur(0px)" : "blur(2px)",
            transition: "1s ease all",
            scrollSnapAlign: "start",
            margin: "4% 0 0 0",
            width: "80vw",
            height: "70vmin",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            overflowX: "visible"
          }}
        >
          <motion.div
            style={{
              y: containerView ? "0px" : "-100px",
              transition: "0.5s ease all",
              display: "inline-block",
              width: "35vmin",
              height: "35vmin",
              background: "#5f5f5f",
              position: "relative",
              zIndex: "50"
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
            className="projectImage"
          ></motion.div>
          <div className="projectDetaills">
            <motion.div
              className="projectTitle"
              style={{
                background: "#5f5f5f",
                color: "#5f5f5f",
                borderRadius: "20px",
                margin: "0 0 0 2em"
              }}
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                ease: "linear",
                delay: 2,
                duration: 2.5,
                repeat: Infinity
              }}
            >
              <h1>title</h1>
            </motion.div>
            <motion.div
              className="projectLang"
              animation={{
                x: ["0px", "-10px", "0px"]
              }}
            >
              <motion.div className="langScroll"></motion.div>
            </motion.div>
            <div className="link">
              <motion.div
                className="liveLink"
                style={{
                  background: "#5f5f5f",
                  color: "#5f5f5f",
                  borderRadius: "18px"
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
              >
                live
              </motion.div>
              <motion.div
                className="sourceCode"
                style={{
                  background: "#5f5f5f",
                  color: "#5f5f5f",
                  borderRadius: "18px"
                }}
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  ease: "linear",
                  delay: 3,
                  duration: 2.5,
                  repeat: Infinity
                }}
              >
                source
              </motion.div>
            </div>
          </div>
          <div className="projectDiscription">
            
            <div className="deacriptionText"></div>
            <motion.div
              className="nextItem"
              style={{
                background: "#5f5f5f",
                color: "#5f5f5f",
                borderRadius: "13px",
                overflow: "hidden"
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
            >
              case studies
            </motion.div>
          </div>
        </motion.div>
        <div
          style={{
            border: "1px solid rgb(228, 115, 32)"
          }}
          aria-hidden="true"
          className="overlay-input-project"
        ></div>
      </TERipple>
    </>
  );
}

export default ProjectsPreload;
