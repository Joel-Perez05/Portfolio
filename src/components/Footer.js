import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../img/logo.svg";
import linkedinlogo from "../img/linkedinlogo.svg";
import fblogo from "../img/fblogo.svg";
import githublogo from "../img/githublogo.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className="align-center">
          <Col sm={6}>
            {/* <img src={Logo} alt="logo" /> */}
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
          <div className='social-icon'>
                <a href='https://www.linkedin.com/in/joel-perez1995/'><img src={linkedinlogo} alt="linkedin logo" /></a>
                <a href='https://www.facebook.com/joel.x.perez'><img src={fblogo} alt="facebook logo" /></a>
                <a href='https://github.com/Joel-Perez05'><img src={githublogo} alt="github logo" /></a>
              </div>
              <p>CopyRight 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;