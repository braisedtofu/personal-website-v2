import React, { useContext } from 'react';
import "../styles/Navigation.css";
import NightModeContext from '../NightModeContext';

export default function Navigation() {

    const { isNightMode, toggleNightMode } = useContext(NightModeContext);

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
                <button className="email">color</button>
            </div>
      </div>
      );
}
