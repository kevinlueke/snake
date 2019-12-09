const cage = document.getElementById('cage');

let playerPos,
    squarePos,
    scores = 0,
    gameScore = document.getElementById('score'),
    square = document.getElementById('square'),
    player = document.querySelector('.snakeBody'),
    divEl = document.createElement('div'),
    size = 5,
    c = 98/size;

const move = (event) => {
  if (event.key === 'ArrowRight') {

    event.preventDefault();
    dir = 'right';
    let timeout = value => {
      setTimeout(() => {


       if (dir === 'right') {
           moreSnake();
         playerPos[0][0] += size;
         player.style.left = playerPos[0][0] + '%';
         player.style.height = size + '%';
         player.style.width = size + '%';
         player.style.top = playerPos[0][1] + '%';
          timeout(value);

        }
      }, 200)
    }
   timeout(playerPos[0][0]);

  } else if (event.key === 'ArrowLeft') {

    event.preventDefault();

    dir = 'left';

    let timeout = value => {
      setTimeout(() => {


        if (dir === 'left') {
            moreSnake();
          playerPos[0][0] -= size;
          player.style.left = playerPos[0][0] + '%';
          player.style.top = playerPos[0][1] + '%';
          player.style.height = size + '%';
          player.style.width = size + '%';
          timeout(value);

        }
      }, 200)
    }
   timeout(playerPos[0][0]);


  } else if (event.key === 'ArrowUp') {

    event.preventDefault();

    dir = 'up';
    let timeout = value => {
      setTimeout(() => {



        if (dir === 'up') {
          moreSnake();
          playerPos[0][1] -= size;
          player.style.top = playerPos[0][1] + '%';
          player.style.left = playerPos[0][0] + '%';
          player.style.height = size + '%';
          player.style.width = size + '%';
          timeout(value);
        }
      }, 200)
    }
    timeout(playerPos[0][1]);


  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    dir = 'down';
    let timeout = value => {
      setTimeout(() => {

        if (dir === 'down') {
          moreSnake();
          playerPos[0][1] += size;
          player.style.top = playerPos[0][1] + '%';
          player.style.left = playerPos[0][0] + '%';
          player.style.height = size + '%';
          player.style.width = size + '%';
          timeout(value);
        }
      }, 200)
    }
    timeout(playerPos[0][1]);
  }
}

gameStart = () => {
    gameScore.textContent = `Score: ${scores}`;
    cage.appendChild(divEl);
    divEl.className = 'snakeBody';
    player = document.querySelector('.snakeBody');
    playerPos = [ [size, size] ];
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
  if ((player.style.left.localeCompare(square.style.left) === 0) && (player.style.top.localeCompare(square.style.top) === 0)) {
    ++scores;
    gameScore.textContent = `Score: ${scores}`;
    squarePos = [ [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size] ];
    square.style.left = squarePos[0][0] + '%';
    square.style.top = squarePos[0][1] + '%';
    player.before(divEl);
    divEl.className = 'snakeBody';
    player = document.querySelector('.snakeBody');
  } else {
    cage.append(player);
    player = document.querySelector('.snakeBody');
    divEl = document.createElement('div');
  }
}
