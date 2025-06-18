import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className='scrollContainer'>
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
