function onInit() {
    const mouse = new MouseEvent("mousemove", {
        view: window,
        screenX: true,
        screenY: true,
        button: true,
    });

    // Mouse move
    document.addEventListener('mousemove', (event) => {
        console.log("move: ", event);
        //movement player
        movePlayer(event.pageX, event.pageY);
    });

    // Mouse click
    // document.addEventListener('click', (event) => {
    //     console.log("click: ", event);
    //     //player shoot
    // });
}

onInit();

function movePlayer(x, y) {
    let playerElement = document.getElementById("player");

    let boxBoundingRect = playerElement.getBoundingClientRect();
    let playerElementCenter = {
        x: boxBoundingRect.left + (boxBoundingRect.width  / 2), 
        y: boxBoundingRect.top  + (boxBoundingRect.height / 2),
    };
    
    let angle = Math.atan2(x - playerElementCenter.x, - (y - playerElementCenter.y)) * (180 / Math.PI);

    playerElement.style.transform = `rotateZ(${angle}deg)`;
}