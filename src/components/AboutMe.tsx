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
          <h2>ABOUT ME</h2>
        </div>

        <div className="about-me-columns">
          <div>
            <h3>GET TO KNOW ME 🏃 🏋️ 🧋 🥋 ☕</h3>
            <p className="get-to-know-me-description">
              Hi, my name is Owen and I am a full stack software developer. In
              my professional life, I am skilled in a variety of programming
              languages and tools such as Go, JavaScript, React, SQL, and Git.
              As a developer, I am always looking to learn and expand my
              skillset. In my personal life, I am passionate about staying
              active and healthy. Some of my hobbies include martial arts,
              running, and overall fitness. I also enjoy drawing and creating
              art in my free time. Overall, I am a well-rounded individual with
              a love for both my profession and personal interests. I am always
              looking for new opportunities to grow and learn, both personally
              and professionally.
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
