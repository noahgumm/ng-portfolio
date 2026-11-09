import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import TechStrip from "./components/TechStrip.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Intro />
        <TechStrip />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
