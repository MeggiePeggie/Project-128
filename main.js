riptide = "";
shut_up_and_dance = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    riptide = loadSound("Vance Joy - Riptide.mp3");
    shut_up_and_dance = loadSound("Walk The Moon - Shut Up and Dance.mp3");
}

/* function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
} */

function setup() 
{ 
    canvas = createCanvas(600, 500); 
    canvas.center(); 

    video = createCapture(VIDEO); 
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PosNet is initialised!')
}

/* function draw()
{
    image(video, 0, 0, 600, 500);
} */

function draw() 
{ 
    image(video, 0, 0, 600, 500); 
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}