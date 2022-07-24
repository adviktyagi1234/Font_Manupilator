function setup() {
    video = createCapture(VIDEO);
    video.size(700,700);
    Canvas = createCanvas(750, 600);
    Canvas.position(800, 150);

    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("DOne!(PoseNet is initialized)");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#e0e711');
}