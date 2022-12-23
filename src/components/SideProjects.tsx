import { SimpleMotion } from "./SimpleMotion";
import NexusWebp from "../assets/nexus.webp";

const projs = [
  {
    name: "TT - Typing test",
    description: "Typing test built in React",
    imageURL: NexusWebp,
  },
  {
    name: "TT - Typing test",
    description: "Typing test built in React",
    imageURL:
      "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
  },
];

export const ProjectCarousel = () => {
  return (
    <SimpleMotion>
      <div className="content-container">
        <h2 className="content-title">PROJECTS</h2>
        <div className="carousel">
          <ProjectCarouselCard
            name={"Supremacy: Battle Arena"}
            description={""}
            imageURL={projs[0].imageURL}
            isSelected={true}
          />
          <ProjectCarouselCard
            name={""}
            description={""}
            imageURL={projs[0].imageURL}
            isSelected={false}
          />
          <ProjectCarouselCard
            name={""}
            description={""}
            imageURL={projs[0].imageURL}
            isSelected={false}
          />
        </div>
      </div>
    </SimpleMotion>
  );
};

export const ProjectCarouselCard = ({
  name,
  description,
  imageURL,
  isSelected,
}: {
  name: string;
  description: string;
  imageURL: string;
  isSelected: boolean;
}) => {
  return (
    <div
      className={"carousel-card " + (isSelected ? "selected" : "")}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isSelected && (
        <div className="carousel-bottom">
          <h3 className="project-title">{name.toUpperCase()}</h3>
          <p className="click-to-view">CLICK FOR MORE INFO</p>
        </div>
      )}
    </div>
  );
};
