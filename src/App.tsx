import "./App.css";

import OwenJPG from "./assets/owen.jpg";

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <AboutMe />
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

const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Golang",
    "SQL",
    "GIT",
    "Github",
  ];
  return (
    <div className="about-me">
      <div className="about-me-intro">
        <h2>ABOUT ME</h2>
      </div>

      <div className="about-me-columns">
        <div>
          <h3>GET TO KNOW ME</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, beatae animi repellendus eveniet laboriosam consectetur
            quia totam a odit aperiam ipsa ducimus voluptate, porro ut quidem
            magni omnis aspernatur placeat!
          </p>
        </div>
        <div className="about-me-skills">
          <h3>SKILLS</h3>
          <div className="skills-container">
            {skills.map((s) => {
              return <div className="skill-tag">{s}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
