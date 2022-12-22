import { useEffect } from "react";
import "./Animation.css";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/nav/Nav";
import { getTheme } from "./components/nav/ThemeMenu";
import { SideProjects } from "./components/SideProjects";
import { SimpleMotion } from "./components/SimpleMotion";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  // set the theme
  useEffect(() => {
    // get theme
    const r = document.documentElement;
    if (r) {
      const name = localStorage.getItem("theme") || "white";
      const theme = getTheme(name);

      const {
        backgroundColor,
        cardBackgroundColor,
        textColor,
        footerBackgroundColor,
      } = theme;
      r.style.setProperty("--background-color", backgroundColor);
      r.style.setProperty("--card-background-color", cardBackgroundColor);
      r.style.setProperty("--text-color", textColor);
      r.style.setProperty("--footer-background-color", footerBackgroundColor);
      localStorage.setItem("theme", name);
    }
  }, []);
  return (
    <div className="app-wrapper">
      <Nav />
      <Hero />

      <AboutMe />
      <WorkExperience />
      <ScrollThing />

      <SideProjects />
      <Footer />
    </div>
  );
}

const ScrollThing = () => {
  const items = ["google", "amazon", "other"];
  return (
    <div className="timeline">
      {items.map((item, i) => {
        return (
          <SimpleMotion>
            <div
              key={item}
              className={`container ${i % 2 === 0 ? "right" : "left"}`}
            >
              <div className="textbox">
                <h2>{item}</h2>
                <small>2019-2020</small>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque impedit voluptates aut nam quis asperiores cum
                  doloremque iste fuga quidem, quaerat repellat, beatae nulla
                  eius possimus quod quas! Assumenda, praesentium.
                </p>
              </div>
            </div>
          </SimpleMotion>
        );
      })}
    </div>
  );
};

export default App;
