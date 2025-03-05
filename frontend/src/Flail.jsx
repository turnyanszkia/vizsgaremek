import React, { useEffect, useState } from 'react';
import './Flail.css';

const Flail = () => {
  const [position, setPosition] = useState(1300);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(pos => {
        const newPos = pos + direction * 1.5;
        if (newPos > 1400 || newPos < 1100) {
          setDirection(dir => dir * -1);
        }
        return newPos;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      <div className="flail" style={{ left: `${position}px`, top: 'calc(40vh + 200px)' }}></div>
      <div className="flail" style={{ left: `${position}px`, top: 'calc(40vh + 300px)' }}></div>
    </>
  );
};

export default Flail;