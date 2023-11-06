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
  return (
    <div className="blogs">
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
