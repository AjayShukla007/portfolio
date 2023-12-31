//VITE_API_GET_Projects=https://AjayShukla-api.onrender.com/api/project/getProject
const getProjectUrl = import.meta.env.VITE_API_GET_Projects;
const authUrl = import.meta.env.VITE_API_AUTH;
const conf1 = import.meta.env.VITE_API_USER;
const conf2 = import.meta.env.VITE_API_PASS;
import axios from "axios";

const getData = async () => {
  const credentials = {
    userName: conf1,
    password: conf2
  };
  try {
    const response = await axios.post(authUrl, credentials);
    // console.log(response.data);
    const headers = {
      authToken: `${response.data.authToken}`
    };
    sessionStorage.setItem("authToken", response.data.authToken);
  } catch (error) {
    console.log(error);
  }
};
getData();


const projectData = [
  {
    key: "p1",
    title: "Ai-mrk",
    image: "#",
    lang: [
      "#ReactJS",
      "#NodeJS",
      "#ExpressJS",
      "#MongoDB",
      "#framerMotion",
      "#JWT"
    ],
    link: {
      live: "https://github.com/AjayShukla007/Ai-mrk",
      source: "https://github.com/AjayShukla007/Ai-mrk"
    },
    deacription: ` Ai-mrk, an AI-powered Markdown editor.
      The frontend is built with React Typescript, while the backend uses Express. The application leverages an advanced natural language model for AI capabilities. It features AI content generation, real-time data parsing, GitHub integration for README generation, syntax highlighting, customizable themes, and media embedding. Future enhancements include secure user authentication with password hashing and JWT token creation, encrypted cloud storage for user data protection, and compatibility with popular file formats like HTML and PDF for scanning and parsing into Markdown. The project is in its alpha stage and will be made public upon completion.`
  },
  {
    key: "p2",
    title: "Google keep clone",
    image: "#",
    lang: [
      "#JavaScript",
      "#HammerJS",
      "#AnimeJS",
      "#localStorage",
      "#anime.css"
    ],
    link: {
      live: "live",
      source: "src"
    },
    deacription: "project deacription this should be long"
  },
  {
    key: "p3",
    title: "Job code",
    image: "#",
    lang: [
      "#ReactJS",
      "#NodeJS",
      "#ExpressJS",
      "#MongoDB",
      "#framerMotion",
      "#JWT"
    ],
    link: {
      live: "live",
      source: "src"
    },
    deacription: "project deacription this should be long"
  },
  {
    key: "p4",
    title: "4th pro",
    image: "#",
    lang: [
      "#ReactJS",
      "#NodeJS",
      "#ExpressJS",
      "#MongoDB",
      "#framerMotion",
      "#JWT"
    ],
    link: {
      live: "live",
      source: "src"
    },
    deacription: "project deacription this should be long"
  },
  {
    key: "p5",
    title: "4th pro",
    image: "#",
    lang: [
      "#ReactJS",
      "#NodeJS",
      "#ExpressJS",
      "#MongoDB",
      "#framerMotion",
      "#JWT"
    ],
    link: {
      live: "live",
      source: "src"
    },
    deacription: "project deacription this should be long"
  }
];

export default projectData;
