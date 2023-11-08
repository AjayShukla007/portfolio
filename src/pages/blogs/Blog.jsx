import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";

import BlogItems from "./BlogItems.jsx";
import "./styles/style.css";

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
    // return res.data.reverse();
    return res.data
  }
};

function Blog() {
  const { data, isLoading, error } = useQuery("blogData", fetcher);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  // const data = [
  //   {
  //     title: "this it blog title",
  //     details:
  //       "this is blog details after 5 lines there's one read more option that is the link to the original blog...read more",
  //     tags: "#webdev #react #soOn",
  //     date: "2023/8/23"
  //   },
  //   {
  //     title: "this it blog title 2 the second blog",
  //     details:
  //       "this is blog details after 5 lines there's one read more option that is the link to the original blog...read more",
  //     tags: "#webdev #node #express #react #soOn",
  //     date: "2023/10/28"
  //   }
  // ];
  const placeholderRef = useRef(null);
  const [placeholderText, setPlaceholderText] = useState("Search");
  const [blur, setBlur] = useState(true);
  const [change, setChange] = useState(true);
  // transform:'translate(300%, 0)'
  // const handleFocus = () => {
  //   setBlur(false);
  // };
  // const handleBlur = e => {
  //   if (e.target.value.length < 1) {
  //     setBlur(true);
  //   }
  // };
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
  
  
  // transition: {
  //   ease: "linear",
  //   duration: 2
  // }
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
        : data?data.map((element, index) => (
            <BlogItems
              key={index}
              title={element.title}
              details={element.details}
              tags={element.tags}
              date={element.date}
              link={element.link}
              highlight={search}
            />
          )):""}
    </motion.div>
  );
}
/*title={element.title}
          date={element.date}
          details={element.details}
          tags={element.tags}
          link={element.link}*/
export default Blog;



  /*
// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };
const text1 = useRef(null);
const text2 = useRef(null);
const texts = [
    "If",
    "You",
    "Like",
    "It",
    "Please",
    "Give",
    "a Love",
    ":)",
    "by @DotOnion"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

  text1.current.textContent = texts[textIndex % texts.length];
  text2.current.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
      text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
      text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      text1.current.textContent = texts[textIndex % texts.length];
      text2.current.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

      text2.current.style.filter = "";
      text2.current.style.opacity = "100%";

      text1.current.style.filter = "";
      text1.current.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
<div id="container">
    <span id="text1"></span>
    <span id="text2"></span>
</div>

<svg id="filters">
    <defs>
        <filter id="threshold">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
        </filter>
    </defs>
</svg>

*/

/*import {useState } from 'react';
import BlogItems from "./BlogItems.jsx";
import './styles/style.css'

function Blog() {
  const [search, setSearch] = useState();
  const handleOnChange =(e)=>{
    setSearch(e.target.value)
  }
  const data = [
    {
      title:"this it blog title",
      detaills:"this is blog detaills after 5 lines there's one read more option that is the link to the origenel blog...read more",
      tags:"#webdev #react #soOn",
      date:"2023/8/23"
    },
    {
      title:"this it blog title 2",
      detaills:"this is blog detaills after 5 lines there's one read more option that is the link to the origenel blog...read more",
      tags:"#webdev #react #soOn",
        date:"2023/10/28"
    }
    ]
  return (
  <div className="allBlogs">
    <input type="search" name="search" id="search" placeholder="search" value={search} onChange={handleOnChange}/>
    {data.map((element, index) => ( 
    <BlogItems
    key={index}
    title={element.title}
    detaills={element.detaills}
    tags={element.tags}
    date={element.date}
    />
    ))}
  </div>
  )
}

export default Blog;*/
