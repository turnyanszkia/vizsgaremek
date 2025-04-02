import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importáljuk a Link komponenst
import "./Map.css"; // CSS fájl a stílusokhoz

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleLockedCityClick = (event) => {
    event.preventDefault();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="map-container">
      <img src="emerald_sea.png" alt="Fantasy térkép" className="map" />

      {/* Városok átlátszó gombjai */}
      <Link to="/game" className="city-button" style={{ top: "31%", left: "51%" }}></Link>
      <Link to="/gamecontainer" className="city-button" style={{ top: "43%", left: "57%" }}></Link>


      {/* Zárolt városok */}
      <a
        href="#"
        className="city-button locked"
        style={{ top: "55%", left: "57%" }}
        onClick={handleLockedCityClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
        </svg>
      </a>

      <a
        href="#"
        className="city-button locked"
        style={{ top: "67%", left: "53%" }}
        onClick={handleLockedCityClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
        </svg>
      </a>

      <a
        href="#"
        className="city-button locked"
        style={{ top: "15%", left: "60%" }}
        onClick={handleLockedCityClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
        </svg>
      </a>

      <a
        href="#"
        className="city-button locked"
        style={{ top: "8%", left: "18%" }}
        onClick={handleLockedCityClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
        </svg>
      </a>

      {/* Message container for the locked cities */}
      {showMessage && (
        <div id="lockedMessage" className="locked-message">
          Hamarosan elérhető lesz
        </div>
      )}
    </div>
  );
};

export default App;
