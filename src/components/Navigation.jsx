import React, { useContext, useState } from 'react';
import "../styles/Navigation.css";
import NightModeContext from '../NightModeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Global.css";

import Smiski1DayBlack from '../assets/HomeImages/Smiski1DayBlack.png';
import Smiski1DayBlue from '../assets/HomeImages/Smiski1DayBlue.png';
import Smiski1DayBrown from '../assets/HomeImages/Smiski1DayBrown.png';
import Smiski1DayGreen from '../assets/HomeImages/Smiski1DayGreen.png';
import Smiski1NightCyan from '../assets/HomeImages/Smiski1NightCyan.png';
import Smiski1NightGreen from '../assets/HomeImages/Smiski1NightGreen.png';
import Smiski1NightGray from '../assets/HomeImages/Smiski1NightGray.png';
import Smiski1NightYellow from '../assets/HomeImages/Smiski1NightYellow.png';

import Smiski2DayBlack from '../assets/HomeImages/Smiski2DayBlack.png';
import Smiski2DayBlue from '../assets/HomeImages/Smiski2DayBlue.png';
import Smiski2DayBrown from '../assets/HomeImages/Smiski2DayBrown.png';
import Smiski2DayGreen from '../assets/HomeImages/Smiski2DayGreen.png';
import Smiski2NightCyan from '../assets/HomeImages/Smiski2NightCyan.png';
import Smiski2NightGreen from '../assets/HomeImages/Smiski2NightGreen.png';
import Smiski2NightGray from '../assets/HomeImages/Smiski2NightGray.png';
import Smiski2NightYellow from '../assets/HomeImages/Smiski2NightYellow.png';

import Smiski3DayBlack from '../assets/HomeImages/Smiski3DayBlack.png';
import Smiski3DayBlue from '../assets/HomeImages/Smiski3DayBlue.png';
import Smiski3DayBrown from '../assets/HomeImages/Smiski3DayBrown.png';
import Smiski3DayGreen from '../assets/HomeImages/Smiski3DayGreen.png';
import Smiski3NightCyan from '../assets/HomeImages/Smiski3NightCyan.png';
import Smiski3NightGreen from '../assets/HomeImages/Smiski3NightGreen.png';
import Smiski3NightGray from '../assets/HomeImages/Smiski3NightGray.png';
import Smiski3NightYellow from '../assets/HomeImages/Smiski3NightYellow.png';

import Smiski4DayBlack from '../assets/HomeImages/Smiski4DayBlack.png';
import Smiski4DayBlue from '../assets/HomeImages/Smiski4DayBlue.png';
import Smiski4DayBrown from '../assets/HomeImages/Smiski4DayBrown.png';
import Smiski4DayGreen from '../assets/HomeImages/Smiski4DayGreen.png';
import Smiski4NightCyan from '../assets/HomeImages/Smiski4NightCyan.png';
import Smiski4NightGreen from '../assets/HomeImages/Smiski4NightGreen.png';
import Smiski4NightGray from '../assets/HomeImages/Smiski4NightGray.png';
import Smiski4NightYellow from '../assets/HomeImages/Smiski4NightYellow.png';

export default function Navigation() {
    const { isNightMode, toggleNightMode, isGridView, toggleView} = useContext(NightModeContext);
    const { color, changeColor } = useContext(NightModeContext);
    const { image1, changeImage1 } = useContext(NightModeContext);
    const { image2, changeImage2 } = useContext(NightModeContext);
    const { image3, changeImage3 } = useContext(NightModeContext);
    const { image4, changeImage4 } = useContext(NightModeContext);

    const location = useLocation();
    const { boxShadow } = useContext(NightModeContext);
    const { backgroundColor, changeBackgroundColor } = useContext(NightModeContext);

    
    const nightColors = [
      { color: 'rgb(175, 222, 229)', image1: Smiski1NightCyan, image2: Smiski2NightCyan, image3: Smiski3NightCyan, image4: Smiski4NightCyan }, // pastel cyan
      { color: 'rgb(182, 225, 166)', image1: Smiski1NightGreen, image2: Smiski2NightGreen, image3: Smiski3NightGreen, image4: Smiski4NightGreen }, // pastel green
      { color: 'rgb(233, 228, 171)', image1: Smiski1NightYellow, image2: Smiski2NightYellow, image3: Smiski3NightYellow, image4: Smiski4NightYellow }, // pastel yellow
      { color: 'rgb(222, 223, 222)', image1: Smiski1NightGray, image2: Smiski2NightGray, image3: Smiski3NightGray, image4: Smiski4NightGray }, // light gray
  ];
  
  const dayColors = [
      { color: 'rgba(16, 75, 166, 1)', image1: Smiski1DayBlue, image2: Smiski2DayBlue, image3: Smiski3DayBlue, image4: Smiski4DayBlue }, // blue
      { color: 'rgb(22, 95, 44)', image1: Smiski1DayGreen, image2: Smiski2DayGreen, image3: Smiski3DayGreen, image4: Smiski4DayGreen }, // green
      { color: 'rgb(123, 47, 13)', image1: Smiski1DayBrown, image2: Smiski2DayBrown, image3: Smiski3DayBrown, image4: Smiski4DayBrown }, // brown
      { color: 'rgb(0, 0, 0)', image1: Smiski1DayBlack, image2: Smiski2DayBlack, image3: Smiski3DayBlack, image4: Smiski4DayBlack }, // black
  ];
  
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const navigate = useNavigate();

    const handleColorChange = () => {
        const nextColorIndex = (currentColorIndex + 1) % nightColors.length; 
        setCurrentColorIndex(nextColorIndex);
    
        const nextColor = isNightMode ? nightColors[nextColorIndex] : dayColors[nextColorIndex];
        changeColor(nextColor.color); 
        changeImage1(nextColor.image1); 
        changeImage2(nextColor.image2); 
        changeImage3(nextColor.image3); 
        changeImage4(nextColor.image4); 

    };

    const handleProjectsClick = () => {
        navigate('/projects'); // Navigate to the projects page
    };
    
    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };


    return (
        <div className="navigation-container" style={{ '--main-color': color, '--box-shadow': boxShadow }}>
            {/* Top Buttons */}
            <div className="top-buttons">
                <button className={`wynnmo ${location.pathname === '/' ? 'unclicked' : ''}`} onClick={handleHomeClick}>wynn mo</button>
                <button className={`projects ${location.pathname === '/' ? 'unclicked' : ''}`} onClick={handleHomeClick}>about</button>
                <button className={`projects ${location.pathname.startsWith('/projects') ? 'unclicked' : ''}`} onClick={handleProjectsClick}>projects</button>
                <button onClick={handleColorChange} className="projects">colour</button>
                <button className="projects" onClick={toggleNightMode}>
                    {isNightMode ? 'night' + '\u00A0' + '\u00A0' : 'day'}
                </button>
                {/* Conditionally render grid/list view toggle button */}
                {location.pathname.startsWith('/projects') && (
                    <button className="projects" onClick={toggleView}>
                        {isGridView ? 'grid' : 'list'}
                    </button>
                )}
            </div>
        </div>
    );
}
