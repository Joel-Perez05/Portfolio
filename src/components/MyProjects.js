import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Zelda from "../img/zelda.jpg";

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
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
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
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyProjects;