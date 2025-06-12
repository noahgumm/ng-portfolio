import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
