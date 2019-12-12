const cage = document.getElementById('cage');
let playerHead,
    playerLoc  = [],
  squarePos,
  dir,
  scores = 0,
  gameScore = document.getElementById('score'),
  square = document.getElementById('square'),
  player = document.querySelector('.snakeBody'),
  divEl = document.createElement('div'),
  size = 4,
  i = 0,
  c = 98 / size,
  k = true;

const timeout = value => {
  setTimeout(() => {
      ++i;
      moreSnake();
      player.style.top = playerHead[1] + '%';
      player.style.left = playerHead[0] + '%';
      player.style.height = size + '%';
      player.style.width = size + '%';
      k = true;
      if (dir !== null) timeout(value);
  }, 100)
}
//Directions the snake moves
const move = (event) => {
  if (k) {
    if (typeof(dir) === 'string') {
      event.preventDefault();
      k = false;
    }
    if (event.key === 'ArrowRight' && dir !== 'left') {
      dir = 'right';
      i === 0 ? timeout(playerHead[0]) : i = 0;
    } else if (event.key === 'ArrowLeft' && dir !== 'right') {
      dir = 'left';
      i === 0 ? timeout(playerHead[0]) : i = 0;
    } else if (event.key === 'ArrowUp' && dir !== 'down') {
      dir = 'up';
      i === 0 ? timeout(playerHead[1]) : i = 0;
    } else if (event.key === 'ArrowDown' && dir !== 'up') {
      dir = 'down'; 
      i === 0 ? timeout(playerHead[1]) : i = 0;
    }
  }
}
gameStart = () => {
  gameScore.textContent = `Score: ${scores}`;
  //Creates a div for snake and selects it, styles it
  cage.appendChild(divEl);
  divEl.className = 'snakeBody';
  player = document.querySelector('.snakeBody');
  playerHead = [size, size];
  playerLoc.push(Array.from(playerHead));
  player.style.height = size + '%';
  player.style.width = size + '%';

  player.style.left = playerHead[0] + '%';
  player.style.top = playerHead[1] + '%';
  squarePos = [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size];
  square.style.height = size + '%';
  square.style.width = size + '%';

  square.style.left = squarePos[0] + '%';
  square.style.top = squarePos[1] + '%';
  document.addEventListener('keydown', move);
}

gameOver = () => {
    dir = null;
    playerLoc = [];
    document.removeEventListener('keydown', move);
    //cage.append(divEl);
    //divEl.className = 'dead';
}



gameStart();
//Function that grows snake
const moreSnake = () => {
  if ((player.style.left === square.style.left) && (player.style.top === square.style.top)) {
    gameScore.textContent = `Score: ${++scores}`;
    //updates squares random position
    squarePos = [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size];
    square.style.left = squarePos[0] + '%';
    square.style.top = squarePos[1] + '%';
    playerLoc.unshift(Array.from(playerHead));
    // creates a div element and appends it to the cage. Gives it the class snakeBody
    cage.append(divEl);
    divEl.className = 'snakeBody'; 
     } else {
    // Takes the already existing div and moves it to the end
    // It will then update the current player and updates div
    cage.append(player);
    player = document.querySelector('.snakeBody');
    divEl = document.createElement('div');
    if (dir === 'right') playerHead[0] += size;
    if (dir === 'left') playerHead[0] -= size;
    if (dir === 'up') playerHead[1] -= size;
    if (dir === 'down') playerHead[1] += size;
    playerLoc.unshift(Array.from(playerHead));
    playerLoc.pop();
       if (checkArray(playerLoc[0], playerLoc.slice(1))) {
         gameOver();
       }
  }
}

checkArray = (a, arr) => {
  for (const element of arr) {
    if (a[0] === element[0] && a[1] === element[1]) {
      return true;
    }
  }
  return false;  
}
