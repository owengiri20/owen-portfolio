import { SimpleMotion } from "./SimpleMotion";
interface Experience {
  name: string;
  span: string;
  role: string;
  description: string;
  techs: string[];
}
const exps: Experience[] = [
  {
    name: "Ninja Syndicate",
    role: "",
    span: "2021 - 2022",
    description:
      "At the start of 2021, the Supremacy project kicked off, and now Ninja Software is tranforming from a consultant company to a full fledge gaming studio",
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
    name: "Ninja Software",
    role: "",
    span: "2019 - 2022",
    description:
      "Nearing the end of 2019, I landed a full time role as a junior software developer.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },

  {
    name: "Game Changer Awards (Volenteer judge)",
    role: "",
    span: "2019",
    description:
      "As I neared the end of my internship with Ninja Software, I was given the chance to be a judge for the 2019 Game Changer Awards, a STEM showcase event where high school students presented their projects.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },
  {
    name: "Ninja Software Internship",
    role: "",
    span: "2019",
    description:
      "About half way through my TAFE course I landed an internship role with Ninja Software. which gave me the oppurtunity to gain valuable real world experience whilst working with other great developers and mentors.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },
  {
    name: "North Metropolitain TAFE",
    role: "",
    span: "2018",
    description:
      "Upon graduating high school, I made the decision to enroll into the  software development diploma cours at North Metro TAFE in order to gain the skills and knowledge necessary to start a career in the industry.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },

  {
    name: "High School (Start of my proramming journey)",
    role: "",
    span: "2017",
    description:
      "Somewhere at the end of highschool I stumbled across a youtube channel called Brakeys, since watching his tutorial videos i built up a passion for programming/coding.",
    techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
  },
];

export const ExperienceTimeline = () => {
  return (
    <div id="experience" className="content-container">
      <h2 className="content-title">EXPERIENCE</h2>

      <div className="timeline">
        {exps.map((ex, i) => {
          return <TimeLineCard experience={ex} index={i} key={ex.name} />;
        })}
      </div>
    </div>
  );
};

const TimeLineCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const { name, span, description, techs } = experience;
  return (
    <SimpleMotion>
      <div
        key={name}
        className={`container ${index % 2 === 0 ? "left" : "right"}`}
      >
        <div className="textbox">
          <small>{span}</small>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </SimpleMotion>
  );
};
