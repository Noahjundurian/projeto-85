canvas = document.getElementById("myCavas");
ctx = cavas.getContext("2d")

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar__x = 5;
greencar_y =  225;

function add() {
	background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = backgorund_image

    greencar_imgTag = new Image()
    greencar_imgTag.onload = uploadGreenCar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(greencar_imgTag,  0, 0, canvas.width, canvas.heigth);

}

function uploadGreenCar() {

 ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	if(greencar_y >=0)
    {
        greencar_y = greencar_y - 38;
        console.log("when up arrow is pressed,  x = " + greencar__x +  " | y = " +greencar_y); 
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(greencar_y >=500)
    {
        greencar_y = greencar_y - 40;
        console.log("when down arrow is pressed,  x = " + greencar__x +  " | y = " +greencar_y); 
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencar_y >=37)
    {
        greencar_y = greencar_y - 37;
        console.log("when  arrow is pressed,  x = " + greencar__x +  " | y = " +greencar_y); 
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(greencar_y >=700)
    {
        greencar_y = greencar_y - 39;
        console.log("when right arrow is pressed,  x = " + greencar__x +  " | y = " +greencar_y); 
        uploadBackground();
        uploadgreencar();
    }
}