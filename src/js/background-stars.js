import { Random } from './utils/RandomNumbers.js';
import { addElementToScreen } from './utils/AddElementToScreen.js';

function onStart() {
    createStars(2);
}

/**
 * Create stars in random positions of screen.
 * level - Amount of stars. Value between `1` and `5`.
 */
function createStars(level) {
    const starMinSize = 1, starMaxSize = 3;
    let starsAmount;

    switch(level) {
        case 1:
            starsAmount = 250;
        break;

        case 2:
            starsAmount = 350;
        break;

        case 3:
            starsAmount = 500;
        break;

        case 4:
            starsAmount = 750;
        break;

        case 5:
            starsAmount = 1000;
        break;
    }

    for(let i = 1; i <= starsAmount; i++) {
        let starElement = document.createElement("span");

        const starSize = setStarSize();

        starElement.style.position = "absolute";
        starElement.style.top = setStarPositionY();
        starElement.style.left = setStarPositionX();
        starElement.style.width  = starSize;
        starElement.style.height = starSize;
        starElement.style.backgroundColor = "white"; // Random - Variar do branco (255, 255, 255) até o amarelo (255, 255, 0)
        starElement.style.boxShadow = "0px 0px 5px 2px gray";
        starElement.style.borderRadius = "50%";
        starElement.className = "star";

        addElementToScreen(starElement);
    }

    function setStarSize() {
        const starSize = Random(starMinSize, starMaxSize);

        return `${starSize}px`;
    }

    function setStarPositionX() {
        const minX = 0;
        const screenWidth = document.body.scrollWidth;

        const starX = Random(minX, screenWidth);

        return `${starX - starMaxSize}px`;
    }

    function setStarPositionY() {
        const minY = 0;
        const screenHeight = document.body.scrollHeight;

        const starY = Random(minY, screenHeight);

        return `${starY - starMaxSize}px`;
    }
}

onStart();