const cage = document.getElementById('cage');
let player = document.getElementById('snake');
let square = document.getElementById('square');
let dir;
let size = 2;
let c = 98 / size;

const playerPos = [2, 2];
player.style.height = size + '%';
player.style.width = size + '%';

player.style.left = playerPos[0] + '%';
player.style.top = playerPos[1] + '%';

const squarePos = [(Math.floor(Math.random() * c)) * size, (Math.floor(Math.random() * c)) * size];
square.style.height = size + '%';
square.style.width = size + '%';

square.style.left = squarePos[0] + '%';
square.style.top = squarePos[1] + '%';



window.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') {
    dir = 'right';

    let timeout = value => {
      setTimeout(() => {
        player.style.left = playerPos[0] + '%';

        playerPos[0] += 2

        if (dir === 'right') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[0]);

  } else if (event.key === 'ArrowLeft') {
    dir = 'left';

    let timeout = value => {
      setTimeout(() => {
        player.style.left = playerPos[0] + '%';

        playerPos[0] -= 2;

        if (dir === 'left') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[0]);


  } else if (event.key === 'ArrowUp') {
    dir = 'up';
    let timeout = value => {
      setTimeout(() => {
        player.style.top = playerPos[1] + '%';

        playerPos[1] -= 2
        if (dir === 'up') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[1]);


  } else if (event.key === 'ArrowDown') {
    dir = 'down';
    let timeout = value => {
      setTimeout(() => {
        player.style.top = playerPos[1] + '%';

        playerPos[1] += 2
        if (dir === 'down') {
          timeout(value)
        }
      }, 150)
    }
    timeout(playerPos[1]);


  }

});
