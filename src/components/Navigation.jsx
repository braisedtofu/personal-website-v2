import React from "react";
import "../styles/Navigation.css";

export default function Navigation() {
    return (
        <div className="navigation-container">
            {/* Top Buttons */}
            <div className="top-buttons">
                <button className="about">wynn mo</button>
                <button className="projects">projects</button>
                <button className="resume">resume</button>
            </div>
            {/* Bottom Buttons */}
            <div className="top-buttons">
                <button className="github">github</button>
                <button className="linkedin">linkedin</button>
                <button className="email">email</button>
            </div>
      </div>
      );
}
