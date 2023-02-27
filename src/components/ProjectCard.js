import React from 'react';
import {Col} from "react-bootstrap";

const ProjectCard = ({title, description, imgUrl, demo, repo}) => {
  return (
      <Col sm={6} md={4}>
        <div className='project-img'>
          <img src={imgUrl} alt="Project img" />
          <div className='project-text'>
            <h4>{title}</h4>
            <span>{description}</span>
            <div>
              <a href={demo} target=" _blank">Demo</a>
            </div>
            <div>
              <a href={repo} target=" _blank">Github</a>
            </div>
          </div>
        </div>
      </Col>
  )
}

export default ProjectCard;