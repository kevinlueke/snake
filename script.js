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
  
if ((player.style.left === square.style.left /*player arr index 01 is equal to square indes 01.*/) && (player.style.top === square.style.top )) {
  //square becomes snake and removes square id
  //takes coordinates inside an array from square and puts it into snake array
  //when square randomly regenerates it adds coordinates back to array
}
const squareArr = [squarePos[0], squarePos[1]];
playerPos.reverse();
while (squareArr.length > 0) {
  playerPos.push(squareArr.pop());
}
playerPos.reverse();
//remove id square
square.classList.add('snakeBody');
square.removeAttribute(square);
//creat new div with id square
let newSquare = document.createElement('div');
newSquare.setAttribute('id', 'square');
main.appendChild(newSquare);
//add class player
console.log(playerPos);
//move block
 

