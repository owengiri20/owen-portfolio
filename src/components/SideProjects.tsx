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
    <SimpleMotion>
      <div id="side-projects" className="content-container">
        <div>
          <h2>SIDE PROJECTS</h2>
          <p>Projects I've done in my spare time</p>
        </div>

        <div className="projects-container">
          {projs.map((p) => {
            return (
              <ProjectCard
                key={p.name}
                description={p.description}
                imgURL={p.imageURL}
                name={p.name}
              />
            );
          })}
        </div>
      </div>
    </SimpleMotion>
  );
};

const ProjectCard = ({
  name,
  description,
  imgURL,
}: {
  name: string;
  description: string;
  imgURL: string;
}) => {
  return (
    <div className="project-card">
      {/* image */}
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="project-summary">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
