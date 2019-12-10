const cage = document.getElementById('cage');

let playerPos,
  squarePos,
  dir,
  scores = 0,
  gameScore = document.getElementById('score'),
  square = document.getElementById('square'),
  player = document.querySelector('.snakeBody'),
  divEl = document.createElement('div'),
  size = 4,
  playerLoc = [],
  i = 0,
  j = 0,
  c = 98 / size,
  k = true;

//Directions the snake moves
const move = (event) => {
  if (k === true) {
    if (event.key === 'ArrowRight' && dir !== 'left') {
      k = false;
      j = 0
      event.preventDefault();
      dir = 'right';
      let timeout = value => {
        setTimeout(() => {


          if (dir === 'right') {
            moreSnake();
            playerPos[0][0] += size;
            // playerLoc.push(playerPos);
            // updating snakes position
            player.style.left = playerPos[0][0] + '%';
            player.style.height = size + '%';
            player.style.width = size + '%';
            player.style.top = playerPos[0][1] + '%';
            k = true;
            timeout(value);
          }
        }, 100)
      }
      if (i === 0) {
        ++i;
        timeout(playerPos[0][0]);
      }

    } else if (event.key === 'ArrowLeft' && dir !== 'right') {
      k = false;
      j = 0;
      event.preventDefault();

      dir = 'left';

      let timeout = value => {
        setTimeout(() => {


          if (dir === 'left') {
            moreSnake();
            playerPos[0][0] -= size;
            //playerLoc.push(playerPos);
            player.style.left = playerPos[0][0] + '%';
            player.style.top = playerPos[0][1] + '%';
            player.style.height = size + '%';
            player.style.width = size + '%';
            k = true;
            timeout(value);

          }
        }, 100)
      }

      if (i === 0) {
        ++i;
        timeout(playerPos[0][0]);
      }

    } else if (event.key === 'ArrowUp' && dir !== 'down') {
      k = false;
      i = 0;
      event.preventDefault();

      dir = 'up';
      let timeout = value => {
        setTimeout(() => {
          if (dir === 'up') {
            moreSnake();
            playerPos[0][1] -= size;
            // playerLoc.push(playerPos);
            player.style.top = playerPos[0][1] + '%';
            player.style.left = playerPos[0][0] + '%';
            player.style.height = size + '%';
            player.style.width = size + '%';
            k = true;
            timeout(value);
          }
        }, 100)
      }

      if (j === 0) {
        ++j;
        timeout(playerPos[0][1]);
      }

    } else if (event.key === 'ArrowDown' && dir !== 'up') {
      k = false;
      i = 0;
      event.preventDefault();
      dir = 'down';
      let timeout = value => {
        setTimeout(() => {

          if (dir === 'down') {
            moreSnake();
            playerPos[0][1] += size;
            // playerLoc.push(player.style.left);
            player.style.top = playerPos[0][1] + '%';
            player.style.left = playerPos[0][0] + '%';
            player.style.height = size + '%';
            player.style.width = size + '%';
            k = true;
            timeout(value);
          }
        }, 100)
      }

      if (j === 0) {
        ++j;
        timeout(playerPos[0][1]);
      }
    }
    //console.log(playerLoc);
  }
}
gameStart = () => {
  gameScore.textContent = `Score: ${scores}`;
  //Creates a div for snake and selects it, styles it
  cage.appendChild(divEl);
  divEl.className = 'snakeBody';
  player = document.querySelector('.snakeBody');
  playerPos = [
    [size, size]
  ];
  //playerLoc.unshift(player.style.top);
  //playerLoc.unshift(player.style.left);
  player.style.height = size + '%';
  player.style.width = size + '%';

  player.style.left = playerPos[0][0] + '%';
  player.style.top = playerPos[0][1] + '%';
  squarePos = [
    [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size]
  ];
  square.style.height = size + '%';
  square.style.width = size + '%';

  square.style.left = squarePos[0][0] + '%';
  square.style.top = squarePos[0][1] + '%';
  document.addEventListener('keydown', move);
}

gameOver = () => {

}



gameStart();
//Function that grows snake
const moreSnake = () => {
  if ((player.style.left.localeCompare(square.style.left) === 0) && (player.style.top.localeCompare(square.style.top) === 0)) {
    gameScore.textContent = `Score: ${++scores}`;
    //updates squares random position
    squarePos = [
      [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size]
    ];
    square.style.left = squarePos[0][0] + '%';
    square.style.top = squarePos[0][1] + '%';
    //playerLoc.unshift(player.style.top);
    //playerLoc.unshift(player.style.left);

    // creates a div element and appends it to the cage. Gives it the class snakeBody
    cage.append(divEl);
    divEl.className = 'snakeBody';
    player = document.querySelector('.snakeBody');
    //fix empty block bug
    if (dir === 'right') {
      playerPos[0][0] -= size;
    } else if (dir === 'left') {
      playerPos[0][0] += size;
    } else if (dir === 'up') {
      playerPos[0][1] += size;
    } else if (dir === 'down') {
      playerPos[0][1] -= size;
    }
  } else {
    // playerLoc.unshift(player.style.top);
    // playerLoc.unshift(player.style.left);
    // playerLoc.pop();
    // playerLoc.pop();

    // Takes the already existing div and moves it to the end
    // It will then update the current player and updates div
    console.log(playerPos);
    cage.append(player);
    player = document.querySelector('.snakeBody');
    divEl = document.createElement('div');
    gameOver();
  }
}
