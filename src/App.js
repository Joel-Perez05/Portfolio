import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProjects from './components/MyProjects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <MySkills />
      <MyProjects />
    </div>
  );
}

export default App;
