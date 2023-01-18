import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
// import logo from '../img/logo.svg'
import fblogo from '../img/fblogo.svg';
import githublogo from '../img/githublogo.svg';
import linkedinlogo from '../img/linkedinlogo.svg';

const NavBar = (props) => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])
  
  const onUpdateActiveLink = (val) => {
    setActiveLink(val);
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className='social-icon'>
                  <a href='https://www.linkedin.com/in/joel-perez1995/' target=' _blank'><img src={linkedinlogo} alt="linkedin logo" /></a>
                  <a href='https://www.facebook.com/joel.x.perez' target=' _blank'><img src={fblogo} alt="facebook logo" /></a>
                  <a href='https://github.com/Joel-Perez05' target=' _blank'><img src={githublogo} alt="github logo" /></a>
                </div>
                <HashLink to="#connect">
                  <button className='vvd'>Let's Connect</button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;