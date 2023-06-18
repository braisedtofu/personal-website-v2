import React, { useContext, useState} from 'react';
import "../styles/Navigation.css";
import NightModeContext from '../NightModeContext';
import { useNavigate, useLocation} from 'react-router-dom';
import "../styles/Global.css";



export default function Navigation() {

    const { isNightMode, toggleNightMode } = useContext(NightModeContext);
    const { color, changeColor } = useContext(NightModeContext);
    const { emoji, changeEmojis } = useContext(NightModeContext);
    const location = useLocation();
    const { boxShadow } = useContext(NightModeContext);
    const { backgroundColor, changeBackgroundColor } = useContext(NightModeContext);
    const nightColors = [
        'rgb(90, 198, 213)',
        'rgb(111, 200, 82)',
        'rgb(201, 194, 107)',
        'rgb(245, 87, 96)',
        'rgb(246, 123, 219)',
        'rgb(222, 223, 222)'
      ];
      
      const dayColors = [
        'rgb(9, 72, 168)',
        'rgb(22, 95, 44)',
        'rgb(123, 47, 13)',
        'rgb(127, 14, 127)',
        'rgb(169, 68, 18)',
        'rgb(0, 0, 0)'
      ];

      const emojis = [
        '(◕‿◕)',
        '٩(◕‿◕｡)۶',
        '(⇀‸↼‶)',
        '(・`ω´・)',
        '(｡•́︿•̀｡)',
        '(・_・;)',
        '(⊃｡•́‿•̀｡)⊃',
        '(>ᴗ•)',
        'U・ᴥ・U',
        '／(･ × ･)＼'
      ];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

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

      const handleResumeClick = () => {
        var link = document.createElement("a");
        link.href = "../src/assets/WynnMoCV.pdf";
        link.download = "WynnMoCV.pdf";
        link.click();
      };

      const handleGithubClick = () => {
        window.open("https://github.com/braisedtofu", "_blank");
      };
      const handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/wynn-mo-205009220/", "_blank");
      };

      const handleEmojiClick = () => {
        const nextEmojiIndex = (currentEmojiIndex + 1) % emojis.length; 
        setCurrentEmojiIndex(nextEmojiIndex);
        const nextEmoji = emojis[nextEmojiIndex];
        changeEmojis(nextEmoji);
      };

    return (

        <div className="navigation-container" style={{ '--main-color': color, '--box-shadow': boxShadow}}>
            {/* Top Buttons */}
            <div className="top-buttons">
                <button className={`projects ${location.pathname === '/' ? 'unclicked' : ''}`}  onClick={handleHomeClick} >about</button>
                <button className={`projects ${location.pathname.startsWith('/projects') ? 'unclicked' : ''}`}  onClick={handleProjectsClick} >projects</button>
                <button onClick={handleResumeClick} className="resume">resume</button>
                <button onClick={handleEmojiClick} className="emoji">{emoji}</button>
            </div>
            {/* Bottom Buttons */}
            <div className="bottom-buttons">
                <button onClick={handleGithubClick} className="github">github</button>
                <button onClick={handleLinkedinClick} className="linkedin">linkedin</button>
                <button onClick={handleColorChange} className="about">color</button>
                <button className="github" onClick={toggleNightMode}>
                    {isNightMode ? 'day' + '\u00A0' + '\u00A0' : 'night'}
                </button>
            </div>
      </div>
      );
}
