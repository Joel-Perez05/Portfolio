import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Zelda from "../img/zelda.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const MyProjects = (props) => {
  const personalProjects = [
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
    {
      title: "The Master List",
      description: "lorem",
      imgUrl: Zelda
    },
  ];

  return (
    <div className='project' id='projects'>
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible? "animate__animated animate__slideInLeft" : "animate__animated animate__slideOutRight"}>
              <h2>Projects</h2>
              <p>
                Below are some of the projects i've created so far. I will continue to update as I create more.
              </p>
            </div>}
          </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      personalProjects.map((project, idx) => {
                        return (
                          <ProjectCard key={idx} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane className='second-tab' eventKey="second">Future Projects Loading...</Tab.Pane>
                <Tab.Pane className='third-tab' eventKey="third">Future Projects Loading...</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProjects;