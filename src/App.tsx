import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/nav/Nav";
import { SideProjects } from "./components/SideProjects";
import { WorkExperience } from "./components/WorkExperience";

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

export default App;
