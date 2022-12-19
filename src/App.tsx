import { faEnvelope, faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./App.css";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import OwenJPG from "./assets/owen.jpg";

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <SideProjects />
      <Footer />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="hero">
      {/* column 1 */}
      <div className="column-1">
        <h1>OWEN GIRI</h1>
        <h2>FULL STACK DEVELOPER</h2>
      </div>

      {/* column 2 */}
      <div>
        <img src={OwenJPG} className="owen" alt="image of me (:" />
      </div>
    </div>
  );
};

const Nav = () => {
  // show nav menu
  const [show, setShow] = useState(false);

  // show theme menu
  const [modeMenuOpen, setModeMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div id="nav-icon">
        <div
          onClick={() => {
            setModeMenuOpen(false);
            setShow((prev) => !prev);
          }}
        >
          MENU
        </div>

        <div
          onClick={() => {
            setShow(false);
            setModeMenuOpen((prev) => !prev);
          }}
        >
          <FontAwesomeIcon size="lg" icon={faFillDrip} />
        </div>
      </div>

      {show && (
        <div
          style={{
            opacity: show ? "1" : "0",
            transition: "all .1s ease-in",
          }}
          id="nav-items"
        >
          <div>About Me</div>
          <div>Experience</div>
          <div>Side Projects</div>
          <div>Contact Me</div>

          <div className="nav-socials">
            <div>
              <FontAwesomeIcon size="lg" icon={faGithub} />
            </div>
            <div>
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
            </div>
            <div>
              <FontAwesomeIcon size="lg" icon={faEnvelope} />
            </div>
          </div>
        </div>
      )}

      {modeMenuOpen && (
        <div
          style={{
            opacity: modeMenuOpen ? "1" : "0",
            transition: "all .1s ease-in",
          }}
          id="nav-items"
          className="theme-picker"
        >
          <ColorItem backgroundColor="wheat" />
          <ColorItem backgroundColor="white" />
          <ColorItem backgroundColor="lightcoral" />
          <ColorItem backgroundColor="lightgray" />
        </div>
      )}
    </div>
  );
};

const ColorItem = ({ backgroundColor }: { backgroundColor: string }) => {
  const onChangeTheme = () => {
    const r = document.documentElement;
    if (r) {
      const rs = getComputedStyle(r);
      console.log(r);
      r.style.setProperty("--background-color", backgroundColor);
    }
  };
  return (
    <div
      onClick={onChangeTheme}
      className="theme-circle"
      style={{ background: backgroundColor }}
    />
  );
};

const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Golang",
    "SQL",
    "Git",
    "Github",
  ];

  return (
    <div className="content-container">
      <div className="about-me-intro">
        <h2>ABOUT ME 🏃 🏋️ 🧋 🥋 ☕ </h2>
      </div>

      <div className="about-me-columns">
        <div>
          <h3>GET TO KNOW ME</h3>
          <p className="get-to-know-me-description">
            Hi, my name is Owen and I am a full stack software developer. In my
            professional life, I am skilled in a variety of programming
            languages and tools such as Go, JavaScript, React, SQL, and Git. As
            a developer, I am always looking to learn and expand my skillset. In
            my personal life, I am passionate about staying active and healthy.
            Some of my hobbies include martial arts, running, and overall
            fitness. I also enjoy drawing and creating art in my free time.
            Overall, I am a well-rounded individual with a love for both my
            profession and personal interests. I am always looking for new
            opportunities to grow and learn, both personally and professionally.
          </p>
          <p>- ChatGPT (:</p>
        </div>
        <div className="about-me-skills">
          <h3>SKILLS</h3>
          <div className="skills-container">
            {skills.map((s) => {
              return (
                <div key={s} className="skill-tag">
                  {s}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
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
      techs: [
        "Typscript",
        "React",
        "Baseweb UI",
        "Golang",
        "Postgresql",
        "REST",
      ],
    },
  ];

  return (
    <div className="content-container">
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
    <div className="experience-card">
      <div className="time-span">{span}</div>

      <div className="summary">
        <h3>{name}</h3>
        <p>{description}</p>
        <div>{techs.join(" | ")}</div>
      </div>
    </div>
  );
};

const SideProjects = () => {
  const projs = [
    {
      name: "TT - Typing test",
      description: "Typing test built in React",
      imageURL:
        "https://user-images.githubusercontent.com/46738862/208370952-35f4e37c-e173-48bc-a143-d2741f86fc2e.png",
    },
  ];
  return (
    <div className="content-container">
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

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.linkedin.com/in/owen-giri-0635b3178/">LinkedIn</a>
        <a href="https://github.com/owengiri20">Github</a>
        <a href="#">Email</a>
        <a href="#">Instagram</a>
      </div>

      <div>Handcrafted from scratch by me</div>
    </footer>
  );
};

export default App;
