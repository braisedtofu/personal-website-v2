import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import NightModeContext from '../NightModeContext';
import '../styles/Global.css';
import Navigation from '../components/Navigation';
import '../styles/ProjectData.css';

const ProjectDetails = () => {
  const { ProjectId } = useParams(); // Get current project ID from URL params
  const { isNightMode, color, backgroundColor, boxShadow } = React.useContext(NightModeContext);
  const navigate = useNavigate();

  // Find current project based on ProjectId
  const project = ProjectData.find((item) => item.ProjectId === ProjectId);

  // Find the current index of the project
  const currentIndex = ProjectData.findIndex((item) => item.ProjectId === ProjectId);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Fade in effect for the entire page on load
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 50);
  }, []);

  // Navigate to the project list
  const handleProjectsClick = () => {
    navigate('/projects'); 
  };

  const handleNextClick = () => {
    setIsPageLoaded(false); // Start fade-out before navigating
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % ProjectData.length;
      const nextProjectId = ProjectData[nextIndex].ProjectId;
      navigate(`/projects/${nextProjectId}`);
      setIsPageLoaded(true); // Set fade-in after navigation
    }, 300); // Set timeout matching fade-out duration
  };

  const handlePreviousClick = () => {
    setIsPageLoaded(false); // Start fade-out before navigating
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + ProjectData.length) % ProjectData.length;
      const prevProjectId = ProjectData[prevIndex].ProjectId;
      navigate(`/projects/${prevProjectId}`);
      setIsPageLoaded(true); // Set fade-in after navigation
    }, 300); // Set timeout matching fade-out duration
  };

  // Render the project details
  return (
    <div 
      className={`container ${isNightMode ? 'night-mode' : 'day-mode'} ${isPageLoaded ? 'fade-enter' : ''}`} 
      style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}
    >
      <Navigation />
      <div className={`project-details-inner fade ${isPageLoaded ? 'fade-enter' : 'fade-enter-active'}`}>
        <div className="project-information">
          <button className="return" onClick={handleProjectsClick}>(return)</button>
          <div className="project-navigation">
            <button className="return" onClick={handlePreviousClick}>previous</button>
            <button className="return" onClick={handleNextClick}>next</button>
          </div>
          <p className="project-title">{project.title}</p>
          <p className="project-technologies">{project.technologies}</p>
          <p className="project-collab">{project.collab}</p>
          <div className="project-description">{project.description}</div>
        </div>

        <div className="image-container">
          {/* Video if available */}
          {project.video && (
            <div className = "project-videos">
            <video playsInline autoPlay muted loop>
              <source src={project.video} type="video/mp4" />
            </video>
            </div>
          )}

          {/* Images with captions and summaries */}
          {project.images && project.images.map((image, index) => (
            <div className="grid-item" key={index}>
              <img key={index} src={image.src} alt={image.csaption} className="project-image" />
              <div key={index} className="project-caption">{image.caption}</div>
              <div key={index} className="project-body">{image.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;


