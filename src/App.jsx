import './App.css';
import './styles/Global.css';
import React, { useContext } from "react";
import NightModeContext from './NightModeContext';

function App() {
  
  const { isNightMode, color, backgroundColor, boxShadow } = useContext(NightModeContext);

  return (
    
    <div className={`app-container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}>
      {/* Your layout and components go here */}
    </div>
  );
}

export default App;
