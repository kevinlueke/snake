const cage = document.getElementById('cage');
let player = document.getElementById('snake');
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

const move = (event) => {
 if (event.key === 'ArrowRight') {
   playerPos[0] += 2;
   player.style.left = playerPos[0] + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowLeft') {
   playerPos[0] -= 2;
   player.style.left = playerPos[0] + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowUp') {
   playerPos[1] -= 2;
   player.style.top = playerPos[1] + '%';
   event.preventDefault();
 } else if (event.key === 'ArrowDown') {
   playerPos[1] += 2;
   player.style.top = playerPos[1] + '%';
   event.preventDefault();
 }
};
document.addEventListener('keydown', move);
