import React from 'react';
import '../styles/ProjectGrid.css';

import { useNavigate } from 'react-router-dom';

const ProjectGrid = ({ data }) => {

  const navigate = useNavigate();

  const handleProjectClick = (name) => {
    navigate(`/projects/${encodeURIComponent(name)}`); // Navigate to the projects page with the project name in the URL
    };

    return (
        <div className="grid-list">
          {data.map((item, index) => (
            <div className="grid-list-row" key={index}>
                <div className="grid-image-number">
                  <p className="number">{item.number}</p>
                    <div className="grid-list-item" onClick={() => handleProjectClick(item.name)}>
                      <img src={item.image} alt="Project" />
                      <div className="caption">{item.caption}</div>
                      <div className="sub-caption">{item.subcaption}</div>
                      <div className="summary">{item.summary}</div>
                    </div>
                </div>
            </div>
          ))}
        </div>
    );
  };
  
  export default ProjectGrid;
    