import { useEffect } from "react";
import "./App.css";
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

      const { backgroundColor, cardBackgroundColor, textColor } = theme;
      r.style.setProperty("--background-color", backgroundColor);
      r.style.setProperty("--card-background-color", cardBackgroundColor);
      r.style.setProperty("--text-color", textColor);
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

export default App;
