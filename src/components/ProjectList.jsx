import React from 'react';
import '../styles/ProjectList.css';

const ProjectList = ({ data }) => {
    return (
      <div className="grid-list">
        {data.map((item, index) => (
          <div className="grid-list-row" key={index}>
            <div className="grid-list-item">
              <img src={item.image} alt="Project" />
              <div className="caption">{item.caption}</div>
              <div className="sub-caption">{item.subcaption}</div>
              <div className="summary">{item.summary}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;
    