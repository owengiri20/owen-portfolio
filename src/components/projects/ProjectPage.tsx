import { useParams } from "react-router";
import { GetProject } from "./Projects";
import { SimpleMotion } from "../SimpleMotion";
import "./project.css";

export const ProjectPage = () => {
  const { id } = useParams();
  const project = GetProject(`${id}`);
  if (!project) return <div>no project</div>;

  return (
    <div className="project-page">
      <SimpleMotion>
        <div
          className="project-hero"
          style={{
            backgroundImage: `url(${project?.imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </SimpleMotion>

      <div className="project-content">
        <div className="project-content-inner">
          <SimpleMotion>
            <h3>{project.name.toUpperCase()}</h3>
            <div className="skills-container">
              {project.techs.map((s) => {
                return (
                  <div key={s} className="skill-tag">
                    {s}
                  </div>
                );
              })}
            </div>

            <p>{project.description}</p>

            {project.tasks.length > 0 && (
              <>
                <h3>WHAT I WORKED ON</h3>
                <ul>
                  {project.tasks.map((t) => {
                    return <li key={t}>{t}</li>;
                  })}
                </ul>
              </>
            )}
          </SimpleMotion>

          <SimpleMotion>
            <div className="project-images">
              <img src={project.imageURL} alt="" />
              <img src={project.imageURL} alt="" />
            </div>
          </SimpleMotion>
        </div>
      </div>
    </div>
  );
};
