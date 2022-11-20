import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

export default App;
