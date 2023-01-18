import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Zelda from "../img/zelda.jpg";
import cart from "../img/shoppingCart1.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const MyProjects = (props) => {
  const personalProjects = [
    {
      title: "The Master List",
      description: "Full Stack CRUD app for legend of zelda lets users create their own top 5 list of favoite zelda games.",
      imgUrl: Zelda,
      Link: "https://the-master-list.onrender.com"
    },
    {
      title: "My Shopping Cart",
      description: "Front End React.js project utilizing context api and use reducer for global state management and some neat functionality for filters",
      imgUrl: cart,
      Link: "https://jperez-shopping-cart.onrender.com"
    },
    // {
    //   title: "The Master List",
    //   description: "lorem",
    //   imgUrl: Zelda
    // },
    // {
    //   title: "The Master List",
    //   description: "lorem",
    //   imgUrl: Zelda
    // },
    // {
    //   title: "The Master List",
    //   description: "lorem",
    //   imgUrl: Zelda
    // },
    // {
    //   title: "The Master List",
    //   description: "lorem",
    //   imgUrl: Zelda
    // },
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