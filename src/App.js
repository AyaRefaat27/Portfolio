import "./App.css";
import Sidebar from "./Components/Sidebar/sidebar";
import About from "./Components/About/about";
import Home from "./Components/Home/home";
import Portfolio from "./Components/Portfolio/portfolio";
import Resume from "./Components/Resume/resume";
import Services from "./Components/Services/services";
import Contact from "./Components/Contact/contact";
import Skills from "./Components/Skills/skills";
import WorkExperience from "./Components/Resume/workExperience";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <WorkExperience />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
