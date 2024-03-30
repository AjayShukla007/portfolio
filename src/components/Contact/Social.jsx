import { GithubIcon, LinkedinIcon, GmailIcon } from "../../assets/Icons.jsx";
import { Link } from "react-router-dom";
import { useTitleData } from '../context/csContext.jsx'
function Social() {
 
  const { setMailTo } = useTitleData();

  return (
    <div className='socialIcon'>
      <a href="/cert" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
      <Link
        onClick={() => setMailTo(true)}
        to={{
          pathname: '/cert'
        }}><GmailIcon /></Link>
      <a href="/cert" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
    </div>
  );
}

export default Social;
