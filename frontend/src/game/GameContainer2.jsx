import { useEffect, useRef } from 'react';


function GameContainer2(){
    useEffect(() => {
        // Dynamically import the CSS
        import('./game.css');
        
        // Cleanup function to remove the CSS when component unmounts
        return () => {
          const stylesheet = document.querySelector('link[href*="game.css"]');
          if (stylesheet) {
            document.head.removeChild(stylesheet);
          }
        };
      }, []);
    const loaded = useRef(false);
    useEffect(() => {
        if(loaded.current == false) {
            loaded.current = true
            const script = document.createElement("script");
            script.src = "./level1.js"; // Külső script URL-je
            script.async = true;
            document.body.appendChild(script);
            return () => {
                loaded.current=false
                document.body.removeChild(script);
              };
        }

      }, []);
    return <>
    <div className="games-container">
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
        <div className="spike" style={{ left: "300px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "580px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "700px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "1100px", bottom: "60px" }}></div>
        <div className="spike" style={{ left: "400px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "570px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "8100px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "900px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "1500px", top: "55.1vh" }}></div>
        <div className="spike" style={{ left: "500px", top: "13.5vh" }}></div>
        <div className="spike inverted" style={{ left: "700px", top: "13.5vh" }}></div>
        <div className="spike inverted" style={{ left: "360px", top: "13.5vh" }}></div>
        <div className="spike inverted" style={{ left: "720px", top: "35.1vh" }}></div>
        <div className="spike inverted" style={{ left: "1000px", top: "35.1vh" }}></div>
        <div className="spike inverted" style={{ left: "1270px", top: "13.5vh" }}></div>
    </div>

    
    </>
}

export default GameContainer2