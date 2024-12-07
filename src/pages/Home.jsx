import React, {useState, useEffect, useContext, useRef} from "react";
import {ScrollRestoration } from 'react-router-dom';
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import Draggable from 'react-draggable'
import NightModeContext from '../NightModeContext';
import ardemo from '../assets/HomeImages/ARdemo.png';
import argraphic from '../assets/HomeImages/argraphic.png';
import arreality from '../assets/HomeImages/arreality.png';
import araddtail from '../assets/HomeImages/araddtail.mp4';
import arremovetail from '../assets/HomeImages/arremovetail.mp4';
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

    // Preload function
    const preloadAssets = () => {
      const assets = [image1, image2, image3, image4, ardemo, argraphic, arreality];
      const images = assets.map(src => {
          const img = new Image();
          img.src = src;
          return img;
      });

      Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
          .then(() => {
              setImagesLoaded(true);
              ScrollTrigger.refresh();  // Refresh ScrollTrigger after images are loaded
          });
  };

    useEffect(() => {
        preloadAssets(); // Preload images and videos on mount
        setTimeout(() => {
            setIsPageLoaded(true);
        }, 50);
        return () => {};
    }, []);

    const graphicRef = useRef(null);
    const demoRef = useRef(null);
    const realityRef = useRef(null);
    const removeTailRef = useRef(null);
    const addTailRef = useRef(null);
  
    useEffect(() => {
      const fadeUpAnimation = (target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              scroller: '.container',
              trigger: target,
              start: "top 80%",
            },
          }
        );
      };
    
    // Apply animation to each element
    fadeUpAnimation(graphicRef.current);
    fadeUpAnimation(demoRef.current);
    fadeUpAnimation(realityRef.current);
    fadeUpAnimation(removeTailRef.current);
    fadeUpAnimation(addTailRef.current);
    
      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
          
          return (
        <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}> 
        <Navigation />
        <div className={`home-details-inner`}>
        <div className="smiski-images" >
          <img className='smiski2'  src={image1} ></img>
        </div>    
          <div className={`home-details-container fade ${isPageLoaded ? 'fade-enter' : ''}`}>

                      <p  className="about-title"> 
                      Hi, I'm Wynn! I’m an artist and engineer based in Auckland, New Zealand. 
                      I love to solve challenging human-centered problems and creating things that bring people joy.
                      I'm currently working as a Digital Consultant at <span className="textglow">Beca</span> within the Digital Products and Services team. 
                      In my spare time, I enjoy cafe hopping, collecting Smiskis, and working on creative projects.                        
                      </p>
                      <p    className="background-text-highlight"> 
                        connect with me
                      </p>
                      <p className="about-buttons"> 
                        <button onClick={handleArenaClick} className="github">are.na&nbsp;<span className="arrow"> &#x2197;&#xFE0E;</span></button>
                        <button onClick={handleInstagramClick} className="github">instagram&nbsp;<span className="arrow"> &#x2197;&#xFE0E;</span></button>
                        <button onClick={handleGithubClick} className="github">github&nbsp;<span className="arrow"> &#x2197;&#xFE0E;</span></button>
                        <button onClick={handleLinkedinClick} className="github">linkedin&nbsp;<span className="arrow"> &#x2197;&#xFE0E;</span></button>
                      </p>

                      <p className="background-text-highlight"> 
                      recent projects
                      </p>
                      <img ref={graphicRef} className='argraphic'  src={argraphic} draggable="false" id="draggable-image"></img>
                      <p className="about-subtitle"> 
                      tangible AR for data structure learning
                      </p>
                      <p className="about-caption"> 
                      in collaboration with danika chhour
                      </p>
                      <p className="about-body"> 
                      Data structures are fundamental concepts in computer science courses, serving as the building blocks for understanding more complex topics. However, students often find learning these concepts challenging. As a result, there is a growing demand for tools that can better support students in mastering data structures. By providing an engaging and interactive learning experience, this augmented reality (AR) tool aims to reinforce students' mental models and facilitate their comprehension of data structure concepts. This tool leverages mobile AR to enhance students’ understanding of data structures. It allows users to interact with real-world representations of data structures while viewing virtual, abstract information overlaid on top. 

                      </p>
                      <img  ref={demoRef}className='ardemo'  src={ardemo} draggable="false" id="draggable-image"></img>
                      <p className="about-caption"> 
                      traversing a linked list by tapping through the blocks in the correct order
                      </p>
                      <p className="about-body"> 
                      This tool is developed using Unity Engine with C# and the AR Foundation Framework for mobile AR capabilities. It integrates the OpenCV library for hand and finger tracking, allowing users to interact with real-world objects and enabling the game to develop scenarios based on real-life interactions with the blocks. The game is deployed on iOS devices through XCode, utilizing an iPad Pro mounted on a stand. When users tap colored blocks, the game responds in real time, creating a smooth and interactive AR experience.</p>
                      <img ref={realityRef}  className='arreality'  src={arreality} draggable="false" id="draggable-image"></img>
                      <p className="about-caption"> 
                      using the tool through the interfacing camera of an ipad
                      </p>
                      <video  ref={removeTailRef}  className="about-video" playsInline autoPlay muted loop>
                          <source src={arremovetail} type="video/mp4" />
                        </video>
                        <p className="about-caption"> 
                        live demo of deleting from a linked list tail
                        </p>
                        <video  ref={addTailRef}  className="about-video" playsInline autoPlay muted loop>
                          <source src={araddtail} type="video/mp4" />
                        </video>
                        <p className="about-caption"> 
                        live demo of adding to a linked list tail
                        </p>

                      <button onClick={handleEmojiClick} className="emoji">{emoji}</button>
            </div>
          </div>
          <ScrollRestoration/>
      </div>
    );
}
