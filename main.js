rover_x=10;
rover_y=10;
rover_image="rover.png";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasaimagesarray=["image1.png", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
random_number=Math.floor(Math.random()*5);
background_image=nasaimagesarray[random_number]
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, 0, 0, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }
    if(keypressed == '40'){
        right();
        console.log("right");
    }
    if(keypressed == '41'){
    down();
    console.log("down")
    }
    if(keypressed == '37'){
        left();
        console.log("left")

    }


function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x="+rover_x + " | y="+rover_y);
        uploadBackground();
        uploadrover();

    }
}
function down(){
if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x="+rover_x + " | y="+rover_y);
        uploadBackground();
        uploadrover();

    }
    
}
function left(){
if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x="+rover_x + " | y="+rover_y);
        uploadBackground();
        uploadrover();

    }
    
}
function right(){
if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When down right is pressed, x="+rover_x + " | y="+rover_y);
        uploadBackground();
        uploadrover();

    }
    
}
}