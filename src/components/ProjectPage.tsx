import { useParams } from "react-router";
import { GetProject } from "./SideProjects";

export const ProjectPage = () => {
  const p = useParams();

  const project = GetProject(`${p.id}`);

  console.log("this is project", project);

  return (
    <div className="project-page">
      <h1>{project?.name}</h1>
      <img src={project?.imageURL} alt="" />
    </div>
  );
};
