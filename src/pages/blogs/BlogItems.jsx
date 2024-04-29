import { useRef } from "react";
import { useInView } from "framer-motion";
import PropTypes from 'prop-types';

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
  
  const blogInView = useInView(blogsRef, {
    margin: "-15% 0px -30% 0px"
  });

  return (
    <div
      ref={blogsRef}
      className="blogs"
      style={blogInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <div className="blogTitle">
        {highlightText(props.title, props.highlight)}
      </div>
      <div className="blogDetaill">
        {partialPhrase}
        <div className="retio"></div>
        <a className="blogLink" target="_blank" href={props.link} rel="noreferrer">
          Read More
        </a>
      </div>
      <div className="blogTags">
        {highlightText(props.tags, props.highlight)}
      </div>
      <div className="date">{props.date}</div>
    </div>
  );
}
BlogItems.propTypes = {
  details: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.string,
  date: PropTypes.string,
}

export default BlogItems;
