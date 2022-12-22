import { motion, MotionConfig, Variants } from "framer-motion";
import { SimpleMotion } from "./SimpleMotion";

const exps = [
  {
    name: "Supremacy.game",
    span: "2021 - 2022",
    description:
      "An epic 24/7 live stream of a battle arena which hosts gigantic AI controlled War machines fighting for their factions, spectators can also join in the fun by supporting the War machines in their faction by utilising  supporter abilities; such as Nukes, airstrikes.",
    techs: [
      "Typscript",
      "React",
      "Material UI",
      "Golang",
      "Postgresql",
      "REST",
      "Websockets",
      "Many more",
    ],
  },
  {
    name: "Net Zero",
    span: "2020 - 2021",
    description:
      "A sustainability reporting platform that helps organizations track and measure their progress towards 'net zero' carbon emissions. Net Zero generates detailed graphs and charts to show sustainability performance, and helps organizations make informed decisions to reduce their carbon footprint.",
    techs: [
      "Typscript",
      "React",
      "Baseweb UI",
      "Golang",
      "Postgresql",
      "Graphql",
    ],
  },
  {
    name: "Helping Minds - Zen",
    span: "2020 - 2022",
    description:
      "Zen, the powerful admin tool for the Helping Minds company. With Zen, you can easily track and record important client data, including time sheets, mileage claims, personal information, and calendar meetings. Streamline your administrative tasks and keep all of your client data organized and accessible in one place with Zen.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },
];

export const WorkExperience = () => {
  return (
    <div id="experience" className="content-container">
      <div className="about-me-intro">
        <h2>WORK EXPERIENCE</h2>
        <p>Ninja Software / Syndicate 2019 - 2022</p>
      </div>

      <div className="skills-container">
        {exps.map((ex) => {
          return (
            <ExperienceCard
              name={ex.name}
              span={ex.span}
              description={ex.description}
              techs={ex.techs}
              key={ex.name}
            />
          );
        })}
      </div>
    </div>
  );
};

const ExperienceCard = ({
  name,
  span,
  description,
  techs,
}: {
  name: string;
  span: string;
  description: string;
  techs: string[];
}) => {
  return (
    <SimpleMotion>
      <div className="experience-card">
        <div className="time-span">{span}</div>

        <div className="summary">
          <h3>{name}</h3>
          <p>{description}</p>
          <div>{techs.join(" | ")}</div>
        </div>
      </div>
    </SimpleMotion>
  );
};
