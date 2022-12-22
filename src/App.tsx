import { useEffect } from "react";
import "./App.css";
import "./Animation.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/nav/Nav";
import { getTheme } from "./components/nav/ThemeMenu";
import { SideProjects } from "./components/SideProjects";
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
      <SideProjects />
      <Footer />
    </div>
  );
}

const ScrollThing = () => {
  const obs = new IntersectionObserver((e) => {
    console.log(e);
  });

  const hiddenItems = document.querySelectorAll(".hidden");
  hiddenItems.forEach((i) => {
    obs.observe(i);
  });
  return (
    <div style={{ height: "90vh", fontSize: "2rem" }}>
      <h1>scroll</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </h1>{" "}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </h1>{" "}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </h1>{" "}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        unde alias autem eos distinctio harum tempora veniam, molestiae hic
        impedit. Debitis quibusdam consectetur ad recusandae nesciunt soluta.
        Animi, ratione libero.
      </h1>
      <h1 className="hidden">Hidden</h1>
    </div>
  );
};

export default App;
