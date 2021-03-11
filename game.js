"use strict";

function draw() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	drawBackground(ctx);
	drawMountain(ctx);
	drawGround(ctx);
	drawCloud(ctx);
	drawHouse(ctx);
	drawTree(ctx);
	drawGrass(ctx);
	drawSun(ctx);
	captionText(ctx);
}

function drawBackground(ctx){
	ctx.rect(0,0,1000,900); //size of canvas
	ctx.fillStyle='azure';
	ctx.fill();
}

function drawGround(ctx){
	ctx.beginPath();
	ctx.rect(0,875,1000,25);
	ctx.fillStyle='brown';
	ctx.fill();
}

function drawHouse(ctx){
	var x=200, y=725;
	ctx.beginPath();
	//box
	ctx.rect(x,y,150,150);
	ctx.stroke()
	ctx.fillStyle='coral';
	ctx.fill();
	//roof
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x+75,y-75);
	ctx.lineTo(x+150,y);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle='darkgrey';
	ctx.fill();
	//window
	ctx.rect(x+25,y+15,50,25);
	ctx.moveTo(x+25,y+27.5);
	ctx.lineTo(x+75,y+27.5);
	ctx.moveTo(x+50,y+15);
	ctx.lineTo(x+50,y+40);
	ctx.stroke();
	//door
	ctx.beginPath();
	ctx.rect(x+55,y+85,40,65);
	ctx.stroke();
	ctx.fillStyle='chocolate';
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x+65,y+115,5,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle='chocolate';
	ctx.fill();
	
}

function drawGrass(ctx){
	var x=0, y=875;
	ctx.beginPath();
	ctx.moveTo(x, y);
	for (var i = 0; i< 20; i++) {
		//drawing grass
		x+=25;
		y-=25;
		ctx.lineTo(x, y);
		y+=25;
		x+=25;
		ctx.lineTo(x, y);
	}
	ctx.stroke();
	ctx.fillStyle='green';
	ctx.fill();
}

function drawSun(ctx) {
	ctx.beginPath();
	ctx.arc(920, 80, 75, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fillStyle='orange';
	ctx.fill();
}

function drawCloud(ctx){
	var x=100, y=200;
	for (var i = 0; i< 3; i++) {
		//drawing cloud
		ctx.beginPath();
		ctx.arc(x, y, 50, 1*Math.PI, 1.5*Math.PI);
		ctx.arc(x+50, y-50, 50, 1*Math.PI, 0); 
		ctx.arc(x+100, y, 50, 1.5*Math.PI, 0); 
		ctx.lineTo(x-50, y);
		ctx.stroke();
		ctx.fillStyle='white';
		ctx.fill();
		x+=250;
		y-=50;
		if (i==1) {
			y=200;
		}
	}
}

function drawTree (ctx) {
	var x=100, y=725;
	for(var i=0;i<3;i++){
		//trunk
		ctx.beginPath();
		ctx.rect(x, y, 25, 150);
		ctx.stroke();
		ctx.fillStyle= 'brown';
		ctx.fill();
		//leaf
		ctx.beginPath();
		ctx.arc(x+12.5, y-25, 50, 0, 2*Math.PI);
		ctx.fillStyle= 'green';
		ctx.fill();
		x+=440;
	}
	
}

function drawMountain(ctx){
	ctx.beginPath();
	ctx.moveTo(0,900);
	ctx.lineTo(0,725);
	ctx.lineTo(750,225);
	ctx.lineTo(1000,550);
	ctx.lineTo(1000,900);
	ctx.stroke();
	ctx.fillStyle='#ffb366';
	ctx.fill();
}

function captionText(ctx){	
	ctx.font = "30px Arial";
	ctx.fillStyle='darkcyan';
	ctx.fillText("Welcome to my Sweet Home",50,300);
	
}

document.addEventListener('DOMContentLoaded',draw);