const cage = document.getElementById('cage');
let player = document.getElementById('player');
let square = document.getElementById('square');
let size = 2;
let c = 98/size;

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
square.style.right = squarePos[0] + '%';
square.style.bottom = squarePos[1] + '%';
  
