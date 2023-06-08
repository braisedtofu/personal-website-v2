import React, { useContext, useState} from 'react';
import "../styles/Navigation.css";
import NightModeContext from '../NightModeContext';

export default function Navigation() {

    const { isNightMode, toggleNightMode } = useContext(NightModeContext);
    const { color, changeColor } = useContext(NightModeContext);
    const nightColors = ['#5AC6D5', '#6FC852', '#C9C26B', '#F55760', '#F67BDB', '#DEDFDE'];
    const dayColors = ['#0948A8', '#165F2C', '#7B2F0D', '#7F0E7F', '#A94412', '#000000'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleColorChange = () => {
        const nextColorIndex = (currentColorIndex + 1) % nightColors.length; 
        setCurrentColorIndex(nextColorIndex);
    
        if (isNightMode == true) {
            const nextColor = nightColors[nextColorIndex];
            changeColor(nextColor); 
            console.log(color);
            console.log(isNightMode);
            console.log('Night Mode');
        }
        else {
            const nextColor = dayColors[nextColorIndex]; 
            changeColor(nextColor);
            console.log(color);
            console.log(isNightMode);
            console.log('Day Mode');
        }
      };
        
    return (

        <div className="navigation-container">
            {/* Top Buttons */}
            <div className="top-buttons">
                <button className="about">wynn mo</button>
                <button className="projects">projects</button>
                <button className="resume">resume</button>
                <button className="github">github</button>
                <button className="linkedin">linkedin</button>
                <button className="email">email</button>
            </div>
            {/* Bottom Buttons */}
            <div className="top-buttons">
                <button className="github" onClick={toggleNightMode}>
                    {isNightMode ? 'Day' : 'Night'}
                </button>
                <button onClick={handleColorChange} className="email">color</button>
            </div>
      </div>
      );
}
