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
import bootleg1 from '../assets/bootlegspotify/bootleg1.png';
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
    }, 50);
    return () => {
    };
  }, []);

  const dataList = [
    { image: village, number:'(1)', name: 'pikatune', caption: 'Pikatune', subcaption: 'Mongo DB, Express, Node, React, Spotify API', summary: 'A Pokémon-themed playlist generator game. Have gym battles, add friends, customise your playlist, and level up!'},
    { image: dogtitle, number:'(2)', name: 'bodypawsitive', caption: 'Body Pawsitive', subcaption: 'MERN Stack, Raspberry Pico W, C/C++', summary: 'A smart scale system designed from scratch to weigh and log the weights of our furry friends, all managed through a web application.'},
    { image: trebuchet1, number:'(3)', name: 'sleep-is-a-crime', caption: 'Sleep Is A Crime', subcaption: 'Raspberry Pi Pico, Servo Motor, Woodwork', summary: 'A trebuchet that is so terrible it launches marshmellows at you and sings Rick Astley!'},
    { image: line1, number:'(4)', name: 'line-following-robot', caption: 'Line Following Robot', subcaption: 'PSoC Microcontroller, PCB Design, Altium, C Language', summary: 'A robot with sensors that can navigate a maze by following black lines, and find the shortest path.'},
    { image: predict4, number:'(5)', name: 'handwriting-prediction', caption: 'Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: circle1, number:'(6)', name: 'circle-me-circle-you', caption: 'Circle Me, Circle You', subcaption: 'React, Vite, React-P5, P5.js', summary: 'An exploration into creative coding, this website transforms webcam input into a live video composed solely of circles.'},
    { image: box3, number:'(7)', name: 'flappy-box', caption: 'Flappy Box ', subcaption: 'Quartus, DE0 Board (FPGA Board), VHDL', summary: 'A game created on an FPGA board that allows users to play a game similar to Flappy Bird using the board\'s switches'},
    { image: pokedex1,number:'(8)',  name: 'handwriting-prediction', caption: 'Pokedex', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: board1, number:'(9)', name: 'handwriting-prediction', caption: 'Scholarship Design Board', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: ml1, number:'(10)',  name: 'handwriting-prediction', caption: 'Object Detection', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: wynn1, number:'(12)', name: 'handwriting-prediction', caption: 'wynnmo.com', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: julia1, number:'(13)', name: 'handwriting-prediction', caption: 'Julia Fractals', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: bootleg1, number:'(14)',name: 'handwriting-prediction', caption: 'Bootleg Spotify', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: ripple1, number:'(15)',name: 'handwriting-prediction', caption: 'Ripples', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4,number:'(16)', name: 'handwriting-prediction', caption: 'I See, therefore I Am', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    
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
