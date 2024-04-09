//MODULES
import { useState, useEffect } from "react";
// import { LazyMotion, domAnimation } from "framer-motion";
import {MyProvider} from './components/context/csContext.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";



//COMPONENTS
import Nav from "./components/Nav/Nav.jsx";
import Contact from "./components/Contact/Contact.jsx";

//PAGES
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/project/Projects.jsx";
import Blog from './pages/blogs/Blog.jsx';
import CaseStudies from "./pages/caseStudies/CaseStudies.jsx";
import About from './pages/about/About.jsx';
//STYLING
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [bgStyle, setBgStyle] = useState({});
  
  const location = useLocation();
  useEffect(() => {
    // console.log(location);
    if (location.pathname == "/project") {
      setBgStyle({
        // transform:'translateX(-175%)'
        left: "-50%"
      });
    } else {
      setBgStyle({
        left: "70%"
      });
    }
    
  window.addEventListener('load',()=>{
    // console.log(location);
  })
  
  return ()=>{
    window.removeEventListener('load',()=>{
      // console.log(location);
    })
  }
    
  }, [location]);
  return (
    <MyProvider>
    <div className="container mx-auto">
      <Nav />
      <Contact />
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Projects />} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/caseStudies" element={<CaseStudies/>} />
        <Route exact path="/about" element={<About/>} />
        
      </Routes>
      </QueryClientProvider>
    </div>
    </MyProvider>
  );
}

export default App;
