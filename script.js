const cage = document.getElementById('cage');

let playerPos,
    squarePos,
    scores = 0,
    gameScore = document.getElementById('score'),
    square = document.getElementById('square'),
    player = document.querySelector('.snakeBody'),
    divEl = document.createElement('div'),
    size = 4,
    playerLoc = [],
    c = 98/size;

const move = (event) => {
 if (event.key === 'ArrowRight') {
   moreSnake();
   playerPos[0][0] += size;
   player.style.left = playerPos[0][0] + '%';
   player.style.height = size + '%';
   player.style.width = size + '%';
   player.style.top = playerPos[0][1] + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowLeft') {
   moreSnake();
   playerPos[0][0] -= size;
   player.style.left = playerPos[0][0] + '%';
   player.style.top = playerPos[0][1] + '%';
   player.style.height = size + '%';
   player.style.width = size + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowUp') {
   moreSnake();
   playerPos[0][1] -= size;
   player.style.top = playerPos[0][1] + '%';
   player.style.left = playerPos[0][0] + '%';
   player.style.height = size + '%';
   player.style.width = size + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowDown') {
   moreSnake();
   playerPos[0][1] += size;
   player.style.top = playerPos[0][1] + '%';
   player.style.left = playerPos[0][0] + '%';
   player.style.height = size + '%';
   player.style.width = size + '%';
   event.preventDefault();
 }
};

gameStart = () => {
    gameScore.textContent = `Score: ${scores}`;
    cage.appendChild(divEl);
    divEl.className = 'snakeBody';
    player = document.querySelector('.snakeBody');
    playerPos = [ [size, size] ];
    playerLoc.push(playerPos);
    player.style.height = size + '%';
    player.style.width = size + '%';

    player.style.left = playerPos[0][0] + '%';
    player.style.top = playerPos[0][1] + '%';
    squarePos = [ [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size] ];
    square.style.height = size + '%';
    square.style.width = size + '%';

    square.style.left = squarePos[0][0] + '%';
    square.style.top = squarePos[0][1] + '%';
    document.addEventListener('keydown', move);
    }
gameStart();
const moreSnake = () => {
  playerLoc.push(playerPos);
  if ((player.style.left.localeCompare(square.style.left) === 0) && (player.style.top.localeCompare(square.style.top) === 0)) {
    ++scores[0];
    gameScore.textContent = `Score: ${++scores}`;
    squarePos = [ [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size] ];
    square.style.left = squarePos[0][0] + '%';
    square.style.top = squarePos[0][1] + '%';
    player.before(divEl);
    divEl.className = 'snakeBody';
    player = document.querySelector('.snakeBody');
  } else {
    cage.append(player);
    playerLoc.pop();
    player = document.querySelector('.snakeBody');
    divEl = document.createElement('div');
    //playerPos.unshift(playerPos.pop());
    console.log(playerLoc);
  }
}

//resetGame = () => {
  //gameStart();
  //reset score
//}
//document.getElementById('reset').addEventListener('click', resetGame)
