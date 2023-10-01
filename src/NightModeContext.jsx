// NightModeContext.js
import React, { createContext, useState } from 'react';

const NightModeContext = createContext();

export function NightModeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);
  const [color, setColor] = useState('#000000'); // Initial color, replace with your desired initial color
  const [backgroundColor, changeBackgroundColor] = useState('#FFFFFF'); // Initial color, replace with your desired initial color
  const [boxShadow, changeBoxShadow] = useState('rgba(0, 0, 0, 0.3)'); // Initial color, replace with your desired initial color
  const [emoji, changeEmojis] = useState('(◕‿◕)');

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    //set colour to white if night mode is on
    if (isNightMode) {
    setColor('#000000'); // Reset the color to the initial color when toggling night mode
    changeBackgroundColor('#FFFFFF'); // Reset the color to the initial color when toggling night mode
    changeBoxShadow('rgba(0, 0, 0, 0.3)')
    }
    else {
    setColor('#FFFFFF');    
    changeBackgroundColor('#262B29');
    changeBoxShadow('rgba(255, 255, 255, 0.3)')
    }
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode, color, changeColor, backgroundColor, changeBackgroundColor, boxShadow, changeBoxShadow, emoji, changeEmojis }}>
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContext;
