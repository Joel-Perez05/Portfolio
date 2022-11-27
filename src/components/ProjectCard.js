import React from 'react';
import {Col} from "react-bootstrap";

const ProjectCard = ({title, description, imgUrl, Link}) => {
  return (
      <Col sm={6} md={4}>
        <div className='project-img'>
          <img src={imgUrl} alt="Project img" />
          <div className='project-text'>
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <a href={Link} target=" _blank">Web App</a>
            </div>
          </div>
        </div>
      </Col>
  )
}

export default ProjectCard;