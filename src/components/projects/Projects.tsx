import { SimpleMotion } from "../SimpleMotion";
import NexusWebp from "./assets/nexus.webp";
import { useState } from "react";
import { useNavigate } from "react-router";
interface Project {
  slug: string;
  name: string;
  description: string;
  imageURL: string;
  tasks: string[];
  techs: string[];
}
const projs: Project[] = [
  {
    slug: "supremacy",
    name: "Supremacy: Battle Arena",
    description:
      "As Ninja Software transforms from a successful software consulting company, to operating as 'Ninja Syndicate', a full-fledged gaming studio. Our debut project as a studio is Supremacy, a epic mech battle arena game. In Supremacy, players can watch nonstop action as giant AI-controlled war machines (mechs) engage in intense battles. As a spectator, you have the opportunity to get even more involved by supporting your preferred faction with special abilities like airstrikes and nukes. This unique gaming experience is sure to be a hit with players and spectators alike, and we can't wait for everyone to try it out.",

    imageURL: NexusWebp,
    tasks: [
      "Custom user avatar creation",
      "Built and designed user's public profile page",
      "Built React front end to show live stream feed using Ovenmedia engine",
      "Voice chat feature for mech commanders, using Oven Live Kit",
      "Telegram notifications bot: to deliver notifications to players when their war machines are coming up to battle",
    ],
    techs: [
      "Golang",
      "React",
      "Typescript",
      "Material UI",
      "PostgresQL",
      "Websockets",
      "RESTful APIs",
      "Oven Media Engine",
      "Discord Bot API",
      "Docker",
    ],
  },
  {
    slug: "zen",
    name: "Zen - Helping Minds",
    description:
      "As a junior developer at Ninja Software, I had the opportunity to work on Zen, a comprehensive admin platform for the Helping Minds company. The platform was designed to streamline the management of client data, including calendar appointments, travels, timesheets, and mileage claims. This project was one of the first major projects I worked on and it helped me to gain valuable experience in software development.",
    imageURL:
      "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
    tasks: [
      "Built admin pages to manage and view users, clients data",
      "Built timesheets generator",
      "Built timesheets/mileage claims PDF exporter",
    ],
    techs: [
      "Golang",
      "Typescript",
      "React",
      "RESTful APIs",
      "Base Web UI",
      "Google Maps API",
    ],
  },
  {
    slug: "tt",
    name: "TT - Typing test",
    description:
      "I decided to build a typing test using Material UI as a way to not only improve my typing skills, but also to learn more about the library. I have always been a fan of typing games like Typeracer and Monkeytype, and I thought that building my own typing test would be a fun and challenging project. ",

    imageURL:
      "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
    tasks: [],
    techs: [],
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
    <div className="content-container" id="projects">
      <SimpleMotion>
        <h2 className="content-title">PROJECTS</h2>
        <div className="carousel">
          {projs.map((p) => {
            return (
              <ProjectCarouselCard
                key={p.name}
                project={p}
                isSelected={p.name === selected}
                onClick={() => {
                  setSelected(p.name);
                }}
              />
            );
          })}
        </div>
        {/* 
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
              backgroundImage: `url(${NexusWebp})`,
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
          />
          <div
            style={{
              backgroundImage: `url(${NexusWebp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div> */}
      </SimpleMotion>
    </div>
  );
};

export const ProjectCarouselCard = ({
  project,
  onClick,
  isSelected,
}: {
  isSelected: boolean;
  project: Project;
  onClick: () => void;
}) => {
  const nav = useNavigate();
  const { name, imageURL, slug } = project;

  return (
    <div
      onClick={isSelected ? () => nav("/projects/" + slug) : () => onClick()}
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
