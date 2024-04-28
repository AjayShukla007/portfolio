import { TypeAnimation } from "react-type-animation";
import "./styles/home.css";
import { Name } from "./Name.jsx";
import Icon from './Icons.jsx';
import QuotesHome from '../../components/Quotes/Quotes1.jsx';
import Time from '../../components/Interactive/time.jsx';


function Home() {

  return (
    <div className="home">
      <div className="homeBackground">
        <Time />
      </div>
      <Name />
      <div className="work">
        <TypeAnimation
          sequence={[
            "I am a MERN Stack Developer",
            1000,
            "I am a ReactJS Developer",
            1000,
            "I am a MERN Stack Developer",
            1000
          ]}
          speed={30}
          style={{ fontSize: "2em" }}
        />
      </div>
      <div className="icons">
        <Icon />
      </div>
      <div className="quote1">
        <QuotesHome />
      </div>
    </div>
  );
}

export default Home;
