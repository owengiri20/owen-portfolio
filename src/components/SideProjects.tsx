import { SimpleMotion } from "./SimpleMotion";

export const SideProjects = () => {
  const projs = [
    {
      name: "TT - Typing test",
      description: "Typing test built in React",
      imageURL:
        "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
    },
  ];
  return (
    <div id="side-projects" className="content-container">
      <SimpleMotion>
        <div>
          <h2 className="content-title">PROJECTS</h2>

          <div className="projects-container">
            <ProjectCard name="" imgURL="" />
            <ProjectCard name="" imgURL="" />
            <ProjectCard name="" imgURL="" />
            <ProjectCard name="" imgURL="" />
          </div>
          <div className="project-card-long"></div>
        </div>
      </SimpleMotion>
    </div>
  );
};

const ProjectCard = ({ name, imgURL }: { name: string; imgURL: string }) => {
  return (
    <div className="project-card">
      <h3>NAME</h3>
      <p>View More</p>
    </div>
  );
};
