import React, {useState, useEffect, useContext} from "react";
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import Draggable from 'react-draggable'
import NightModeContext from '../NightModeContext';
import wrkshp from '../assets/HomeImages/wrkshp.png'
import wrkshp2 from '../assets/HomeImages/wrkshp2.png'
import books_jpg5 from '../assets/HomeImages/books_jpg5.png'
import calcifer_jpg1 from '../assets/HomeImages/calcifer_jpg1.png'
import cam_jpg3 from '../assets/HomeImages/cam_jpg3.png'
import ceramic_jpg6 from '../assets/HomeImages/ceramic_jpg6.png'
import me_jpg7 from '../assets/HomeImages/me_jpg7.png'
import matcha_jpg2 from '../assets/HomeImages/matcha_jpg2.png'
import hike_mov from '../assets/HomeImages/hike.mp4'
import jpg41 from '../assets/HomeImages/jpg41.png'
import mbot from '../assets/HomeImages/mbot.png'
import maki from '../assets/HomeImages/maki.png'
import fireforce from '../assets/HomeImages/fireforce.png'
import frierenn from '../assets/HomeImages/frierenn.png'
import book from '../assets/HomeImages/userfriendly.png'
import kon from '../assets/HomeImages/kon.png'

export default function Home() {

    const [about, setAbout] = useState("about");
    const [experience, setExperience] = useState("Beca");
    const [showContent, setShowContent] = useState(false);
    const [showAboutContent, setAboutShowContent] = useState(false);
    const { isNightMode } = useContext(NightModeContext);
    const { color } = useContext(NightModeContext);
    const { backgroundColor, boxShadow } = useContext(NightModeContext);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const [showbookImage, setbookShowImage] = useState(false);

    const bookhandleHover = () => {
      setbookShowImage(true);
    };
  
    const bookhandleMouseLeave = () => {
      setbookShowImage(false);
    };

    const [showanimeImage, setanimeShowImage] = useState(false);

    const animehandleHover = () => {
      setanimeShowImage(true);
    };
  
    const animehandleMouseLeave = () => {
      setanimeShowImage(false);
    };

    const [showImage, setShowImage] = useState(false);

    const handleHover = () => {
      setShowImage(true);
    };
  
    const handleMouseLeave = () => {
      setShowImage(false);
    };


  
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
        </div>
      );

          
          return (
        <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}> 
            <Navigation />
            
            {/* <div className={`about-container fade ${isPageLoaded ? 'fade-enter' : ''}`}>
                    <div className="about-title">
                    Hi, Wynn here. I’m an artist and a final year Computer Systems Engineering student at the University of Auckland. I love to make things that bring people joy.      
                    </div>

                    <div className="about-details-container">
                        {bioContent}
                    </div>
                    
                    <p className="site-from-scratch">site from scratch by wynn („• ᴗ •„) </p>
                </div> */}

        <div className={`home-details-inner fade ${isPageLoaded ? 'fade-enter' : ''}`}>
          <div className="home-details-container">
            <div className="gradient-overlay"></div> {/* Add this line for the gradient overlay */}
              <div className="home-container">
             
                <div className='about-title-box'>
                  <p className="about-title"> 
                            Hi, I'm Wynn! I’m an artist and engineer based in Auckland, New Zealand.
                            I love to make things that bring people joy. I'm currently working as a 
                            Digital Consultant at Beca under the Digital Products and Services team.
                            I'm fascinated by how the <span onMouseEnter={() => { bookhandleHover(); handleHover(); }} 
  onMouseLeave={() => { bookhandleMouseLeave(); handleMouseLeave(); }}  style={{ textDecoration:"underline", cursor:"pointer"}}>
                            hidden rules of design can change the way we live, work, and play
                            </span>,
                            and how we can build technology to make life easier for those who need it. In my spare time, 
                            I love cafe hopping, working on my creative projects, and <span   onMouseEnter={() => { animehandleHover(); handleHover(); }} 
  onMouseLeave={() => { animehandleMouseLeave(); handleMouseLeave(); }} 
 style={{ textDecoration:"underline", cursor:"pointer"}}>
                            watching anime.
                            </span>
                  </p>  
                </div>
                <div className='home-image-container'>

                  <div className={`prop-container-drag ${showImage ? 'fade-out' : 'fade-in'}`}>

                    <Draggable>
                      <img className='calcifer_jpg1'  src={calcifer_jpg1} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    {/* <Draggable>
                      <img className='jpg41'  src={jpg41} draggable="false" id="draggable-image"></img>
                    </Draggable> */}

                    <Draggable>
                      <img className='cam_jpg3' src={cam_jpg3} draggable="false" id="draggable-image"></img>
                    </Draggable>

                    <Draggable>
                      <img className='ceramic_jpg6'  src={ceramic_jpg6} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='matcha_jpg2'  src={matcha_jpg2} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    {/* <Draggable>
                      <video loop autoPlay muted playsInline className='hike_mov'src={hike_mov} width="100%"></video>
                    </Draggable> */}
                    <Draggable>
                      <img className='me_jpg7'  src={me_jpg7} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable> 
                      <img className='books_jpg5'  src={books_jpg5} draggable="false" id="draggable-image"></img>
                    </Draggable>

                  </div>

                  <div className={`prop-container-drag ${showanimeImage ? 'fade-in' : 'fade-out'}`}>

                    <Draggable>
                      <img className='fireforce'  src={fireforce} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='frierenn'  src={frierenn} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='maki'  src={maki} draggable="false" id="draggable-image"></img>
                    </Draggable>


                  </div>

                  <div className={`prop-container-drag ${showbookImage ? 'fade-in' : 'fade-out'}`}>

                    <Draggable>
                      <img className='book'  src={book} draggable="false" id="draggable-image"></img>
                    </Draggable>
                  </div>

              </div>

            </div>
        </div>
          </div>

      </div>
    );
}
