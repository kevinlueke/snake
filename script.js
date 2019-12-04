const cage = document.getElementById('body');
let player = document.getElementById('player');
let square = document.getElementById('square');

const playerPos = [6, 11];
//player.style.left = playerPos[0] + 'rem';
//player.style.top = playerPos[1] + 'rem';

const squarePos = [(Math.round(Math.random() * 100)), (Math.round(Math.random() * 100))];
square.style.left = squarePos[0] + 'vw';
square.style.top = squarePos[1] + 'vh';


