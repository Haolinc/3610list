var spritesheet = {
	"frames": [
		{
			"frame": {
				"x": 50,
				"y": 50,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		},
		{
			"frame": {
				"x": 250,
				"y": 50,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		},
		{
			"frame": {
				"x": 50,
				"y": 250,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		},
		{
			"frame": {
				"x": 250,
				"y": 250,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		},
		{
			"frame": {
				"x": 450,
				"y": 50,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		},
		{
			"frame": {
				"x": 450,
				"y": 250,
				"w": 100,
				"h": 100
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 100,
				"h": 100
			},
			"sourceSize": {
				"w": 100,
				"h": 100
			}
		}
	]
}



var num_img = new Image();
num_img.src = './spritesheet.png';


var canvas_count = document.getElementById('canvas');
var ctx = canvas_count.getContext('2d');


var currentLoop = 0;
var textOrder = 0;
var timeElapse = 0;
var hand = false;
var man = false;

var bubbleImg = new Image();
bubbleImg.src = './bubble.png';

function drawBubble(hand, man) {
	if (hand) {
		ctx.drawImage(bubbleImg, 0, 0, 200, 200);
	}
	if (man) {
		ctx.drawImage(bubbleImg, 325, 75, 200, 200);
	}
}

function drawNum(i){
  ctx.drawImage(num_img,spritesheet.frames[i].frame.x ,spritesheet.frames[i].frame.y, spritesheet.frames[i].frame.w, spritesheet.frames[i].frame.h, 250, 250, spritesheet.frames[i].sourceSize.w, spritesheet.frames[i].sourceSize.h);
}

function drawTextAndBubble(i) {
	ctx.font = "20px Arial";
	switch (i) {
		case 0:
			ctx.clearRect(0,0,200,200);
			ctx.clearRect(325,75,200,200);
			man = true;
			drawBubble(hand, man);
			ctx.fillText("Why am I keep", 360, 160);
			ctx.fillText("running????", 370, 190);
			man = false;
			break;
		case 1:
			ctx.clearRect(0,0,200,200);
			ctx.clearRect(325,75,200,200);
			hand = true;
			drawBubble(hand, man);
			ctx.fillText("You will be", 50, 60);
			ctx.fillText("running until the",30, 90);
			ctx.fillText("website close.", 40, 120);
			hand = false;
			break;
		case 2:
			ctx.clearRect(0,0,200,200);
			ctx.clearRect(325,75,200,200);
			hand = true;
			drawBubble(hand, man);
			ctx.fillText("See if you can", 40, 70);
			ctx.fillText("escape from", 50, 100);
			ctx.fillText("me.", 80, 130);
			hand = false;
			break;
		case 3:
			ctx.clearRect(0,0,200,200);
			ctx.clearRect(325,75,200,200);
			man = true;
			drawBubble(hand, man);
			ctx.fillText("Noooooooo!", 370, 175);
			man = false;
			break;
	}
	
}

function actualDrawing() {
	ctx.clearRect(250,250, 100, 100);
	drawTextAndBubble(textOrder);
	timeElapse+=0.01;
	if (timeElapse > 0 && timeElapse < 1) {
		textOrder = 0;
	}
	else if (timeElapse > 1 && timeElapse < 2) {
		textOrder = 1;
	}
	else if (timeElapse > 2 && timeElapse < 3) {
		textOrder = 2;
	}
	else if (timeElapse > 3 && timeElapse < 4) {
		textOrder = 3;
	}
	else {
		textOrder = 0;
		timeElapse = 0;
	}
		
	console.log(textOrder);
    drawNum(currentLoop);
	currentLoop++;
	if (currentLoop == 5)
		currentLoop = 0;
}

function drawImg(){
    setInterval(actualDrawing, 50);
	
}

document.addEventListener('DOMContentLoaded',drawImg);