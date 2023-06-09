import React, {useState, useEffect, useContext} from "react";
import Navigation from '../components/Navigation';
import '../styles/Global.css';
import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import NightModeContext from '../NightModeContext';
import ProjectList from '../components/ProjectList';
import predict4 from '../assets/AlphabetPrediction/predict4.png';

export default function Projects() {
  const { isNightMode } = useContext(NightModeContext);
  const { color } = useContext(NightModeContext);
  const { backgroundColor } = useContext(NightModeContext);
  const { boxShadow } = useContext(NightModeContext);
  const [isPageLoaded, setIsPageLoaded] = useState(false);


  useEffect(() => {
    setIsPageLoaded(true); // Set the state variable to indicate that the page has loaded
  }, []);

  const dataList = [
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    { image: predict4, name: 'handwriting-prediction', caption: '(1) Handwriting Prediction', subcaption: 'Python, Pytorch, Torchvision', summary: 'A GUI program that allows users to download datasets, view dataset images, upload models to train, and predict handwritten letters/digits'},
    
    // Add more items as needed
  ];
      
  console.log(boxShadow);

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
