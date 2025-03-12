console.log("szia");
(()=>{
    const _character = document.querySelector(".character");
    const spikes = document.querySelectorAll(".spike");
    let startX = 60;
    let startY = 60;
    let posX = startX;
    let posY = startY;
    let velocityY = 0;
    let gravity = -0.5;
    let isJumping = false;
    let keys = {};
    
    // Buzogány létrehozása
    const flailTop = document.createElement("div");
    const flailBottom = document.createElement("div");
    flailTop.classList.add("flail");
    flailBottom.classList.add("flail");
    document.body.appendChild(flailTop);
    document.body.appendChild(flailBottom);
    
    let flailPosX = 1300;
    let flailDirection = 1;
    
    function moveFlail() {
        flailPosX += flailDirection * 1.5;
        if (flailPosX > 1400 || flailPosX < 1100) {
            flailDirection *= -1;
        }
        
        flailTop.style.left = flailPosX + "px";
        flailTop.style.top = "calc(40vh + 200px)";
        
        flailBottom.style.left = flailPosX + "px";
        flailBottom.style.top = "calc(40vh + 300px)";
    }
    
    document.addEventListener("keydown", (event) => {
        keys[event.key] = true;
    });
    
    document.addEventListener("keyup", (event) => {
        keys[event.key] = false;
    });
    
    function checkCollision() {
        let charRect = _character.getBoundingClientRect();
        for (let spike of spikes) {
            let spikeRect = spike.getBoundingClientRect();
            if (
                charRect.left < spikeRect.right &&
                charRect.right > spikeRect.left &&
                charRect.top < spikeRect.bottom &&
                charRect.bottom > spikeRect.top
            ) {
                resetCharacter();
            }
        }
        
        let flailTopRect = flailTop.getBoundingClientRect();
        let flailBottomRect = flailBottom.getBoundingClientRect();
        if (
            (charRect.left < flailTopRect.right &&
                charRect.right > flailTopRect.left &&
                charRect.top < flailTopRect.bottom &&
                charRect.bottom > flailTopRect.top) ||
            (charRect.left < flailBottomRect.right &&
                charRect.right > flailBottomRect.left &&
                charRect.top < flailBottomRect.bottom &&
                charRect.bottom > flailBottomRect.top)
        ) {
            resetCharacter();
        }
    }
    
    function resetCharacter() {
        posX = startX;
        posY = startY;
        velocityY = 0;
        _character.style.left = posX + "px";
        _character.style.bottom = posY + "px";
    }
    
    function gameLoop() {
        if (keys["a"]) {
            posX -= 3;
        }
        if (keys["d"]) {
            posX += 3;
        }
        if (keys["w"] && !isJumping) {
            velocityY = 13;
            isJumping = true;
        }
        
        velocityY += gravity;
        posY += velocityY;
        
        if (posY <= 60) {
            posY = 60;
            velocityY = 0;
            isJumping = false;
        }
        console.log(posX + "px")
        _character.style.left = posX + "px";
        _character.style.bottom = posY + "px";
        
        moveFlail();
        checkCollision();
        
        requestAnimationFrame(gameLoop);
    }

    function shootProjectile() {
        const projectile = document.createElement('div');
        projectile.classList.add('projectile');
        document.body.appendChild(projectile);
        projectile.style.left = '0px';
        projectile.style.top = `calc(40vh + 200px - 15px)`;

        let position = 0;
        const interval = setInterval(() => {
            position += 5;
            projectile.style.left = `${position}px`;
            if (position > window.innerWidth) {
                clearInterval(interval);
                projectile.remove();
            }
        }, 30);
    }
    setInterval(shootProjectile, 2000);
    
    gameLoop();
})()
    



