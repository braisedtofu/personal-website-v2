import React, { useEffect, useState } from 'react';
import './styles/Global.css'

const CustomCursor = ({ color }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);


  return (
    
    <div
        className='custom-cursor'
        style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        backgroundColor: color, 
        }}
  />
  );
};

export default CustomCursor;
