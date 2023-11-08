import {useRef, useEffect} from 'react';
import { motion, useInView } from "framer-motion";

function BlogItems(props) {
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };
  const details = props.details;
  const phraseLength = details.length;
  const seventyPercent = Math.round(phraseLength * 0.7);
  const partialPhrase = details.substring(0, seventyPercent);
  
const blogsRef = useRef(null);
// const blogInView = useInView(blogsRef, {
//     once: true
//   });
const blogInView = useInView(blogsRef,{
    margin: "-15% 0px -30% 0px"
  });

  
  return (
    <div 
    ref={blogsRef}
    className="blogs"
    style={blogInView?{opacity:1}:{opacity:0}}
    >
      <div className="blogTitle">
        {highlightText(props.title, props.highlight)}
      </div>
      <div className="blogDetaill">{partialPhrase}
      <div className="retio"></div>
      <a className="blogLink" target="_blank" href={props.link}>Read More</a>
      </div>
      <div className="blogTags">
        {highlightText(props.tags, props.highlight)}
      </div>
      <div className="date">{props.date}</div>
    </div>
  );
}

export default BlogItems;
