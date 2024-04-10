import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";

import BlogItems from "./BlogItems.jsx";
import "./styles/style.css";
import BlogsPreload from '../../components/PreLoaders/Blogs.jsx';
const getBlogsUrl = import.meta.env.VITE_API_GET_BLOG;


const fetcher = async () => {
  const head = await sessionStorage.getItem("authToken");
  if (head) {
    const headers = {
      authToken: `${head}`
    };
    const res = await axios.get(
      getBlogsUrl,
      { headers }
    );
    return res.data
  }
};

function Blog() {
  const { data, isLoading, error } = useQuery("blogData", fetcher);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const placeholderRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState("Search");
  const [blur, setBlur] = useState(true);
  const [change, setChange] = useState(true);

  const handleOnChange = e => {
    const searchText = e.target.value;
    setSearch(searchText);

    if (searchText === "" || searchText === "#") {
      setFilteredData([]);
    } else {
      const tagSearch = searchText.startsWith("#");
      const formattedSearch = searchText.toLowerCase().replace("#", "");
      const filtered = data.filter(blog => {
        if (tagSearch) {
          setChange(false);
          setPlaceholderText("Tag");
          return blog.tags.toLowerCase().includes(formattedSearch);
        } else {
          setChange(true);
          setPlaceholderText("Search");
          return blog.title.toLowerCase().includes(formattedSearch);
        }
      });
      setFilteredData(filtered);
    }
  };
  const varients1 = {
    back: {
      filter: ["blur(1px)", "blur(1px)", "blur(1px)", "blur(0px)"],
      // opacity:[0.5,1],
      // x:['300%','0%'],
      left: ["80%", "5%"]
    },
    go: {
      filter: ["blur(1px)", "blur(1px)", "blur(1px)", "blur(0px)"],
      opacity: [0.5, 1],
      // x:['0%','300%'],
      left: ["5%", "80%"]
    }
  };
  const varients2 = {
    back: {
      filter: ["blur(1px)", "blur(1px)", "blur(1px)", "blur(0px)"],
      opacity: [0.5, 1]
    },
    go: {
      filter: ["blur(1px)", "blur(1px)", "blur(1px)", "blur(0px)"],
      opacity: [0.5, 1]
    }
  };

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
    setBlur(false);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setOpacity(0);
    if (e.target.value.length < 1) {
      setBlur(true);
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };


  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setIndex((index + 1) % data.length);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, data]);


  return (
    <motion.div
      className="allBlogs">
      <div className="searchBpx">
        <input
          type="search"
          name="search"
          id="search"
          className="base-input3"
          value={search}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <input
          ref={divRef}
          style={{
            border: "1px solid rgb(228, 115, 32)",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`
          }}
          aria-hidden="true"
          className="overlay-input3"
        />
        <div ref={placeholderRef} className="searchPlaseHolder">
          <motion.span animate={blur ? "back" : "go"} variants={varients1}>
            <motion.span
              className="placeText"
              animate={change ? "back" : "go"}
              variants={varients2}
            >
              {placeholderText}
            </motion.span>
          </motion.span>
        </div>
      </div>

      {filteredData.length > 0
        ? filteredData.map((element, index) => (
          <BlogItems
            key={index}
            title={element.title}
            details={element.details}
            tags={element.tags}
            date={element.date}
            link={element.link}
            highlight={search}
          />
        ))
        : data ? data.map((element, index) => (
          <BlogItems
            key={index}
            title={element.title}
            details={element.details}
            tags={element.tags}
            date={element.date}
            link={element.link}
            highlight={search}
          />
        )) : (
          <>
            <BlogsPreload />
            <BlogsPreload />
            <BlogsPreload />
          </>
        )}
    </motion.div>
  );
}
export default Blog;
