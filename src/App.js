import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navigator from './components/Navigator';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="background__animation"></div>
        <div className="content">
          <Navigator />
          <Hero />
          <Contact />
          <AboutMe />
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
