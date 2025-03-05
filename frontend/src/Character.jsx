import React, { useEffect, useState } from 'react';
import './Character.css';

const Character = () => {
  const [position, setPosition] = useState({ x: 60, y: 60 });
  const [velocityY, setVelocityY] = useState(0);

  useEffect(() => {
    const gravity = -0.5;
    const gameLoop = setInterval(() => {
      let newY = position.y + velocityY;
      if (newY <= 60) {
        newY = 60;
        setVelocityY(0);
      } else {
        setVelocityY(v => v + gravity);
      }
      setPosition(pos => ({ ...pos, y: newY }));
    }, 20);

    return () => clearInterval(gameLoop);
  }, [position.y, velocityY]);

  return (
    <div className="character" style={{ left: `${position.x}px`, bottom: `${position.y}px` }}></div>
  );
};

export default Character;