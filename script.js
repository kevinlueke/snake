const cage = document.getElementById('cage'),
      scores = [0];

let playerPos,
    squarePos,
    gameScore = document.getElementById('score');
    square = document.getElementById('square'),
    player = document.querySelector('.snakeBody'),
    divEl = document.createElement('div'),
    size = 2,
    c = 98/size;



window.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    moreSnake();
    playerPos[0][0] += size;
    player.style.height = size + '%';
    player.style.width = size + '%';
    player.style.top = playerPos[0][1]+ '%';
    event.preventDefault();

    dir = 'right';

    let timeout = value => {
      setTimeout(() => {
        player.style.left = playerPos[0][0]+ '%';

        playerPos[0] += 2

        if (dir === 'right') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[0]);

  } else if (event.key === 'ArrowLeft') {
    moreSnake();
    playerPos[0][0] -= size;
    player.style.top = playerPos[0][1] + '%';
    player.style.height = size + '%';
    player.style.width = size + '%';
    event.preventDefault();

    dir = 'left';

    let timeout = value => {
      setTimeout(() => {
        player.style.left = playerPos[0][0] + '%';

        playerPos[0] -= 2;

        if (dir === 'left') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[0]);


  } else if (event.key === 'ArrowUp') {
    moreSnake();
    playerPos[0][1] -= size;
    player.style.left = playerPos[0][0] + '%';
    player.style.height = size + '%';
    player.style.width = size + '%';
    event.preventDefault();

    dir = 'up';
    let timeout = value => {
      setTimeout(() => {
        player.style.top = playerPos[0][1] + '%';

        playerPos[1] -= 2
        if (dir === 'up') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[1]);


  } else if (event.key === 'ArrowDown') {
    moreSnake();
    playerPos[0][1] += size;
    player.style.left = playerPos[0][0] + '%';
    player.style.height = size + '%';
    player.style.width = size + '%';
    event.preventDefault();

    dir = 'down';
    let timeout = value => {
      setTimeout(() => {
        player.style.top = playerPos[0][1] + '%';

        playerPos[1] += 2
        if (dir === 'down') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[1]);


  }

});

gameStart = () => {
    gameScore.textContent = `Score: ${scores[0]}`;
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
    ++scores[0];
    gameScore.textContent = `Score: ${scores[0]}`;
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
    playerPos.unshift(playerPos.pop());
  }
}
