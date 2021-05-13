import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contacts from './components/Contacts';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Intro id={'intro'} />
        <Education id={'education'} />
        <Skills id={'skills'} />
        <Experience id={'experience'} />
        <Projects id={'projects'} />
        <Publications id={'publications'} />
        <Achievements id={'achievements'} />
        <Contacts id={'contact'} />
      </div>
    </Router >
  );
}

export default App;
