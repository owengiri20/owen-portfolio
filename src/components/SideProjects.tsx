import { SimpleMotion } from "./SimpleMotion";
import NexusWebp from "../assets/nexus.webp";
import SupHero from "../assets/supremacy-hero.png";

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
    <div className="content-container">
      <SimpleMotion>
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

        <div className="all-projects-btn">
          <div className="all-projects-btn-overlay"></div>
          <h1>VIEW ALL</h1>
          <div
            style={{
              backgroundImage: `url(${NexusWebp})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          />
          <div
            style={{
              backgroundImage: `url(${SupHero})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          />
          <div
            style={{
              backgroundImage: `url(${NexusWebp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />{" "}
          <div
            style={{
              backgroundImage: `url(${SupHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </SimpleMotion>
    </div>
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
