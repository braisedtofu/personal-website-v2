import React, { useContext, useState} from 'react';
import "../styles/Navigation.css";
import NightModeContext from '../NightModeContext';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {

    const { isNightMode, toggleNightMode } = useContext(NightModeContext);
    const { color, changeColor } = useContext(NightModeContext);
    const { backgroundColor, changeBackgroundColor } = useContext(NightModeContext);
    const nightColors = ['#5AC6D5', '#6FC852', '#C9C26B', '#F55760', '#F67BDB', '#DEDFDE'];
    const dayColors = ['#0948A8', '#165F2C', '#7B2F0D', '#7F0E7F', '#A94412', '#000000'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const navigate = useNavigate();

    const handleColorChange = () => {
        const nextColorIndex = (currentColorIndex + 1) % nightColors.length; 
        setCurrentColorIndex(nextColorIndex);
    
        if (isNightMode == true) {
            const nextColor = nightColors[nextColorIndex];
            changeColor(nextColor); 
        }
        else {
            const nextColor = dayColors[nextColorIndex]; 
            changeColor(nextColor);
        }
      };

      const handleProjectsClick = () => {
        navigate('/projects'); // Navigate to the projects page
      };
      const handleHomeClick = () => {
        navigate('/'); // Navigate to the projects page
      };
      
    return (

        <div className="navigation-container">
            {/* Top Buttons */}
            <div className="top-buttons">
                <button className="about"  onClick={handleHomeClick} >wynn mo</button>
                <button className="projects"  onClick={handleProjectsClick} >projects</button>
                <button className="resume">resume</button>
                <button className="github">github</button>
                <button className="linkedin">linkedin</button>
                <button className="email">email</button>
            </div>
            {/* Bottom Buttons */}
            <div className="top-buttons">
                <button className="github" onClick={toggleNightMode}>
                    {isNightMode ? 'day' : 'night'}
                </button>
                <button onClick={handleColorChange} className="email">color</button>
            </div>
      </div>
      );
}
