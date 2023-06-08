// NightModeContext.js
import React, { createContext, useState } from 'react';

const NightModeContext = createContext();

export function NightModeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContext;
