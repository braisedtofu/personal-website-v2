import React, {useState, useEffect, useContext} from "react";
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import { Typewriter } from 'react-simple-typewriter'
import NightModeContext from '../NightModeContext';

export default function Home() {

    const [about, setAbout] = useState("about");
    const [experience, setExperience] = useState("Beca");
    const [showContent, setShowContent] = useState(false);
    const [showAboutContent, setAboutShowContent] = useState(false);
    const { isNightMode } = useContext(NightModeContext);
    const { color } = useContext(NightModeContext);
    const { backgroundColor } = useContext(NightModeContext);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 50);
      return () => {
      };
    }, []);
    
  
    // if about is true, then show about details
    // if about is false, then show experience details
    const handleButtonClick = (button) => {
        if (button === "about" && about != "about") {
          setAboutShowContent(false); // Set showContent to false when experience changes
          setTimeout(() => {
            setAbout(button);
          }, 500); // Wait for 500 milliseconds before updating experience
        } else if (button === "experience" && about != "experience") {
          setAboutShowContent(false); // Set showContent to false when experience changes
          setTimeout(() => {
            setAbout(button);
          }, 500); // Wait for 500 milliseconds before updating experience
        }
      };
          
    const handleExperienceClick = (selectedExperience) => {
        if ( experience  != selectedExperience){
        setShowContent(false); // Set showContent to false when experience changes
        }
        setTimeout(() => {
          setExperience(selectedExperience);
        }, 500); // Wait for 500 milliseconds before updating experience
      };
    
    useEffect(() => {
        setShowContent(true); // Set showContent to true after a short delay
      }, [experience]);
    
    useEffect(() => {
        setAboutShowContent(true); // Set showContent to true after a short delay
      }, [about]);
    

    let experienceContent = null; 
    
    if (experience === "Beca") {
        experienceContent = (
        <div
        className={`experience-details-container ${
          showContent ? "fade-in" : ""
        }`} >            
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
            <div
            className={`experience-details-container ${
              showContent ? "fade-in" : ""
            }`} >            
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
        <div
        className={`experience-details-container ${
          showContent ? "fade-in" : ""
        }`} >            
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
      }
      else if (experience === "UoA") {
        experienceContent = (
        <div
        className={`experience-details-container ${
          showContent ? "fade-in" : ""
        }`} >            
            <p className="experience-details-title">
                Teaching Assistant @ University of Auckland
            </p>
            <p className="experience-details-date">
                Incoming Semester 2, 17th July
            </p>
            <ul className="experience-details-item-container">
                <li className="experience-detail-item">
                  TA for COMPSYS 306: Artificial Intelligence and Machine Learning
                </li>
                <li className="experience-detail-item">
                  As an incoming TA, I will be responsible for assisting in marking assignments, tests, exams, and providing academic assistance to students.
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

      let bioContent = null;

      bioContent = (
        <div className={`experience-container ${showAboutContent ? "fade-in-experience-container" : ""}`}>
          {about === "about" ? (
            <p className={`about-details ${showAboutContent ? "fade-in-about-details" : ""}`}>
              I am a final year Computer Systems Engineering student at the University of Auckland, driven by my passion for coding, design, and crafting exceptional user experiences. My goal is to combine my technical skills in coding and systems engineering with my love for human-centered design principles to create innovative solutions.<br/><br/>Outside of university, I’m involved in extracurricular roles dedicated to giving back to the community. As the Events Manager at Rainbow Engineering, I organize events that connect LGBTQ individuals in the field of engineering. I am the current Vice President at Robogals, an international student-led organization. Our unified goal is to inspire young women to pursue STEM education and careers.
            </p>
          ) : (
            <>
              <ul className="experience-list">
                <li
                  className={`experience-list-item ${experience === 'Beca' ? 'selected-experience' : ''}`}
                  onClick={() => handleExperienceClick('Beca')}
                >
                  (Beca)
                </li>
                <li
                  className={`experience-list-item ${experience === 'Robogals' ? 'selected-experience' : ''}`}
                  onClick={() => handleExperienceClick('Robogals')}
                >
                  (Robogals)
                </li>
                <li
                  className={`experience-list-item ${experience === 'Rainbow Engineering' ? 'selected-experience' : ''}`}
                  onClick={() => handleExperienceClick('Rainbow Engineering')}
                >
                  (Rainbow Engineering)
                </li>
                <li
                  className={`experience-list-item ${experience === 'UoA' ? 'selected-experience' : ''}`}
                  onClick={() => handleExperienceClick('UoA')}
                >
                  (UoA)
                </li>

              </ul>
              {experienceContent}
            </>
          )}
        </div>
      );
                  
    return (
        <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor }}> 
            <Navigation />
            
            <div className={`about-container fade ${isPageLoaded ? 'fade-enter' : ''}`}>
                    <div className="about-title">
                    <Typewriter
                            words={['Hi, Wynn here']}
                            cursor
                            cursorStyle='|'
                            typeSpeed={150}
                            cursorColor={color}
                            />
                    </div>

                    <div className="about-details-container">
                        <div className="about-details-list">
                            <p className={`about-details-list-item ${about === 'about' ? 'selected-about' : ''}`} onClick={() => handleButtonClick("about")}>
                            about
                            </p>
                            <p className={`about-details-list-item ${about === 'experience' ? 'selected-about' : ''}`} onClick={() => handleButtonClick("experience")}>
                            experience
                            </p>
                        </div>
                        {bioContent}
                    </div>
                </div>
            </div>
    );
}
