import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.css";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
  const [show, setShow] = useState(false);
  const [_mode, _setMode] = useState(localStorage.getItem("mode") || "light");

  const toggleMode = () => {
    const mode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", mode === "light" ? "dark" : "light");
    const mode2 = localStorage.getItem("mode") || "light";
    _setMode(mode2);
  };

  return (
    <div className="nav">
      <div id="nav-icon">
        <div
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          MENU
        </div>

        <div
          onClick={() => {
            toggleMode();
          }}
        >
          {_mode === "light" ? (
            <FontAwesomeIcon size="lg" icon={faMoon} />
          ) : (
            <FontAwesomeIcon size="lg" icon={faSun} />
          )}
        </div>
      </div>

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
    </div>
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
    <div className="about-me">
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
      name: "Helping Minds - Zen",
      span: "2020 - 2021",
      description: "Lorem blah blah blah blahblah blahblah blah",
      techs: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      name: "Net Zero",
      span: "2020 - 2021",
      description: "Lorem blah blah blah blahblah blahblah blah",
      techs: ["HTML", "CSS", "Javascript", "React"],
    },
  ];

  return (
    <div className="work-experience">
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
  const skills = ["1", "2", "3", "4"];
  return (
    <div className="side-projects">
      <div>
        <h2>SIDE PROJECTS</h2>
        <p>Projects I've done in my spare time</p>
      </div>

      <div className="skills-container">
        {skills.map((s) => {
          return <ProjectCard key={s} />;
        })}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="project-card">
      {/* image */}
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${OwenJPG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="project-summary">
        <h3>Project Name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quos, iure exercitationem facere asperiores veritatis error, ipsum
          minima, consectetur obcaecati qui! Numquam quasi nihil ipsa
          consectetur aut quae mollitia quod!
        </p>
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
