import { useParams } from "react-router-dom";
import ButtonGitHub from "../components/buttonGitHub/ButtonGitHub";
import { projects } from "../helpers/projectsList";
import "../styles/ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {/* Если есть ссылка на гитхаб, то показываем кнопку */}
          {project.gitHubLink && <ButtonGitHub link="http://github.com" />}
        </div>
      </div>
    </main>
  );
}
