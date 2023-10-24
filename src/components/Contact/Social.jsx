import { GithubIcon, LinkedinIcon, GmailIcon } from "../../assets/Icons.jsx";

function Social() {
  // const allicons = [
  //   { id: "github", Src: <GithubIcon /> },
  //   { id: "linkedin", Src: <LinkedinIcon /> },
  //   { id: "gmail", Src:  }
  // ];
  return (
    <div className='socialIcon'>
      <div><LinkedinIcon/></div>
      <div><GmailIcon /></div>
      <div><GithubIcon /></div>
    </div>
  );
}

export default Social;
