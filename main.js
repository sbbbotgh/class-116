noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/rsxj5N2V/clown-nose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("done");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("x = " + noseX + ", y = " + noseY);
        noseX = noseX - 15;
        noseY = noseY - 15;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image( clown_nose,noseX, noseY, 40, 40);
}

function take_snapshot(){
    save('beluga.png');
}