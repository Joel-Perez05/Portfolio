import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle} from "react-bootstrap-icons";
import Cube from "../img/cubeplaceholder.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const AboutMe = (props) => {
  const wordsToRotate = [ "Frontend Engineer", "Web Developer", "Software Engineer" ]
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const timePeriod = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)};
  }, [text])
  
  const tick = () => {
    let i = loopNum % wordsToRotate.length;
    let fullText = wordsToRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(timePeriod);
    } else if(isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <div className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeOutRight"}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{"Hi I'm Joel Perez "}<br></br><span className='wrap'>{text}</span></h1>
                <p>
                  First of all thank you for checking out my portfolio. As you know my name is Joel Perez.
                  I was born and raised in Tulsa Oklahoma. I have a wide range of hobbies from spending time
                  friends and family to playing video games or fitness. My interests in tech began 4 years ago 
                  after I built my own custom controller and had to code the LED's with the Arduino IDE. It was
                  a very intense process reading through documentation and trial and error.  Since then
                  my desire to learn about tech kept growing so I decided to make the jump. I recently graduated
                  an intense seven month coding bootcamp at Coding Dojo where I learned to be a 
                  fullstack developer in python/flask and MERN. I come from a non traditional CS 
                  or coding background as i've been an automotive technician for the past 8 years.
                </p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Cube} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;