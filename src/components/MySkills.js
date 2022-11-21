import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Python from "../img/Pythonstack.png";
import MERN from "../img/MERNlogo.jpg";
import DataStructure from "../img/DataStructures.png";
import Github from "../img/githublogo.svg";

const MySkills = (props) => {
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
              <p>
                My time at the coding bootcamp was well spent learning a plethora of skills
                <br></br> but here's the main core of what I learned. I encourage you to check out
                <br></br> my resume for a much more detailed breakdown.
              </p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src={Python} alt='python logo' />
                  <h5>Full Stack Python</h5>
                </div>
                <div className='item'>
                  <img src={MERN} alt='mern logo' />
                  <h5>Full Stack MERN</h5>
                </div>
                <div className='item'>
                  <img src={DataStructure} alt='DSA logo' />
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className='item'>
                  <img src={Github} alt='github logo' />
                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MySkills;