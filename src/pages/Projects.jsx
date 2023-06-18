import React, {useState, useEffect, useContext} from "react";
import Navigation from '../components/Navigation';
import '../styles/Global.css';
import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import NightModeContext from '../NightModeContext';
import ProjectList from '../components/ProjectList';
import village from '../assets/pikatune/village.png';
import predict4 from '../assets/AlphabetPrediction/predict4.png';
import ml1 from '../assets/objectdetection/ml1.jpeg';
import dogtitle from '../assets/bodypawsitive/dogtitle3.png';
import line1 from '../assets/linefollowingrobot/line1.png';
import circle1 from '../assets/circlemecircleyou/circle1.png';
import trebuchet1 from '../assets/terribletrebuchet/trebuchet1.jpg';
import box3 from '../assets/flappybox/box3.png';
import pokedex1 from '../assets/pokedex/pokedex1.png';
import board1 from '../assets/designboard/board1.png';
import wynn1 from '../assets/wynnmodotcom/wynn1.png';
import julia1 from '../assets/juliafractals/julia1.png';
import bootleg1 from '../assets/bootlegspotify/app1.png';
import ripple1 from '../assets/ripples/ripple1.png';

export default function Projects() {
  const { isNightMode } = useContext(NightModeContext);
  const { color } = useContext(NightModeContext);
  const { backgroundColor } = useContext(NightModeContext);
  const { boxShadow } = useContext(NightModeContext);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 250);
    return () => {
    };
  }, []);

  const dataList = [
    { image: village, number:'(1)', name: 'pikatune', caption: 'Pikatune', subcaption: 'Mongo DB, Express, React, Node, Spotify API', summary: 'A Pokémon-themed playlist generator game. Have gym battles, add friends, customise your playlist, and level up!'},
    { image: dogtitle, number:'(2)', name: 'bodypawsitive', caption: 'Body Pawsitive', subcaption: 'Mongo DB, Express, React, Node, Raspberry Pico W, C/C++', summary: 'A smart scale system designed from scratch to weigh and log the weights of our furry friends, all managed through a web application.'},
    { image: trebuchet1, number:'(3)', name: 'sleep-is-a-crime', caption: 'Sleep Is A Crime', subcaption: 'Raspberry Pi Pico, Servo Motor, Woodwork', summary: 'A trebuchet that is so terrible it launches marshmellows at you and sings Rick Astley!'},
    { image: line1, number:'(4)', name: 'line-following-robot', caption: 'Line Following Robot', subcaption: 'PSoC Microcontroller, PCB Design, Altium, C Language', summary: 'A robot with sensors that can navigate a maze by following black lines, and find the shortest path.'},
    { image: predict4, number:'(5)', name: 'handwriting-prediction', caption: 'Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: circle1, number:'(6)', name: 'circle-me-circle-you', caption: 'Circle Me, Circle You', subcaption: 'React, Vite, React-P5, P5.js', summary: 'An exploration into creative coding, this website transforms webcam input into a live video composed solely of circles.'},
    { image: box3, number:'(7)', name: 'flappy-box', caption: 'Flappy Box ', subcaption: 'Quartus, DE0 Board (FPGA Board), VHDL', summary: 'A game created on an FPGA board that allows users to play a game similar to Flappy Bird using the board\'s switches'},
    { image: pokedex1,number:'(8)',  name: 'pokedex', caption: 'Pokedex', subcaption: 'Mongo DB, Express, React, Node', summary: 'Catch \'em all! This app lets you explore and personalize your Pokémon collection. Choose your favorites, add them to your list, and have a blast managing your own dream team!'},
    { image: board1, number:'(9)', name: 'designboard', caption: 'Scholarship Design Board', subcaption: 'Adobe Illustrator', summary: 'A three-panel art design board showcasing a cutting-edge tech company, blending futuristic themes with a hint of dystopian through typography, web and app mock-ups, and posters created with Adobe Illustrator.'},
    { image: ml1, number:'(10)',  name: 'objectdetection', caption: 'Object Detection', subcaption: 'CocoSSD, p5.js', summary: 'Used the p5.js library and its webcam function to detect objects with the coco ssd pre-trained model'},
    { image: wynn1, number:'(11)', name: 'mowynndotcom', caption: 'mowynn.com', subcaption: 'Html, css', summary: 'My first personal website.'},
    { image: julia1, number:'(12)', name: 'julia-fractals', caption: 'Julia Fractals', subcaption: 'Matlab', summary: 'A Matlab program that generates Julia fractals based on user input'},
    { image: bootleg1, number:'(13)',name: 'bootleg-spotify', caption: 'Bootleg Spotify', subcaption: 'Android Studio, Java, Figma, Git Control', summary: 'An Android app that allow users to discover new music based on genres, and buy them on the spot'},
    { image: ripple1, number:'(14)',name: 'ripples', caption: 'Ripples', subcaption: 'p5.js', summary: 'A p5.js program that generates ripples which changes in size and noise depending on mouse position'}    
    // Add more items as needed
  ];
      
  return (
    <div className={`container ${isNightMode ? 'night-mode' : 'day-mode'}`} style={{ '--main-color': color, '--background-color': backgroundColor, '--box-shadow': boxShadow}}>
        <Navigation />

        <div className="grid-inner">
                <div className={`grid-container fade ${isPageLoaded ? 'fade-enter' : ''}`}>
                        <ProjectList data={dataList} />
                </div>
        </div>
    </div>
  );
}
