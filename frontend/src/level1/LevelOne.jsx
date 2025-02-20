import { useState, useEffect, useRef } from "react";
import "./levelone.css";

export default function SideScrollerGame() {
    const [position, setPosition] = useState(350);
    const [velocity, setVelocity] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [horizontalPosition, setHorizontalPosition] = useState(50);
    const gravity = 0.5;
    const jumpPower = -10;
    const moveSpeed = 5;
    const playerRef = useRef(null);
    const platforms = [
      { x: 100, y: 300, width: 200 },
      { x: 400, y: 250, width: 150 },
      { x: 700, y: 200, width: 200 },
    ];
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "w" && !isJumping) {
          setVelocity(jumpPower);
          setIsJumping(true);
        } else if (e.key === "a") {
          setHorizontalPosition((prev) => prev - moveSpeed);
        } else if (e.key === "d") {
          setHorizontalPosition((prev) => prev + moveSpeed);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isJumping, jumpPower]);
  
    useEffect(() => {
      const gameLoop = setInterval(() => {
        setVelocity((prevVelocity) => prevVelocity + gravity);
        setPosition((prevPosition) => {
          const newPos = prevPosition + velocity;
          if (newPos >= 350) {
            setIsJumping(false);
            setVelocity(0);
            return 350;
          }
          return newPos;
        });
      }, 30);
      return () => clearInterval(gameLoop);
    }, [velocity, gravity]);
  
    return (
      <div className="game-container">
        <div className="game-world">
          <div
            className="player"
            ref={playerRef}
            style={{ bottom: `${position}px`, left: `${horizontalPosition}px` }}
          ></div>
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="platform"
              style={{ left: `${platform.x}px`, bottom: `${platform.y}px`, width: `${platform.width}px` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  