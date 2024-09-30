import React, {useState, useEffect, useContext} from "react";
import Navigation from "../components/Navigation";
import "../styles/Global.css";
import "../styles/Home.css";
import Draggable from 'react-draggable'
import NightModeContext from '../NightModeContext';
import smiski1 from '../assets/HomeImages/smiski1.png';
import smiski2 from '../assets/HomeImages/smiski2.png';
import smiski3 from '../assets/HomeImages/smiski3.png';
import smiski4 from '../assets/HomeImages/smiski4.png';
import ardemo from '../assets/HomeImages/ARdemo.png';
import argraphic from '../assets/HomeImages/ARgraphic.png';
import arreality from '../assets/HomeImages/arreality.png';
import araddtail from '../assets/HomeImages/araddtail.gif';
import arremovetail from '../assets/HomeImages/arremovetail.gif';

export default function Home() {

    const { isNightMode } = useContext(NightModeContext);
    const { color } = useContext(NightModeContext);
    const { backgroundColor, boxShadow } = useContext(NightModeContext);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { emoji, changeEmojis } = useContext(NightModeContext);

    const handleGithubClick = () => {
      window.open("https://github.com/braisedtofu", "_blank");
    };
    const handleLinkedinClick = () => {
      window.open("https://www.linkedin.com/in/wynn-mo-205009220/", "_blank");
    };

    const handleEmojiClick = () => {
      const nextEmojiIndex = (currentEmojiIndex + 1) % emojis.length; 
      setCurrentEmojiIndex(nextEmojiIndex);
      const nextEmoji = emojis[nextEmojiIndex];
      changeEmojis(nextEmoji);
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

    useEffect(() => {
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 50);
      return () => {
      };
    }, []);
    
  
          
          return (
        <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow }}> 
        <Navigation />
        <div className={`home-details-inner`}>
          <div className={`home-details-container fade ${isPageLoaded ? 'fade-enter' : ''}`}>
                  <div className="smiski-images" >
                    <Draggable>
                      <img className='smiski1'  src={smiski1} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='smiski2'  src={smiski2} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='smiski3'  src={smiski3} draggable="false" id="draggable-image"></img>
                    </Draggable>
                    <Draggable>
                      <img className='smiski4'  src={smiski4} draggable="false" id="draggable-image"></img>
                    </Draggable>
                  </div>  
                      <p className="about-title"> 
                      Hi, I'm Wynn! I’m an artist and engineer based in Auckland, New Zealand. 
                      I love to solve challenging human-centered problems and creating things that bring people joy. 
                      I'm currently working as a Digital Consultant at <span className="textglow">Beca</span> within the Digital Products and Services team. 
                      In my spare time, I enjoy cafe hopping, collecting Smiskis, and working on creative projects.                        
                      </p>
                      <p className="about-title-large"> 
                      recent projects
                      </p>
                      <p className="about-subtitle"> 
                      tangible AR for data structure learning
                      </p>
                      <p className="about-caption"> 
                      in collaboration with danika chhour
                      </p>
                      <img className='argraphic'  src={argraphic} draggable="false" id="draggable-image"></img>
                      <p className="about-body"> 
                      Data structures are fundamental concepts in computer science courses, serving as the building blocks for understanding more complex topics. However, students often find learning these concepts challenging. As a result, there is a growing demand for tools that can better support students in mastering data structures. By providing an engaging and interactive learning experience, this augmented reality (AR) tool aims to reinforce students' mental models and facilitate their comprehension of data structure concepts. This tool leverages mobile AR to enhance students’ understanding of data structures. It allows users to interact with real-world representations of data structures while viewing virtual, abstract information overlaid on top. 

                      </p>
                      <img className='ardemo'  src={ardemo} draggable="false" id="draggable-image"></img>
                      <p className="about-caption"> 
                      traversing a linked list by tapping through the blocks in the correct order
                      </p>
                      <p className="about-body"> 
                      This tool is developed using Unity Engine with C# and the AR Foundation Framework for mobile AR capabilities. It integrates the OpenCV library for hand and finger tracking, allowing users to interact with real-world objects and enabling the game to develop scenarios based on real-life interactions with the blocks. The game is deployed on iOS devices through XCode, utilizing an iPad Pro mounted on a stand. When users tap colored blocks, the game responds in real time, creating a smooth and interactive AR experience.</p>
                      <img className='arreality'  src={arreality} draggable="false" id="draggable-image"></img>
                      <p className="about-caption"> 
                      using the tool through the interfacing camera of an ipad
                      </p>
                      <img className="about-video" src={arremovetail}></img>
                        <p className="about-caption"> 
                        live demo of deleting from a linked list tail
                        </p>
                        <img className="about-video" src={araddtail}></img>
                        <p className="about-caption"> 
                        live demo of adding to a linked list tail
                        </p>
                      <button onClick={handleEmojiClick} className="emoji">{emoji}</button>
            </div>
          </div>

      </div>
    );
}
