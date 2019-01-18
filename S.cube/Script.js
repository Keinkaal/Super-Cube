var D = 0;
var posY = 450;
var posX = 700;
var speed = 2;
var obsCounter = 0;
var jumpCounter = 0;
var face = document.getElementById('Face');
var score = 0;
var Sboard = document.getElementById('Scoreboard');
var end = document.getElementById('gameOver');
var gameNotStarted = true;
function run(){
	if(gameNotStarted){
		gameNotStarted = false;
		face.innerHTML = ":)";
		speed = 2;
		posY = 450;
		posX = 700;
		jumpCounter = 0;
		obsCounter = 0; 
		end.innerHTML = "";
		Sboard.innerHTML = "Score: 0";
		score = 0;
	
		var obs = document.getElementById('obs');
		var timer = setInterval( move, 3);
		function move(){

		
			posX -= speed;
			obs.style.left = posX + 'px' ;
			if(posX <= -50){
				posX = 700;
			}
			if(posY >= 400 && (posX <= 150&&posX >= 100) ){
				clearInterval(timer);
				end.innerHTML = "Gameover! <br> Jump to restart.";
				face.innerHTML = "x[";
				gameNotStarted = true;
			
			}
		
		
		}
	}
}
function Jump(){
	var ScubeY = 0;
	var Deg = 0;
	var block = document.getElementById('block');
	var Jt = setInterval(jump, 1);
	function jump(){
		
		if(posY >= 270 && D == 0){
			
			posY-=speed;
			Deg+=speed;
			block.style.transform = "rotate("+ Deg +"deg)";
			block.style.top = posY +"px";
			if(posY <= 270){
				D = 1;
			}
		}else{
			posY+=speed;
			Deg+=speed;
			block.style.transform = "rotate("+ Deg +"deg)";
			block.style.top = posY +  "px";
			if(posY >= 450){
				jumpCounter++;
				clearInterval(Jt);
				D = 0;
				switch(jumpCounter){
					case 5:
						speed+=1;
						break;
					case 10:
						speed+=1;
						break;
					case 15:
						speed+=1;
						break;
					case 20:
						speed+=1;
						break;
					case 30:
						speed+=2;
						break;
				}
				score += 100;
				Sboard.innerHTML = "Score: " + score;
				deg = 0;
				block.style.transform = "rotate(" + Deg + "deg)";
			}
		}
		
		
	}
}

