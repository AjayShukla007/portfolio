import { GithubIcon, LinkedinIcon, GmailIcon } from "../../assets/Icons.jsx";
import { Link } from "react-router-dom";
import { useTitleData } from '../context/csContext.jsx'
function Social() {
 
  const { setMailTo } = useTitleData();

  return (
    <div className='socialIcon'>
      <a href="https://www.linkedin.com/in/ajay-shukla-803308212" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
      <Link
        onClick={() => setMailTo(true)}
        to={{
          pathname: '/about'
        }}><GmailIcon /></Link>
      <a href="https://github.com/AjayShukla007" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
    </div>
  );
}

export default Social;
