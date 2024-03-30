import { motion } from 'framer-motion';


const InfiniteScroll = ({ children }) => {
  const itemCount = React.Children.count(children);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(itemCount);

  const handleScroll = (e) => {
    if (e.target.scrollLeft === 0 && start !== 0) {
      setStart(start - 1);
      setEnd(end - 1);
    } else if (e.target.scrollLeft + e.target.clientWidth === e.target.scrollWidth && end !== itemCount * 2) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  return (
    <motion.div
      className="certContainer snap-x snap-mandatory"
      ref={certContainerRef}
      onScroll={handleScroll}
    >
      {React.Children.toArray(children).slice(start, end)}
    </motion.div>
  );
};

// ...
/*
<InfiniteScroll>
  {data.concat(data).map((element, i) => (
    <CertItem
      certContainerRef={certContainerRef}
      key={i}
      name={element.name}
      description={element.description}
      date={element.date}
      learned={element.learned}
    />
  ))}
</InfiniteScroll>
<div className="helper" ref={helperRef}></div>
*/