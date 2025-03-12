import { useEffect, useRef } from 'react';
import './GameContainer.css'

function GameContainer2(){
    const loaded = useRef(false);
    useEffect(() => {
        if(loaded.current == false) {
            loaded.current = true
            const script = document.createElement("script");
            script.src = "/game.js"; // Külső script URL-je
            script.async = true;
            document.body.appendChild(script);
            return () => {
                loaded.current=false
                document.body.removeChild(script);
              };
        }

      }, []);
    return <>
    <div className="game-container">
        <div className="ground"></div>
        <div className="character"></div>
        <div className="platform start"></div>
        <div className="platform middle"></div>
        <div className="platform end"></div>
        <div className="platform left-lower"></div>
        <div className="platform left-upper"></div>
        <div className="platform right-lower"></div>
        <div className="platform right-upper"></div>
        <div className="goal"></div>
        <div className="cannon"></div>
        <div className="spike" style={{ left: "400px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "600px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "720px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "1100px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "400px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "420px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "8100px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "1000px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "1500px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "460px", top: "13.5vh" }}></div>
        <div className="spike inverted" style={{ left: "630px", top: "21.1vh" }}></div>
        <div className="spike inverted" style={{ left: "320px", top: "21.1vh" }}></div>
        <div className="spike inverted" style={{ left: "690px", top: "21.1vh" }}></div>
        <div className="spike inverted" style={{ left: "1000px", top: "21.1vh" }}></div>
        <div className="spike inverted" style={{ left: "1270px", top: "21.1vh" }}></div>
    </div>

    
    </>
}

export default GameContainer2