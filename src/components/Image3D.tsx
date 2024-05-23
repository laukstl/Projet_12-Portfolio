'use client';

import React, { useState } from 'react';

const Image3D: React.FC = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    setIsRotating(true);

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * 15;
    const rotateY = (centerX - x) / centerX * 15;

    const image = element.querySelector('img');
    if (image) {
      image.style.transition = 'transform 0.3s ease-in-out';
      image.style.transform = `rotateX(${rotateX*2.5}deg) rotateY(${rotateY*2.5}deg)`;
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isRotating) {
      const image = event.currentTarget.querySelector('img');
      if (image) {
        image.style.transform = 'rotateX(0) rotateY(0)';
      }
      setIsRotating(false);
    }
  };

  return (
    <div
      className="w-500 h-500 perspective-1000"
      onContextMenu={handleContextMenu}
      onMouseUp={handleMouseUp}
    >
      <img
        src="/tet2Vainqueur.webp"
        alt="Image en 3D"
        className="w-full h-full transition-transform"
      />
    </div>
  );
};

export default Image3D;
