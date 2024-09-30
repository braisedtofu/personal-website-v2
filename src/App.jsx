import './App.css'
import './styles/Global.css'
import React, {useState, useEffect} from "react";
import NightModeContext from './NightModeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'


function App() {
  
  const { isNightMode, color, backgroundColor, boxShadow } = React.useContext(NightModeContext);

  return (
    <div className={`app-container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow}}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:ProjectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App
