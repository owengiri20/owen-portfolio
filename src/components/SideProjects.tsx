import { SimpleMotion } from "./SimpleMotion";
import NexusWebp from "../assets/nexus.webp";
import SupHero from "../assets/supremacy-hero.png";
import { useState } from "react";
interface Project {
  slug: string;
  name: string;
  description: string;
  imageURL: string;
}
const projs: Project[] = [
  {
    slug: "supremacy",
    name: "Supremacy: Battle Arena",
    description: "Typing test built in React",
    imageURL: NexusWebp,
  },
  {
    slug: "zen",
    name: "Zen - Helping Minds",
    description: "Typing test built in React",
    imageURL:
      "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
  },
  {
    slug: "tt",
    name: "TT - Typing test",
    description: "Typing test built in React",
    imageURL:
      "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
  },
];

export const GetProject = (slug: string) => {
  const filtered = projs.filter((p) => p.slug === slug);
  if (!filtered || filtered.length === 0 || !filtered[0]) {
    console.log("project does not exist");

    return undefined;
  }

  return filtered[0];
};

export const ProjectCarousel = () => {
  const [selected, setSelected] = useState(projs[0].name);
  return (
    <div className="content-container">
      <SimpleMotion>
        <h2 className="content-title">PROJECTS</h2>
        <div className="carousel">
          {projs.map((p) => {
            return (
              <ProjectCarouselCard
                key={p.name}
                name={p.name}
                description={""}
                imageURL={projs[0].imageURL}
                isSelected={p.name === selected}
                onClick={() => {
                  setSelected(p.name);
                }}
              />
            );
          })}
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
  onClick,
}: {
  name: string;
  description: string;
  imageURL: string;
  isSelected: boolean;

  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
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
