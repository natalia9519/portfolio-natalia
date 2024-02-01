import React, { useState } from 'react';


const Bubble = ({ imageSrc, altText, customStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? 'bubble hovered' : 'bubble'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={customStyle} 
    >
      <img src={imageSrc} alt={altText} className="bubble-image" />
    </div>
  );
};

export default Bubble;