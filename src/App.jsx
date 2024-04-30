//MODULES
import { useState, useEffect, lazy, Suspense } from "react";
// import { LazyMotion, domAnimation } from "framer-motion";
import { MyProvider } from './components/context/csContext.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


//COMPONENTS
const Nav = lazy(() => import('./components/Nav/Nav.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));
import getData from "./components/auth/Auth.jsx";

// PAGES
const Home = lazy(() => import('./pages/home/Home.jsx'));
const Projects = lazy(() => import('./pages/project/Projects.jsx'));
const Blog = lazy(() => import('./pages/blogs/Blog.jsx'));
const CaseStudies = lazy(() => import('./pages/caseStudies/CaseStudies.jsx'));
const About = lazy(() => import('./pages/about/About.jsx'));

//STYLING
import "./App.css";
import NotFound from "./pages/utility/404.jsx";
import Error from "./pages/utility/Error.jsx";

const queryClient = new QueryClient();

function App() {
  // eslint-disable-next-line no-unused-vars
  const [bgStyle, setBgStyle] = useState({});
getData();
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

    window.addEventListener('load', () => {
      // console.log(location);
    })

    return () => {
      window.removeEventListener('load', () => {
        // console.log(location);
      })
    }

  }, [location]);
  return (
    <MyProvider>
      <div className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Contact />
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/project" element={<Projects />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/caseStudies" element={<CaseStudies />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/error" element={<Error/>} />
              <Route exact path="/*" element={<NotFound/>}/>
            </Routes>
          </QueryClientProvider>
        </Suspense>
      </div>
    </MyProvider>
  );
}

export default App;
