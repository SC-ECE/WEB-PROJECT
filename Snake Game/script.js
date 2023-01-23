//Game variables
let InputDir = { x: 0, y: 0 };
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
//let musicSound = new Audio('music.mp3');
let speed = 9;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    //head of snake
    { x: 17, y: 17 }
]
let food = { x: 5, y: 5 };
//const foodSound = new Audio('gamesound.mp3');

//For game loo use animationFrame insted set interval
//game function
//ctime = currentTime

let main = (ctime) => {
    window.requestAnimationFrame(main);
    //check the current timer
    //console.log(ctime);
    //to control FPS
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

//This has two part
let isCollide = (snake) => {
    //if snake touch itself
    for (let i = 1; i < snakeArr.length; i++) {
        if ((snake[i].x === snake[0].x) && (snake[i].y === snake[0].y)) {
            return true;
        }
    }
    //if collide into wall 
    if (snake[0].x > 18 || snake[0].x <= 0 || snake[0].y > 18 || snake[0].y <= 0) {
        return true;
    }

}
const gameEngine = () => {
    //musicSound.play();
    //part:1 Updating the snake array
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        //musicSound.pause()
        InputDir = { x: 0, y: 0 };
        alert("Game Over Press Any Key to play again");
        snakeArr = [{ x: 13, y: 15 }];
        //musicSound.paly();
        score = 0;
    }

    //If snake eat the food, increment the score and regenerate the food
    if ((snakeArr[0].x === food.x) && (snakeArr[0].y === food.y)) {
        foodSound.play();
        score += 1;
        //now add one element to snake
        // unshift will add the element in array at start
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + InputDir.x, y: snakeArr[0].y + InputDir.y })
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    //Moving the Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += InputDir.x;
    snakeArr[0].y += InputDir.y;

    //part:2 Display the snake and food
    board.innerHTML = '';
    snakeArr.forEach((e, index) => {
        //Creatng and element in HTML docuent
        //Display the snake in the board
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index == 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    //dispaly the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}
window.requestAnimationFrame(main);

//Game Start
window.addEventListener('keydown', (e) => {
    InputDir = { x: 0, y: 1 };
    //sound paly here on key Press
    //moveSound.play()
    switch (e.key) {
        case 'ArrowUp':
            //on arrow Up y negative x nothing
            InputDir.x = 0;
            InputDir.y = -1;
            break;
        case 'ArrowDown':
            //on down y positive x nothing
            InputDir.x = 0;
            InputDir.y = 1;
            break;
        case 'ArrowRight':
            //on down y nothing x positive
            InputDir.x = 1;
            InputDir.y = 0;
            break;
        case 'ArrowLeft':
            //on down y othinf x negative
            InputDir.x = -1;
            InputDir.y = 0;
            break;
        default:
            break;
    }
})

