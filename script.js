class Vec 
{
	constructor(x = 0, y = 0){
		this.x = x;
		this.y = y;
	}
}


class Rect {
	constructor(w, h){
		this.pos = new Vec;
		this.size = new Vec(w, h);
	}
	get left(){
		return this.pos.x - this.size.x /  2;
	}

		get right(){
		return this.pos.x + this.size.x /  2;
	}

		get top(){
		return this.pos.y - this.size.y /  2;
	}

		get bottom(){
		return this.pos.y + this.size.y /  2;
	}
}

class Ball extends Rect{
	constructor(){
		super(10, 10);
		this.vel = new Vec;
	}
}
class Pong {
	constructor(canvas){
		this._canvas = canvas;
		this._context = canvas.getContext('2d');
	}

	update(dt) {
	ball.pos.x += ball.vel.x * dt;
 	ball.pos.y += ball.vel.y * dt;

 	if (ball.left < 0 ||  ball.right > this._canvas.width) {
 		ball.vel.x = -ball.vel.x;
 	}

 	if (ball.top < 0 || ball.bottom > this._canvas.height) {
 		ball.vel.y = -ball.vel.y;
 	}

	this._context.fillStyle = '#009';
	this._context.fillRect(0, 0, 
		this._canvas.width, this._canvas.height);

	this._context.fillStyle = '#fff';
	this._context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

}
const canvas = document.getElementById('pong');


const ball = new Ball;
console.log(ball)
ball.pos.x = 100;
ball.pos.y = 50;

ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;
function callback(millis) {
	if(lastTime){
		update((millis - lastTime)/ 1000) 
	}
	lastTime = millis;
	requestAnimationFrame(callback);
}
function update(dt) {
	ball.pos.x += ball.vel.x * dt;
 	ball.pos.y += ball.vel.y * dt;

 	if (ball.left < 0 ||  ball.right > canvas.width) {
 		ball.vel.x = -ball.vel.x;
 	}

 	if (ball.top < 0 || ball.bottom > canvas.height) {
 		ball.vel.y = -ball.vel.y;
 	}

	context.fillStyle = '#009';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = '#fff';
	context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

callback();






