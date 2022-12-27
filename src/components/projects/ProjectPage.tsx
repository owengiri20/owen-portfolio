import { useParams } from "react-router";
import { GetProject } from "./Projects";
import { SimpleMotion } from "../SimpleMotion";
import "./project.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProjectPage = () => {
  const { id } = useParams();
  const project = GetProject(`${id}`);
  if (!project) return <div>no project</div>;

  const responsive2 = {
    desktop: {
      breakpoint: {
        max: 4000,
        min: 0,
      },
      items: 1,
    },
  };

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
            <div className="project-name">
              <h3>{project.name.toUpperCase()}</h3>
              {project.url && (
                <a target="_blank" href={project.url}>
                  VIEW PROJECT
                </a>
              )}
            </div>

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
            <SimpleMotion>
              <div className="project-images">
                <Carousel infinite responsive={responsive2} arrows showDots>
                  {project.images.map((img) => (
                    <div
                      className="project-img"
                      key={img}
                      style={{
                        height: "600px",
                        width: "100%",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  ))}
                </Carousel>
              </div>
            </SimpleMotion>
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
        </div>
      </div>
    </div>
  );
};
