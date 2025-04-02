console.log("szia");

(() => {
    const _character = document.querySelector(".character");
    const spikes = document.querySelectorAll(".spike");
    const platforms = document.querySelectorAll(".platform");
    const cannonballs = []; // Tároljuk a kilőtt golyókat

    let startX = 70;
    let startY = 70;
    let posX = startX;
    let posY = startY;
    let velocityY = 0;
    let gravity = -0.4;
    let isJumping = false;
    let keys = {};
    let facingRight = true; // Az irány nyomon követése

    
    // Buzogány létrehozása
    const flailTop = document.createElement("div");
    const flailBottom = document.createElement("div");
    flailTop.classList.add("flail");
    flailBottom.classList.add("flail");
    document.body.appendChild(flailTop);
    document.body.appendChild(flailBottom);

    let flailPosX = 1300;
    let flailDirection = 1;

    let navigate = null;

    window.games = {
        setNavigate: (nav) => {
            navigate = nav;
        }
    };

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

        for (let cannonball of cannonballs) {
            let cannonballRect = cannonball.getBoundingClientRect();
            if (
                charRect.left < cannonballRect.right &&
                charRect.right > cannonballRect.left &&
                charRect.top < cannonballRect.bottom &&
                charRect.bottom > cannonballRect.top
            ) {
                resetCharacter();
            }
        }

        let goal = document.querySelector(".goal");
        if (goal) {
            let goalRect = goal.getBoundingClientRect();
            if (
                charRect.left < goalRect.right &&
                charRect.right > goalRect.left &&
                charRect.top < goalRect.bottom &&
                charRect.bottom > goalRect.top
            ) {
                console.log("hi")
                
                window.location.href = "/game";
            }
        }
    }

    function resetCharacter() {
        posX = startX;
        posY = startY;
        velocityY = 0;
        _character.style.left = posX + "px";
        _character.style.bottom = posY + "px";
    }

    function checkPlatformCollision() {
        let charRect = _character.getBoundingClientRect();
        for (let platform of platforms) {
            let platformRect = platform.getBoundingClientRect();
            if (
                charRect.bottom <= platformRect.top + 5 &&
                charRect.bottom >= platformRect.top - 5 &&
                charRect.right > platformRect.left &&
                charRect.left < platformRect.right &&
                velocityY <= 0
            ) {
                posY = window.innerHeight - platformRect.top;
                velocityY = 0;
                isJumping = false;
                break;
            }
        }
    }

    function gameLoop() {
        if (keys["a"]) {
            posX -= 3;
            if (facingRight) {
                _character.style.transform = "scaleX(-1)";
                facingRight = false;
            }
        }
        if (keys["d"]) {
            posX += 3;
            if (!facingRight) {
                _character.style.transform = "scaleX(1)";
                facingRight = true;
            }
        }
        if (keys["w"] && !isJumping) {
            velocityY = 13;
            isJumping = true;
        }

        velocityY += gravity;
        posY += velocityY;

        checkPlatformCollision();

        _character.style.left = posX + "px";
        _character.style.bottom = posY + "px";

        moveFlail();
        checkCollision();

        requestAnimationFrame(gameLoop);
    }

    function shootProjectile() {
        const projectile = document.createElement("div");
        projectile.classList.add("projectile");
        document.body.appendChild(projectile);
        projectile.style.left = "10px";
        projectile.style.top = `calc(38.5vh + 200px - 11px)`;

        let position = 10;
        cannonballs.push(projectile);

        const interval = setInterval(() => {
            position += 11;
            projectile.style.left = `${position}px`;
            if (position > window.innerWidth) {
                clearInterval(interval);
                projectile.remove();
                cannonballs.splice(cannonballs.indexOf(projectile), 1);
            }
        }, 25);
    }

    setInterval(shootProjectile, 2000);

    gameLoop();
})();
