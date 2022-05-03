
var canvas = new fabric.Canvas('myCanvas');

ballY=0;
ballX=0;
holeY=400;
holeX=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeObj);
	    });
	new_image();
	}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
		top:ballY,
		left:ballX
		});
		canvas.add(ballObj);
	    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ballObj);
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY >5)
		{
			ballY = ballY - block_image_height;
			 console.log("Altura da imagem do bloco = " + block_image_height);
			 console.log("Quando a tecla direcional baixo é pressionada, X =  " + ball_x + " , Y = "+ball_y);
			 canvas.remove(ballObj);
			 new_image();
		}
	}

	function down()
	{
		 if(ballY <=450)
		 {
			 ballY = ballY + block_image_height;
			 console.log("Altura da imagem do bloco = " + block_image_height);
			 console.log("Quando a tecla direcional baixo é pressionada, X =  " + ballX + " , Y = "+ballY);
			 canvas.remove(ballObj);
			 new_image();
		 }
	}

	function left()
	{
		if(ballX >5)
		{
			ballX = ballX - block_image_width;
			 console.log("Altura da imagem do bloco = " + block_image_width);
			 console.log("Quando a tecla direcional baixo é pressionada, X =  " + ballX + " , Y = "+ballY);
			 canvas.remove(ballObj);
			 new_image();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX = ballX + block_image_width;
			 console.log("Altura da imagem do bloco = " + block_image_width);
			 console.log("Quando a tecla direcional baixo é pressionada, X =  " + ballX + " , Y = "+ballY);
			 canvas.remove(ballObj);
			 new_image();
		}
	}
	
}

