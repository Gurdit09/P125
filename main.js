difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup()
 {   video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
 }

 function draw(){
    background('white');
    document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill("red");
    text('Gurdit',50 , 400);
 }

 function modelLoaded()
 {
    console.log('PoseNet Is Initalized!');
 }

 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }

 }

