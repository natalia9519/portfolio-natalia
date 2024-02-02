import React, { useState } from 'react';


const Bubble = ({  customStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? 'bubble hovered' : 'bubble2'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={customStyle} 
    >
      <img className="bubble2" />
    </div>
  );
};

export default Bubble;