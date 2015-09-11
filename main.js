var canvas = document.getElementById('gameCanvas');
var canvasContext = canvas.getContext('2d');
var ballX=50;
var speedX = 10;
//var ballY =100;
//var speedY = 10;


window.onload = function(){
canvasContext.fillStyle = 'black';
canvasContext.fillRect(0,0,canvas.width, canvas.height);

var framesPerSec = 25;

setInterval(function(){moveAll(); drawAll();}, 1000/framesPerSec);

};



function moveAll(){
ballX = ballX + speedX;

  if(ballX>canvas.width-10){
    speedX = -speedX;
  }
  if(ballX<0){
    speedX=-speedX;
  }
 
}

function drawAll(){

rect(0,0,canvas.width, canvas.height, 'black');
//left player paddle
rect(0,210,10,100,'white');
//right player paddle
rect(790,210,10,100, 'white');

// the ball
canvasContext.fillStyle = 'maroon';
canvasContext.beginPath();
canvasContext.arc(ballX,100,100,0, Math.PI*2, true); // Makes the ball round
canvasContext.fill();


}

function rect(leftX,topY, width, height, color){
canvasContext.fillStyle = color;
canvasContext.fillRect(leftX,topY,width,height);
}

