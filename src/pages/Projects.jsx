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
    { image: village, name: 'pikatune', caption: '(1) Pikatune', subcaption: 'Mongo DB, Express, Node, React, Spotify API', summary: 'A Pokémon-themed playlist generator game. Have gym battles, add friends, customise your playlist, and level up!'},
    { image: dogtitle, name: 'bodypawsitive', caption: '(2) Body Pawsitive', subcaption: 'MERN Stack, Raspberry Pico W, C/C++', summary: 'A smart scale system designed from scratch to weigh and log the weights of our furry friends, all managed through a web application.'},
    { image: trebuchet1, name: 'handwriting-prediction', caption: '(3) The Terrible Trebuchet', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: line1, name: 'handwriting-prediction', caption: '(4) Line Following Robot', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(5) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: circle1, name: 'handwriting-prediction', caption: '(6) Circle Me, Circle You', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: box3, name: 'handwriting-prediction', caption: '(7) Flappy Box ', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: pokedex1, name: 'handwriting-prediction', caption: '(8) Pokedex', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: board1, name: 'handwriting-prediction', caption: '(9) Scholarship Design Board', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: ml1, name: 'handwriting-prediction', caption: '(10) Object Detection', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: wynn1, name: 'handwriting-prediction', caption: '(11) wynnmo.com', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: julia1, name: 'handwriting-prediction', caption: '(12) Julia Fractals', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: bootleg1, name: 'handwriting-prediction', caption: '(13) Bootleg Spotify', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: ripple1, name: 'handwriting-prediction', caption: '(14) Ripples', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(15) I See, therefore I Am', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    
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
