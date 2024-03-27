import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// const quotes = [
//     {
//       quote: "The only way to do great work is to love what you do.",
//       author: "Steve Jobs"
//     },
//     {
//       quote: "I'm not afraid to fail. I'm afraid of not trying.",
//       author: "George Patton"
//     },
//     {
//       quote: "The only way to do great work is to work with great people.",
//       author: "Jim Collins"
//     },
//     {
//       quote: "The mind is everything. What you think you become.",
//       author: "Buddha"
//     },
//     {
//       quote: "The difference between ordinary and extraordinary is that little extra.",
//       author: "Jimmy Johnson"
//     },
//     {
//       quote: "The only limit to our realization of tomorrow will be our doubts of today.",
//       author: "Franklin D. Roosevelt"
//     },
//   ];

function Quotes(props) {
  const quotes = props.quotes;
  const currentIndex = quotes.length-1;
  const maxIndex = Math.floor(Math.random() * (currentIndex - 0 + 1) + 0);
  const [index, setIndex] = useState(maxIndex);
  const [anime, setAnime] = useState([1,1]);
  
  let temptIndex;
  useEffect(() => {
    // const changeQuotes = ()=>{
     
    // }
    
    const changing = setInterval(()=>{
      setAnime([1,0,1]);
      setTimeout(()=>{
      index>=quotes.length-1?setIndex(0):setIndex(index+1);
      // index>=currentIndex?setIndex(0):setIndex(maxIndex);
       setAnime([0,1])
      },1000);
      // console.log("works "+ quotes.length);
    },10000);
    return ()=>{
      clearInterval(changing);
    }
  }, [index]);
  return (
    <>
    <motion.q
    style={{
      display:'inline-block',
      color:'#595959',
      height:"50%",
      opacity:1,
      willChange:'opacity'
    }}
    animate={{
      opacity: anime,
      // scale:[1,0.9,1]
    }}
    transition={{
      ease: "linear",
      // delay: 9,
      duration: 2,
      // repeat: Infinity
    }}
    >{quotes[index].quote}</motion.q>
    <motion.div
    style={{
      display:'inline-block',
      width:'100%',
      height:"50%",
      color:'#404040',
      opacity:1,
      willChange:'opacity',
      textAlign:'right',
      
    }}
    animate={{
      opacity: anime,
      // scale:[1,0.9,1]
    }}
    transition={{
      ease: "linear",
      // delay: 9,
      duration: 3,
      // repeat: Infinity
    }}
    > - {quotes[index].author}</motion.div>
    </>
  );
}
      // {quotes
      //   ? quotes.map(e => (
      //       <>
      //         <q>{e.quote}</q>
      //         <q>{e.author}</q>
      //       </>
      //     ))
      //   : "loading"}

export default Quotes;
