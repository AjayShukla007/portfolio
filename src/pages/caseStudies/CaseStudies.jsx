import CsNav from "./csNav/CsNav.jsx";
import CsItems from "./CsItems.jsx";
import "./style/csStyles.css";
// import { useTitleData } from "../../components/context/csContext.jsx";

/* const fetchedData = [
  {
    id: 1,
    title: "title",
    flow: "flowChart",
    description: "description",
    techUsed: "tech used",
    motivation: "motivation to build this project"
  },
  {
    id: 2,
    title: "title",
    flow: "flowChart",
    description: "description",
    techUsed: "tech used",
    motivation: "motivation to build this project"
  },
  {
    id: 3,
    title: "title",
    flow: "flowChart",
    description: "description",
    techUsed: "tech used",
    motivation: "motivation to build this project"
  }
]; */


function CaseStudies() {
  
// const {title} = useTitleData();

  return (
    <div className="CaseStudies">
      <CsNav/>
      <CsItems/>
    </div>
  );
}

export default CaseStudies;
