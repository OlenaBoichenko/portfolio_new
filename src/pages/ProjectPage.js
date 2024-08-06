import { useParams } from "react-router";

import { projects } from "./../helpers/projectsList";
import { BtnWeb } from "../components/buttons/BtnWeb";

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt="project"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {/* <BtnGitHub link="https://github.com" /> */}
          <BtnWeb link={project.link} />
        </div>
      </div>
    </main>
  );
};
