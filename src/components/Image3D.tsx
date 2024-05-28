'use client';

import React from 'react';

const Image3D: React.FC = () => {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const image = event.currentTarget.querySelector('img');
    if (image) {
      image.classList.add('animate-wave');
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const image = event.currentTarget.querySelector('img');
    if (image) {
      image.classList.remove('animate-wave');
    }
  };

  return (
    <div
      className="w-[250px] h-[250px] perspective-[1000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/logo.webp"
        alt="Image en 3D"
        className="w-full h-full transition-transform"
      />
    </div>
  );
};

export default Image3D;
