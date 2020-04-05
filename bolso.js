const FRAME = 100/6;
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var bolsoX = 100;
var bolsoY = 100;
var mascaraX = 0;
var mascaraY = 0;

var auxCount = 0;

canvas.addEventListener("mousemove", moveMask);

loop();

function render()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(document.getElementById("bolso"), bolsoX, bolsoY, 150, 150);
	ctx.drawImage(document.getElementById("mascara"), mascaraX, mascaraY, 100, 100);
}

function moveBolso()
{
	bolsoX = Math.floor(Math.random() * canvas.width);
	bolsoY = Math.floor(Math.random() * canvas.height);
}

function loop()
{
	auxCount += 1;
	if(auxCount>50)
	{
		moveBolso();
		auxCount=0;
	}

	render(ctx);
	setTimeout(loop, FRAME);
}

function moveMask()
{
	mascaraX = event.clientX - event.currentTarget.getBoundingClientRect().left; 
	mascaraY = event.clientY - event.currentTarget.getBoundingClientRect().top;
}