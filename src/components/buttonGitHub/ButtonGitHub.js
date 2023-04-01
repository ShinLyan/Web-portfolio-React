import gitHubIcon from "./gitHub-black.svg";
import "./ButtonGitHub.css";

export default function ButtonGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}
