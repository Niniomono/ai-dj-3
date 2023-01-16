song = "";
mau = "";
eee = "";
function preLoad() {
    song = loadSound("music.mp3");
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw() {
    Image(video, 0, 0, 600, 500());
}
function play() {
    song.play();
}
function gotPoses(results) {
    if(results.length > 0) {
     console.log(results);
     leftWristX = results[0].pose.leftWrist.X;
     leftWristY = results[0].pose.leftWrist.Y;
     console.log("leftWristX = " + leftWristX +" lefttWristY = "+ leftWristY);
     rightWristX = results[0].pose.rightWrist.X;
     rightWristY = results[0].pose.rightWrist.Y;
     console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
 }