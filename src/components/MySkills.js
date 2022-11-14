import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Python from "../img/Pythonstack.png";
import MERN from "../img/MERNlogo.jpg";
import DataStructure from "../img/DataStructures.png";
import Github from "../img/githublogo.svg";
import Space from "../img/space.jpg";

const MySkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src={Python} alt='Image' />
                  <h5>Full Stack Python</h5>
                </div>
                <div className='item'>
                  <img src={MERN} alt='Image' />
                  <h5>Full Stack MERN</h5>
                </div>
                <div className='item'>
                  <img src={DataStructure} alt='Image' />
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className='item'>
                  <img src={Github} alt='Image' />
                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-img' src={Space} alt="space img"/>
    </div>
  )
}

export default MySkills;