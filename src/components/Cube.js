import React, { useState } from 'react';
import './Cube.css';

const Cube = () => {
  const [rotationAxis, setRotationAxis] = useState('Y');

  const handleClick = () => {
    setRotationAxis(
      rotationAxis === 'Y'
        ? 'X'
        : rotationAxis === 'X'
        ? 'Z'
        : rotationAxis === 'Z'
        ? 'Y'
        : 'X'
    );
  };

  return (
    <div className="cube-container" onClick={handleClick}>
      <div className={`cube rotate-${rotationAxis}`}>
        <div className="face front">Front-End</div>
        <div className="face back">UX/UI</div>
        <div className="face right">Inbound Marketing</div>
        <div className="face left">Web Design</div>
        <div className="face top">Welcome</div>
        <div className="face bottom">Benvenuto</div>
      </div>
    </div>
  );
};

export default Cube;
