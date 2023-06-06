import React, {useState} from "react";
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

    const [about, setAbout] = useState(true);
    const [experience, setExperience] = useState("Beca");

    // if about is true, then show about details
    // if about is false, then show experience details
    const handleButtonClick = (button) => {
        if (button === "about") {
            setAbout(true);
        } else {
            setAbout(false);
        }
    }

    const handleExperienceClick = (button) => {
            setExperience(button);
    }

    let experienceContent = null; 

    if (experience === "Beca") {
        experienceContent = (
          <div className="experience-details-container">
            <p className="experience-details-title">
                Digital Consulting Intern @ Beca
            </p>
            <p className="experience-details-date">
                Sep 2022 - Feb 2023
            </p>
            <ul className="experience-details-item-container">
                <li className="experience-detail-item">
                    Designed and developed Long-Term Project (LTP) tracker app for city councils using Microsoft PowerApps and Dataverse.               
                </li>
                <li className="experience-detail-item">
                    Leveraged PowerBI to display statistical data and generate insights.                
                </li>
                <li className="experience-detail-item">
                    Conducted live demonstrations of the LTP tracker app to clients.                
                </li>
                <li className="experience-detail-item">
                    Demonstrated expertise in creating tailored software solutions for city councils.                
                </li>
            </ul>
          </div>

        );
      } else if (experience === "Robogals") {
        experienceContent = (
            <div className="experience-details-container">
            <p className="experience-details-title">
                Vice President @ Robogals Auckland
            </p>
            <p className="experience-details-date">
                Jan 2023 - Present
            </p>
            <ul className="experience-details-item-container">
                <li className="experience-detail-item">
                Collaborated with a team of volunteers to design and deliver engaging robotics workshops for young women in primary and secondary schools, fostering their interest and empowerment in STEM fields.
                </li>
                <li className="experience-detail-item">
                    Supported the President in strategic planning and decision-making processes     
                </li>
                <li className="experience-detail-item">
                    Managed a team of 108 active volunteers, with 60 of them dedicating their time and efforts to multiple workshops.
                </li>
                <li className="experience-detail-item">
                    Conducted 44 workshops at 23 different locations, with 70% of the workshops being conducted at long-distance locations.
                </li>
            </ul>
            <p className="experience-details-title">
                Sponsorships and Partnerships Manager @ Robogals Auckland
            </p>
            <p className="experience-details-date">
                Jan 2022 - Nov 2022
            </p>
            <ul className="experience-details-item-container">
                <li className="experience-detail-item">
                    Liaise with sponsors/partners, collaborate with other similar clubs
                </li>
                <li className="experience-detail-item">
                    Increased sponsorship numbers from 4 to 11 since 2021
                </li>
                <li className="experience-detail-item">
                    Organised collaborative workshops/events with sponsors such as EY, Xero, Beca, and Counties Energy               
                 </li>

            </ul>

          </div>

        );
      } else if (experience === "Rainbow Engineering") {
        experienceContent = (
            <div className="experience-details-container">
            <p className="experience-details-title">
                Events Manager @ Rainbow Engineering
            </p>
            <p className="experience-details-date">
                Jan 2023 - Present
            </p>
            <ul className="experience-details-item-container">
                <li className="experience-detail-item">
                    Plan, coordinate, and execute a wide range of events and activities aimed at promoting diversity and inclusion in the field of engineering.
                </li>
                <li className="experience-detail-item">
                    Collaborate with team members and external partners to conceptualize events such as panel discussions, networking events, and social gatherings.
                </li>
            </ul>
          </div>

        );
      } else {
        experienceContent = (
          <p className="experience-details-title">
            Content specific to Beca experience goes here.
          </p>
        );
      }
    
    return (
        <div className="container">
            <Navigation />
                <div className="about-container">
                    {/* <p className="about-title">Hi, Wynn here</p> */}
                    <div className="about-title">
                    <Typewriter
                            words={['Hi, Wynn here']}
                            cursor
                            cursorStyle='|'
                            typeSpeed={150}
                        />
                    </div>

                    <div className="about-details-container">
                        <ul className="about-details-list">
                            <li className="about-details-list-item" onClick={() => handleButtonClick("about")}>
                            (about)
                            </li>
                            <li className="about-details-list-item" onClick={() => handleButtonClick("experience")}>
                            (experience)
                            </li>
                        </ul>
                    {about ? (
                        <p className="about-details">Passionate about coding, designing, and crafting captivating web experiences, I am a final year Computer Systems Engineering student at the University of Auckland. My goal is to build virtual spaces that challenge what an exceptional user experience means. My specialty in computer systems has encouraged me to combine my technical skills in coding and systems engineering, and my love for human-centered design.<br/><br/>Outside of university, I’m involved in extracurricular roles dedicated to giving back to the community. As the Events Manager at Rainbow Engineering, I organize events that connect LGBTQ individuals in the field of engineering. I am the current Vice President at Robogals, an international student-led organization. Our unified goal is to inspire young women to pursue STEM education and careers.</p>
                    ) : 
                    <div className="experience-container">
                        <ul className="experience-list">
                            <li className="experience-list-item" onClick={() => handleExperienceClick("Beca")}>
                                (Beca)
                            </li>
                            <li className="experience-list-item" onClick={() => handleExperienceClick("Robogals")}>
                                (Robogals)
                            </li>
                            <li className="experience-list-item" onClick={() => handleExperienceClick("Rainbow Engineering")}>
                                (Rainbow Engineering)
                            </li>
                        </ul>
                            
                        {experienceContent}

                    </div>
                    }

                    </div>
                </div>

        </div>
    );
}
