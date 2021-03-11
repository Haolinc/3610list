"use strict";

function draw() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var fruit = [
		{name:"Apple", quantity:20, color:"red"},
		{name:"Orange", quantity:10, color:"orange"},
		{name:"Banana", quantity:15, color:"yellow"},
		{name:"Kiwi", quantity:3, color:"green"},
		{name:"Blueberry", quantity:5, color:"blue"},
		{name:"Grapes", quantity:8, color:"purple"}
	];
	drawName(ctx);
	drawChart(ctx, fruit);
}
function drawName(ctx){
	ctx.save();
	ctx.beginPath();
	ctx.font="20px Arial";
	ctx.textAlign="center";
	ctx.fillText("Chen, Haolin", 500, 50);
	ctx.restore();
}

function drawChart(ctx, fruit){
	var x = 150, y = 600;
	for (var i=0;i<fruit.length;i++){
		ctx.save();
		ctx.beginPath();
		for (var j=0;j<fruit[i].quantity;j++){
			y-=20;
			ctx.rect(x,y,100,20);
		}
		ctx.fillStyle=fruit[i].color;
		ctx.fill();
		x+=100; //move right
		y=600; //reset
		ctx.restore();
		ctx.font="bold 20px Arial";
		ctx.textAlign = "center";
		ctx.fillText(fruit[i].quantity, x-50, y-25);
		ctx.fillText(fruit[i].name, x-50, y-5);
	}
}

document.addEventListener('DOMContentLoaded',draw);