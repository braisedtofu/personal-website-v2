import React, { useState } from 'react';
import '../styles/ProjectList.css';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({ data }) => {
  const [hoveredImage, setHoveredImage] = useState(null); // Track hovered image
  const navigate = useNavigate();

  const handleProjectClick = (name) => {
    navigate(`/creativework/${encodeURIComponent(name)}`);
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image); // Set the hovered image
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Clear the hovered image
  };

  return (
    <div className="list-container">
      {data.map((item, index) => (
        <div
          className="list-row"
          key={index}
          onClick={() => handleProjectClick(item.name)}
          onMouseEnter={() => handleMouseEnter(item.image)} // Show image on hover
          onMouseLeave={handleMouseLeave} // Clear image on leave
        >
          <div className="list-title">{item.caption}</div>
          <div className="list-tech">{item.subcaption}</div>
        </div>
      ))}

      {/* Display the hovered image as a modal */}
      {hoveredImage && (
        <div className="image-modal">
          <img src={hoveredImage} alt="Hovered Project" />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
