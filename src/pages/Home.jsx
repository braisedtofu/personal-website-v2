import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="container">
            <Navigation />
                <div className="about-container">
                    <p className="about-title">Hi, Wynn here</p>
                    <div className="about-details-container">
                        <ul className="about-details-list">
                            <li className="about-details-list-item">about</li>
                            <li className="about-details-list-item">expereince</li>
                        </ul>
                        <p className="about-details">Passionate about coding, designing, and crafting captivating web experiences, I am a final year Computer Systems Engineering student at the University of Auckland. My goal is to build virtual spaces that challenge what an exceptional user experience means. My specialty in computer systems has encouraged me to combine my technical skills in coding and systems engineering, and my love for human-centered design.<br/><br/>Outside of university, I’m involved in extracurricular roles dedicated to giving back to the community. As the Events Manager at Rainbow Engineering, I organize events that connect LGBTQ individuals in the field of engineering. I am the current Vice President at Robogals, an international student-led organization. Our unified goal is to inspire young women to pursue STEM education and careers.</p>
                    </div>
                </div>

        </div>
    );
}
