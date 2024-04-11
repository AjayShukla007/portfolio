import CsNav from "./csNav/CsNav.jsx";
import CsItems from "./CsItems.jsx";
import "./style/csStyles.css";
// import { useTitleData } from "../../components/context/csContext.jsx";

function CaseStudies() {
  
  return (
    <div className="CaseStudies">
      <CsNav/>
      <CsItems/>
    </div>
  );
}

export default CaseStudies;
