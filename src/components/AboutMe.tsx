import { SimpleMotion } from "./SimpleMotion";

export const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "MUI",
    "Golang",
    "REST",
    "Websockets",
    "GraphQL",
    "SQL",
    "Git",
  ];

  const other = ["VS Code", "Linux", "Github"];

  return (
    <div key="about" id="about-me" className="content-container">
      <SimpleMotion>
        <div className="about-me-intro">
          <h2 className="content-title">ABOUT ME</h2>
        </div>

        <div className="about-me-columns">
          <div>
            <h3>GET TO KNOW ME 🏃 🏋️ 🧋 🥋 ☕</h3>
            <p className="get-to-know-me-description">
              Hi, I'm Owen, a full stack developer with expertise in Golang,
              Typescript, and React. I have a strong skill set in building web
              applications and am always looking to improve my skills and stay
              up-to-date with the latest technologies. I am an eager learner and
              enjoy collaborating with others.
            </p>
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

            <h3>OTHER</h3>
            <div className="skills-container">
              {other.map((s) => {
                return (
                  <div key={s} className="skill-tag">
                    {s}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SimpleMotion>
    </div>
  );
};
