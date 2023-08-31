import React from 'react';
import './App.css';
import ScrollUpButton from './components/ScrollUpButton';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Script from './components/Script';
import TypingText from './components/TypingText';
// Import other components as needed

function App() {
  return (
    <div className="App">
      <ScrollUpButton />
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Contact />
      <Script />
      <TypingText/>
      {/* Include other components */}
      <footer>
        <span>
          Created By <a href="#">Dwelling</a> |{' '}
          <span className="far fa-copyright"></span> 2020 All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
