import React, { createContext, useState, useEffect } from 'react';
import Smiski1DayBlue from './assets/HomeImages/Smiski1DayBlue.webp';
import Smiski2DayBlue from './assets/HomeImages/Smiski2DayBlue.png';
import Smiski3DayBlue from './assets/HomeImages/Smiski3DayBlue.png';
import Smiski4DayBlue from './assets/HomeImages/Smiski4DayBlue.png';

import Smiski1NightGray from './assets/HomeImages/Smiski1NightGray.png';
import Smiski2NightGray from './assets/HomeImages/Smiski2NightGray.png';
import Smiski3NightGray from './assets/HomeImages/Smiski3NightGray.png';
import Smiski4NightGray from './assets/HomeImages/Smiski4NightGray.png';

const NightModeContext = createContext();

import CustomCursor from './CustomCursor'; 

export function NightModeProvider({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);
  const [color, setColor] = useState('#104BA6');
  const [image1, setImage1] = useState(Smiski1DayBlue);
  const [image2, setImage2] = useState(Smiski2DayBlue);
  const [image3, setImage3] = useState(Smiski3DayBlue);
  const [image4, setImage4] = useState(Smiski4DayBlue);
  const [backgroundColor, changeBackgroundColor] = useState('#FFFFF3');
  const [boxShadow, changeBoxShadow] = useState('rgba(0, 0, 0, 0.3)');
  const [emoji, changeEmojis] = useState('(◕‿◕)');
  const [isGridView, setIsGridView] = useState(true);

  // Function to preload images
  const preloadImages = (images) => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    // Array of images to preload
    const dayImages = [
      Smiski1DayBlue,
      Smiski2DayBlue,
      Smiski3DayBlue,
      Smiski4DayBlue,
    ];

    const nightImages = [
      Smiski1NightGray,
      Smiski2NightGray,
      Smiski3NightGray,
      Smiski4NightGray,
    ];

    // Preload both day and night images
    preloadImages(dayImages);
    preloadImages(nightImages);
  }, []); // Empty dependency array ensures this runs only once when the context is initialized

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
    if (isNightMode) {
      setColor('#104BA6');
      changeBackgroundColor('#FFFFF3');
      changeBoxShadow('rgba(0, 0, 0, 0.3)');
      setImage1(Smiski1DayBlue);
      setImage2(Smiski2DayBlue);
      setImage3(Smiski3DayBlue);
      setImage4(Smiski4DayBlue);
    } else {
      setColor('#FFFFF3');
      changeBackgroundColor('#424242');
      changeBoxShadow('rgba(255, 255, 255, 0.3)');
      setImage1(Smiski1NightGray);
      setImage2(Smiski2NightGray);
      setImage3(Smiski3NightGray);
      setImage4(Smiski4NightGray);
    }
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const changeImage1 = (newImage1) => {
    setImage1(newImage1);
  };

  const changeImage2 = (newImage2) => {
    setImage2(newImage2);
  };

  const changeImage3 = (newImage3) => {
    setImage3(newImage3);
  };

  const changeImage4 = (newImage4) => {
    setImage4(newImage4);
  };

  return (
    <NightModeContext.Provider value={{
      isNightMode,
      toggleNightMode,
      color,
      changeColor,
      backgroundColor,
      changeBackgroundColor,
      boxShadow,
      changeBoxShadow,
      emoji,
      changeEmojis,
      isGridView,
      toggleView,
      image1,
      changeImage1,
      image2,
      changeImage2,
      image3,
      changeImage3,
      image4,
      changeImage4
    }}>
      {children}
    </NightModeContext.Provider>
  );
}

export default NightModeContext;
