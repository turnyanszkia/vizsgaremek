import { useState, useEffect } from "react";

export default function BackgroundVideo() {
  const [brightness, setBrightness] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  useEffect(() => {
    document.getElementById("backgroundVideo").style.filter = `brightness(${brightness})`;
  }, [brightness]);

  useEffect(() => {
    document.getElementById("backgroundVideo").volume = volume;
  }, [volume]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
  };

  return (
    <>
      <video id="backgroundVideo" autoPlay loop muted>
        <source src="/kepek/hattervideo.mp4" type="video/mp4" />
        A böngésződ nem támogatja a videók lejátszását.
      </video>
      <button className="settings-button" onClick={toggleSettingsMenu}>⚙️ Beállítások</button>

      <div className="settings-menu" style={{ display: isSettingsMenuOpen ? 'block' : 'none' }}>
        <label>
          Fényerő:
          <input 
            type="range" 
            min="0.5" 
            max="2" 
            step="0.1" 
            value={brightness} 
            onChange={(e) => setBrightness(e.target.value)}
          />
        </label>
        <label>
          Hangerő:
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            value={volume} 
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? "Kilépés a teljes képernyőből" : "Teljes képernyő / Ablakos mód"}
        </button>
      </div>
    </>
  );
}
