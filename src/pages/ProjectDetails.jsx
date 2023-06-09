import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import NightModeContext from '../NightModeContext';
import '../styles/Global.css';
import Navigation from '../components/Navigation';
import '../styles/ProjectData.css';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const { ProjectId } = useParams();
  const { isNightMode, color, backgroundColor, boxShadow } = React.useContext(NightModeContext);
  const project = ProjectData.find((item) => item.ProjectId === ProjectId);
  const navigate = useNavigate();
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const projectImagesContainer = document.querySelector('.project-images');

  window.addEventListener('scroll', (event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    projectImagesContainer.scrollTop = scrollTop;
  });
  

  useEffect(() => {
    setIsPageLoaded(true); // Set the state variable to indicate that the page has loaded
  }, []);

  const handleProjectsClick = () => {
    navigate('/projects'); // Navigate to the projects page
  };

  // Render the project details
  return (
    <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow}}>
        <Navigation />
        <div className={`project-details-inner fade ${isPageLoaded ? 'fade-enter' : ''}`}>
        <div className="project-details-container">
            <div className="project-information">
                <button className="return" onClick={handleProjectsClick} >(return)</button>
                <p className="project-title">{project.title}</p>
                <p className="project-technologies">{project.technologies}</p>
                <p className="project-collab">{project.collab}</p>
                <p className="project-description">{project.description}</p>
            </div>
            <div className="project-images">
                <div className="image-container">
                    <img src={project.image} alt={project.title} />
                    <img src={project.image} alt={project.title} />
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="scroll-container">
                    <div className="arrow up"></div>
                    <div className="scroll">Scroll</div>
                    <div className="arrow down"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProjectDetails;
