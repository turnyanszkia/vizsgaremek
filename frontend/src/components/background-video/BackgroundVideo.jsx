import { useState } from 'react';

function BackgroundVideo() {

    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    function toggleSettingsMenu() {
        setIsSettingsMenuOpen(!isSettingsMenuOpen);
    }

    return (
        <>
            <video id="backgroundVideo" autoPlay loop muted>
                <source src="/kepek/hattervideo.mp4" type="video/mp4" />
                A böngésződ nem támogatja a videók lejátszását.
            </video>
            <button class="settings-button" onClick={toggleSettingsMenu}>⚙️ Beállítások</button>

            <div class="settings-menu" id="settingsMenu" style={{ display: isSettingsMenuOpen ? 'block' : 'none' }}>
                <label>
                    Fényerő:
                    <input type="range" id="brightnessControl" min="0.5" max="2" step="0.1" value="1" onchange="updateBrightness()"/>
                </label>
                <label>
                    Hangerő:
                    <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="0.5" onchange="updateVolume()"/>
                </label>
                <button onclick="toggleFullScreen()">Teljes képernyő / Ablakos mód</button>
            </div>
        </>
    );
}

export default BackgroundVideo;