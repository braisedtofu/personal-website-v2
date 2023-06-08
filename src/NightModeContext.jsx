// NightModeContext.js
import React, { createContext, useState } from 'react';

const NightModeContext = createContext();

export function NightModeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);
  const [color, setColor] = useState('#000000'); // Initial color, replace with your desired initial color

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    //set colour to white if night mode is on
    if (isNightMode) {
    setColor('#000000'); // Reset the color to the initial color when toggling night mode
    }
    else {
    setColor('#DEDFDE');    
    }
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode, color, changeColor }}>
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContext;
