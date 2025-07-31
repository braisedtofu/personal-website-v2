import React, {useState, useEffect, useContext, useRef} from "react";
import {ScrollRestoration } from 'react-router-dom';
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import NightModeContext from '../NightModeContext';
import ardemo from '../assets/HomeImages/ARdemo.webp';
import arreality from '../assets/HomeImages/arreality.webp';
import arremovetail from '../assets/HomeImages/arremovetail.webp';
import battle3 from '../assets/pikatune/battle3.png';
import pikatune2 from '../assets/pikatune/pikatune2.png';
import village from '../assets/pikatune/village.png';
import playlist from '../assets/pikatune/playlist.png';
import { useNavigate, useLocation } from 'react-router-dom';



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

export default function Home() {



    const { isNightMode } = useContext(NightModeContext);
    const { color } = useContext(NightModeContext);
    const { image1, image2, image3, image4} = useContext(NightModeContext);
    const { backgroundColor, boxShadow } = useContext(NightModeContext);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { emoji, changeEmojis } = useContext(NightModeContext);
    const [currentSmiski, setCurrentSmiski] = useState(image1);
    const [currentSmiskiIndex, setCurrentSmiskiIndex] = useState(0);
    const navigate = useNavigate();

    const smiskiImages = [image1, image2, image3, image4];

    const handleTangibleArClick = () => {
      navigate('/creativework/artangible'); // Navigate to the projects page
  };
  

  const handlePikatuneClick = () => {
    navigate('/creativework/pikatune'); // Navigate to the projects page
};


    useEffect(() => {
      setCurrentSmiski(smiskiImages[currentSmiskiIndex]);
    }, [image1, image2, image3, image4, currentSmiskiIndex]);
    

    const handleSmiskiClick = () => {
      const nextIndex = (currentSmiskiIndex + 1) % smiskiImages.length;
      setCurrentSmiskiIndex(nextIndex);
      setCurrentSmiski(smiskiImages[nextIndex]);
    };
      
  
    const handleGithubClick = () => {
      window.open("https://github.com/braisedtofu", "_blank");
    };
    const handleLinkedinClick = () => {
      window.open("https://www.linkedin.com/in/wynn-mo-205009220/", "_blank");
    };

    const handleArenaClick = () => {
      window.open("https://www.are.na/wynn-mo/blocks", "_blank");
    };

    const handleInstagramClick = () => {
      window.open("https://www.instagram.com/paper__lamps/", "_blank");
    };


    const handleEmojiClick = () => {
      const nextEmojiIndex = (currentEmojiIndex + 1) % emojis.length; 
      setCurrentEmojiIndex(nextEmojiIndex);
      const nextEmoji = emojis[nextEmojiIndex];
      changeEmojis(nextEmoji);
      // window.scrollTo(0, 0);  // Manually restore scroll position after the page is loaded
    };

    const emojis = [
      '(◕‿◕)',
      '٩(◕‿◕｡)۶',
      '(⇀‸↼‶)',
      '(・`ω´・)',
      '(｡•́︿•̀｡)',
      '(・_・;)',
      '(⊃｡•́‿•̀｡)⊃',
      '(>ᴗ•)',
      'U・ᴥ・U',
      '／(･ × ･)＼'
    ];

  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);


    const demoRef = useRef(null);
    const realityRef = useRef(null);
  
    useEffect(() => {
      const fadeUpAnimation = (target) => {
        gsap.fromTo(
          target,
          { opacity: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              scroller: '.container',
              trigger: target,
              start: "top 98%"
            },
          }
        );
      };
    
    // Apply animation to each element
    fadeUpAnimation(demoRef.current);
    fadeUpAnimation(realityRef.current);
    
      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    useEffect(() => {
      setTimeout(() => {
        setIsPageLoaded(true);
        window.scrollTo(0, 0);  // Manually restore scroll position after the page is loaded
      }, 50);
    }, []);
  
          
          return (
        <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}> 
        <Navigation />
        <div className={`home-details-inner fade ${isPageLoaded ? 'fade-enter' : ''}`}>
        <div className="smiski-images" >
          <img className='smiski2'   src={currentSmiski}
            alt="Smiski"
            onClick={handleSmiskiClick}
           ></img>
        </div>    
          <div className={`home-details-container`}>

                      <p  className="about-title"> 
                      Hi, I'm Wynn! I’m an artist and engineer based in Auckland, New Zealand. 
                      I love to solve challenging human-centered problems and creating things that bring people joy.
                      In my spare time, I enjoy cafe hopping, collecting Smiskis, and working on creative projects.                        
                      </p>
                      {/* <p    className="about-caption"> 
                        Connect with me
                      </p>

                        <p onClick={handleArenaClick} className="background-text-highlight">are.na</p>
                        <p onClick={handleInstagramClick} className="background-text-highlight">instagram</p>
                        <p onClick={handleGithubClick} className="background-text-highlight">github</p>
                        <p onClick={handleLinkedinClick} className="background-text-highlight">linkedin</p> */}

                      <p className="about-caption"> 
                      Recent creations
                      </p>
                      <div className="image-array-columns">
                        <img className='ardemo'  src={ardemo} draggable="false" id="draggable-image"></img>
                        <img  className='arreality'  src={arreality} draggable="false" id="draggable-image"></img>
                        </div>
                        <p className="about-subtitle"> 
                      Tangible AR for data structure learning
                      </p>
                      <p className="about-body"> 
                      We get it - data structures is hard to understand, especially when reading off a textbook. That's why we created an augmented reality (AR) tool. This tool aims to reinforce students' mental models and facilitate their comprehension of data structure concepts by leveraging mobile AR. It allows users to interact with real-world representations of data structures while viewing virtual, abstract information overlaid on top. 
                      </p>
                      <p    className="see-more" onClick={handleTangibleArClick}> 
                        See more
                      </p>

                      <div className="image-array-columns">
                        <img  className='ardemo'  src={pikatune2} draggable="false" id="draggable-image"></img>
                        <img  className='ardemo'  src={village} draggable="false" id="draggable-image"></img>
                        <img  className='ardemo'  src={playlist} draggable="false" id="draggable-image"></img>
                        <img  className='ardemo'  src={battle3} draggable="false" id="draggable-image"></img>
                        </div>
                        <p className="about-subtitle"> 
                      Pikatune
                      </p>
                      <p className="about-body"> 
                      Do you think you’ve caught them all? Well, YOU HAVEN’T! There are still so many tunes to catch out there. Pikatune is a Pokémon-themed playlist generator featuring quiz type pokemon battles and a level up system. 
                      This game was built using a MERN stack, and I worked on front-end engineering and UX/UI design (heavily inspired by exisitng Pokémon games).
                      </p>
                      <p    className="see-more" onClick={handlePikatuneClick}> 
                        See more
                      </p>

                      <button onClick={handleEmojiClick} className="footer">site from scratch by wynn</button>
                      <button onClick={handleEmojiClick} className="emoji">{emoji}</button>
            </div>
          </div>
          <ScrollRestoration/>
      </div>
    );
}
